"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

function GsapProvider({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.refresh();
  }, []);
  return <>{children}</>;
}

export default GsapProvider;
