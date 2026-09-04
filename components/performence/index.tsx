"use client";

import { Constants } from "@/utils/constants";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

function Performance() {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // ১. প্যারাগ্রাফ টেক্সট অ্যানিমেশন
      gsap.utils.toArray<HTMLElement>(".content p").forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: p,
              start: "top 80%",
              invalidateOnRefresh: true,
            },
          }
        );
      });

      if (isMobile) return;

      // ২. ইমেজ ফ্লাই-ইন অ্যানিমেশন (GPU Accelerated)
      Constants.performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `#${item.id}`;

        const fromState = {
          opacity: 0,
          top: "50%",
          left: "50%",
          xPercent: -50,
          yPercent: -50,
        };

        const toState: gsap.TweenVars = {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          xPercent: 0,
          yPercent: 0,
          clearProps: "top,transform",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 60%", // স্ক্রোলের পারফেক্ট পজিশনে ট্রিগার করার জন্য
            invalidateOnRefresh: true,
          },
        };

        if (item.bottom !== undefined) toState.bottom = `${item.bottom}%`;
        if (item.left !== undefined) {
          toState.left = `${item.left}%`;
          toState.right = "auto";
        } else if (item.right !== undefined) {
          toState.right = `${item.right}%`;
          toState.left = "auto";
        }

        gsap.fromTo(selector, fromState, toState);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section ref={sectionRef} className="mt-40 mb-[100vh] w-[70vw] mx-auto">
      <h2 className="text-center text-3xl font-semibold">
        Next-level graphics <br /> performance. Game on.
      </h2>

      <div className="wrapper relative h-200">
        {Constants.performanceImages.map((image) => (
          <Image
            id={image.id}
            key={image.id}
            src={image.src}
            width={500}
            height={500}
            alt="Performance"
            className={`absolute will-change-transform ${
              image.id === "p5"
                ? "left-[50%] translate-x-[-50%] w-lg bottom-50"
                : "w-sm"
            }`}
            // style={{
            //   left: image.left,
            //   right: image.right,
            //   bottom: image.bottom,
            //   transform: image.transform,
            // }}
          />
        ))}
      </div>

      <div className="content max-w-166 text-center text-gray-400 mx-auto text-xl mt-10">
        <p>
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{" "}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>
        </p>

        <p className="mt-5">
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
}

export default Performance;