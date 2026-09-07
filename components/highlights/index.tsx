import OpacityWrapper from "@/utils/opacityWrapper";
import Image from "next/image";
import React from "react";

function Highlights() {
  return (
    <OpacityWrapper>
      <section id="highlights" className="min-h-screen  md:mt-40 px-4 md:px-8">
        {/* Header Section */}
        <h3 className="text-center text-3xl sm:text-5xl md:text-[65px] font-semibold leading-tight md:leading-18">
          There's never been a<br className="hidden sm:inline" /> better time to
          upgrade.
        </h3>
        <p className="text-center mt-4 md:mt-10 text-lg md:text-2xl text-gray-300">
          Here's what you get with the new MacBook Pro.
        </p>

        {/* Grid Layout */}
        <div className="mt-8 md:mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left Column */}
          <div className="left-column flex flex-col gap-5">
            {/* Card 1 */}
            <div className="p-6 sm:p-10 min-h-[320px] sm:h-95 relative rounded-3xl flex flex-col justify-center overflow-hidden">
              <Image
                src={"/highlight-bg.png"}
                fill
                className="object-cover -z-10"
                alt="Highlight background"
              />
              <Image
                src={"/laptop.png"}
                alt="laptop"
                width={100}
                height={100}
                className="z-20 mb-4"
              />
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-full sm:max-w-[300px] z-20">
                Fly through demanding tasks up to 9.8x faster.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 sm:p-10 flex flex-col sm:flex-row min-h-[180px] sm:h-57.5 bg-[#1D1D1F] rounded-3xl items-start sm:items-center gap-4 sm:gap-0">
              <Image
                src={"/sun.png"}
                alt="sun icon"
                width={100}
                height={100}
                className="w-13 h-16 sm:w-[86px] sm:h-26.5 shrink-0"
              />
              <p className="text-2xl sm:text-3xl font-medium max-w-full sm:max-w-[300px] sm:ml-5">
                Fly through demanding tasks up to 9.8x faster.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column flex flex-col gap-5">
            {/* Card 3 (Gradient Border) */}
            <div className="relative p-[2px] sm:p-[4px] rounded-3xl bg-[linear-gradient(to_right,#0096FF,#BB64FF,#F2416B,#EB7500)]">
              <div className="p-6 sm:p-10 flex flex-col sm:flex-row min-h-[180px] sm:h-57.5 bg-[#1D1D1F] rounded-[22px] items-start sm:items-center gap-4 sm:gap-0">
                <Image
                  src={"/ai.png"}
                  alt="Apple Intelligence icon"
                  width={100}
                  height={100}
                  className="w-16 sm:w-19.5 h-auto shrink-0"
                />
                <div className="sm:ml-5">
                  <p className="text-2xl sm:text-3xl font-medium">Built for</p>
                  <p className="text-2xl sm:text-3xl font-medium bg-[linear-gradient(to_right,#0096FF,#BB64FF,#F2416B,#EB7500)] bg-clip-text text-transparent">
                    Apple Intelligence.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#1D1D1F] p-6 sm:p-10 min-h-[320px] sm:h-95 relative rounded-3xl flex flex-col justify-end gap-4">
              <Image
                src={"/battery.png"}
                alt="battery icon"
                width={100}
                height={100}
                className="w-16 sm:w-20 h-auto"
              />
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium max-w-full sm:max-w-[400px]">
                Up to
                <span className="bg-[linear-gradient(to_right,#35A98A,#6DD400)] bg-clip-text text-transparent">
                  {" "}
                  14 more hours{" "}
                </span>
                battery life.
                <span className="text-gray-500 block sm:inline mt-1 sm:mt-0 text-xl sm:text-2xl">
                  {" ( Up to 24 hours total )"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </OpacityWrapper>
  );
}

export default Highlights;
