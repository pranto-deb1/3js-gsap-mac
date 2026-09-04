"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoIosArrowDropright } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

function Showcase() {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline.fromTo(
        ".mask",
        {
          scale: 56,
          transformOrigin: "center center",
          force3D: false, // 3D Layer Force বন্ধ করা হলো যাতে ইমেজ গ্লিচ না করে
        },
        {
          scale: 1.1,
          ease: "power1.inOut",
          force3D: false,
        },
      );
    }
  }, [isTablet]);

  return (
    <section id="showcase" className="mt-40">
      {/* media */}
      <div className="media relative overflow-hidden">
        <video
          src="/videos/game.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-screen max-h-screen object-cover"
        />

        {/* mask - Hardware Acceleration Class সরিয়ে দেওয়া হয়েছে */}
        <div className="mask absolute top-0 left-0 h-full w-full pointer-events-none">
          <Image
            src={"/mask-logo.svg"}
            width={1200}
            height={1200}
            alt="Mask Logo"
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* content */}
      <div className="content flex flex-col md:flex-row gap-8 lg:gap-20 mx-auto w-fit text-gray-400 px-4 sm:px-6 md:px-0 mt-10">
        <div className="flex-1 max-w-[400px]">
          <h2 className="text-4xl sm:text-5xl lg:text-[70px] text-white leading-tight lg:leading-17 w-fit">
            Rocket chip.
          </h2>

          <div className="flex flex-col gap-5 max-w-full md:max-w-[410px] mt-5">
            <p className="font-semibold">
              Introducing{" "}
              <span className="text-white">
                M4, the next generation of Apple silicon.
              </span>{" "}
              M4 powers
            </p>

            <p className="font-semibold">
              It drives Apple Intelligence on iPad Pro, so you can write,
              create, and accomplish more with ease. All in a design that's
              unbelievably thin, light, and powerful.
            </p>

            <p className="font-semibold">
              A brand-new display engine delivers breathtaking precision, color
              accuracy, and brightness. And a next-gen GPU with
              hardware-accelerated ray tracing brings console-level graphics to
              your fingertips.
            </p>

            <p className="mt-2">
              <Link href={"#"} className="hover:underline text-blue-500 flex gap-1 items-center">
                Learn more about Apple Intelligence <IoIosArrowDropright />
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-6 md:gap-0 mt-6 md:mt-0">
          <div className="mt-0 md:mt-5">
            <p className="text-lg sm:text-xl">Up to</p>
            <h3 className="text-2xl sm:text-3xl text-white mt-2 sm:mt-5 font-bold">
              4x faster
            </h3>
            <p className="mt-2 sm:mt-5">pro rendering performance than M2</p>
          </div>

          <div className="mt-0 md:mt-8">
            <p className="text-lg sm:text-xl">Up to</p>
            <h3 className="text-2xl sm:text-3xl text-white mt-2 sm:mt-5 font-bold">
              1.5x faster
            </h3>
            <p className="mt-2 sm:mt-5">CPU performance than M2</p>
          </div>
        </div>
      </div>
    </section>
  );
}



export default Showcase;
