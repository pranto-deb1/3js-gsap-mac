"use client";
import React, { useRef } from "react";
import * as THREE from "three";
import MacBook16Model from "../models/macbook-16";
import MacBook14Model from "../models/macbook-14";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 0.4;
const OFFSET_DISTANCE = 10;

const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
  if (!group) return;
  group.traverse((child: THREE.Object3D) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];

      materials.forEach((mat) => {
        mat.transparent = true;
        gsap.to(mat, { opacity, duration: ANIMATION_DURATION });
      });
    }
  });
};

const moveMeshes = (group: THREE.Group | null, x: number) => {
  if (!group) return;
  gsap.to(group.position, {
    x,
    duration: ANIMATION_DURATION,
    ease: "power2.inOut",
  });
};

interface ModelSwitcherProps {
  size: number;
  isMobile: boolean;
}

function ModelSwitcher({ size, isMobile }: ModelSwitcherProps) {
  const largeMacRef = useRef<THREE.Group>(null);
  const smallMacRef = useRef<THREE.Group>(null);

  const showLargeMacBook = size === 16;

  const controlsConfig = {
    snap: true,
    speed: 2,
    azimuth: [-Infinity, Infinity] as [number, number],
  };

  useGSAP(() => {
    if (!largeMacRef.current || !smallMacRef.current) return;

    if (showLargeMacBook) {
      // 16-inch mac
      moveMeshes(smallMacRef.current, -OFFSET_DISTANCE);
      moveMeshes(largeMacRef.current, 0);

      fadeMeshes(smallMacRef.current, 0);
      fadeMeshes(largeMacRef.current, 1);
    } else {
      // 14-inch mac
      moveMeshes(smallMacRef.current, 0);
      moveMeshes(largeMacRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacRef.current, 1);
      fadeMeshes(largeMacRef.current, 0);
    }
  }, [size]);

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacRef}>
          <MacBook16Model scale={isMobile ? 0.04 : 0.046} rotation-x={0.2} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacRef}>
          <MacBook14Model scale={isMobile ? 0.03 : 0.04} rotation-x={0.2} />
        </group>
      </PresentationControls>
    </>
  );
}

export default ModelSwitcher;