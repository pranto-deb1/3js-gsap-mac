"use client";

import { Constants } from "@/utils/constants";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import OpacityWrapper from "@/utils/opacityWrapper";

gsap.registerPlugin(ScrollTrigger);

function Performance() {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      // ১. paragraph text animation
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
              start: "top 85%",
              invalidateOnRefresh: true,
            },
          }
        );
      });

      if (isMobile) return;

      // ২. image fly in animation (Desktop / Large Screens)
      Constants.performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `#${item.id}`;

        const toState: gsap.TweenVars = {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          xPercent: 0,
          yPercent: 0,
          clearProps: "top,transform",
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 60%",
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

        gsap.to(selector, toState);
      });

      ScrollTrigger.refresh();
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <OpacityWrapper>
      <section
        ref={sectionRef}
        className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 max-w-full overflow-hidden px-4 sm:px-6 lg:px-8"
      >

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-4xl mx-auto">
          Next-level graphics <br className="hidden sm:inline" /> performance. Game on.
        </h2>


        <div className="wrapper relative my-8 lg:my-0 lg:h-[500px] xl:h-[600px] flex flex-wrap justify-center items-center gap-4 lg:block">
          {Constants.performanceImages.map((image) => (
            <div
              key={image.id}
              id={image.id}
              className={`transition-all duration-300 ${
                isMobile
                  ? "relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] mx-auto"
                  : `absolute will-change-transform ${
                      image.id === "p5"
                        ? "left-1/2 -translate-x-1/2 w-full max-w-3xl bottom-12 z-10"
                        : "w-full max-w-md z-20"
                    }`
              }`}
              style={
                !isMobile
                  ? {
                      left: image.left,
                      right: image.right,
                      bottom: image.bottom,
                      transform: image.transform,
                    }
                  : undefined
              }
            >
              <Image
                src={image.src}
                width={500}
                height={500}
                alt="Performance"
                className="w-full h-auto object-contain rounded-lg"
                priority={image.id === "p5"}
              />
            </div>
          ))}
        </div>


        <div className="content max-w-3xl text-center text-gray-400 mx-auto text-base sm:text-lg md:text-xl mt-8 sm:mt-12 lg:mt-16 px-2">
          <p className="leading-relaxed">
            Run graphics-intensive workflows with a responsiveness that keeps up
            with your imagination. The M4 family of chips features a GPU with a
            second-generation hardware-accelerated ray tracing engine that
            renders images faster, so{" "}
            <span className="text-white font-medium">
              gaming feels more immersive and realistic than ever.
            </span>
          </p>

          <p className="mt-4 sm:mt-6 leading-relaxed">
            And Dynamic Caching optimizes fast on-chip memory to dramatically
            increase average GPU utilization — driving a huge performance boost
            for the most demanding pro apps and games.
          </p>
        </div>
      </section>
    </OpacityWrapper>
  );
}

export default Performance;