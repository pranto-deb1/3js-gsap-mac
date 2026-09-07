"use client";
import React, { Suspense, useEffect, useRef } from "react";
import StudioLights from "../models/studio-lights";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Constants } from "@/utils/constants";
import { Html, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import MacBookModel from "../models/macbook";
import { useGlobalStore } from "@/utils/global";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ModelScroll = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const groupRef = useRef(null);
  const { setTexture } = useGlobalStore();
  // const canvasRef

  useEffect(() => {
    Constants.featureSequence.forEach((feature) => {
      const v = document.createElement("video");
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        payload: "auto",
        crossOrigin: "anonymous",
      });
      v.load();
    });
  }, []);

  useGSAP(() => {
    // একটিমাত্র timeline দিয়ে ৩D Model Rotation এবং Box Animation হ্যান্ডেল করুন
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#features", // পুরো section-কে trigger রাখুন
        start: "top top",
        end: "+=2000",
        scrub: 1,
        pin: "#pin-container", // Wrapper element-কে pin করুন
      },
    });

    // 1. Model Rotation Animation
    if (groupRef.current) {
      const group = groupRef.current as any;
      mainTimeline.to(
        group.rotation,
        {
          y: Math.PI * 2,
          ease: "power1.inOut",
        },
        0, // Timeline-এর শুরু থেকেই শুরু হবে
      );
    }

    // 2. Text Boxes & Video Textures Sequence
    mainTimeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, duration: 1 })

      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", { opacity: 1, y: 0, duration: 1 })

      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0, duration: 1 })

      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0, duration: 1 })

      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0, duration: 1 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html>
            <h1 className="text-white text-3xl uppercase">Loading...</h1>
          </Html>
        }
      >
        <MacBookModel
          snap={true}
          scale={isMobile ? 0.02 : 0.04}
          position={[0, -0.6, 0]}
          rotation-x={0.2}
        />
      </Suspense>
    </group>
  );
};

function Features() {
  return (
    <section id="features" className="relative mt-40">
      {/* Container wrapper for pinning */}
      <div
        id="pin-container"
        className="sticky top-0 h-screen w-full flex items-center justify-center"
      >
        <h2 className="absolute top-10 text-[40px] md:text-[65px] text-center font-semibold z-10">
          See it all in a new light.
        </h2>

        {/* 3D Canvas */}
        <div className="h-[60vh] w-[80vw] md:w-[50vw]">
          <Canvas id="f-canvas" camera={{ fov: 20 }}>
            <StudioLights />
            <ModelScroll />
            {/* <OrbitControls enableZoom={false} /> */}
          </Canvas>
        </div>

        {/* Feature Boxes */}
        <div className="absolute inset-0 pointer-events-none">
          {Constants.features.map((feature, index) => (
            <div
              key={feature.id}
              className={`box box${index + 1} absolute p-4 bg-white/10 rounded-xl  backdrop-blur-md max-w-xs ${feature.styles}`}
            >
              <Image src={feature.icon} height={50} width={50} alt={feature.text}/>
              <span className="font-bold block">{feature.highlight}</span>
              <p className="text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
