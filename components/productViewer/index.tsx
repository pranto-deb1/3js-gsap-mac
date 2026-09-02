"use client";

import { Canvas } from "@react-three/fiber";
import StudioLights from "../models/studio-lights";
import ModelSwitcher from "./modelSwitcher";
import { useMediaQuery } from "react-responsive";
import { useGlobalStore } from "@/utils/global";

function ProductViewer() {
  const color = useGlobalStore((state) => state.color);
  const setColor = useGlobalStore((state) => state.setColor);

  const size = useGlobalStore((state) => state.size);
  const setSize = useGlobalStore((state) => state.setSize);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <section id="product-viewer" className="min-h-screen mt-40">
      <h2 className="text-3xl ml-10 md:ml-0 md:text-5xl md:text-center font-semibold">
        Take a closer look
      </h2>

      <div className="h-125 md:h-175 ">
        <Canvas camera={{ fov: 30 }}>
          <ModelSwitcher size={size} isMobile={isMobile} />
          <StudioLights />
        </Canvas>
      </div>

      <div className="controls flex items-center flex-col">
        <p>
          MacBook Pro {size}” in
          {color === "#171717" ? " Space Black" : " Silver"}
        </p>

        <div className="flex justify-center gap-5 mt-5 w-50 h-12.5">
          {/* Color Control */}
          <div className="bg-gray-400/50 w-full h-full rounded-3xl flex items-center justify-center gap-3">
            <div
              onClick={() => setColor("#171717")}
              className={`w-7 h-7 bg-[#171717] rounded-full cursor-pointer ${color === "#171717" && "border-2 border-white"}`}
            />
            <div
              onClick={() => setColor("#d4d4d4")}
              className={`w-7 h-7 bg-[#d4d4d4] rounded-full cursor-pointer ${color === "#d4d4d4" && "border-2 border-black"}`}
            />
          </div>

          {/* Size Control */}
          <div className="bg-gray-400/50 w-full h-full rounded-3xl flex items-center justify-center gap-3">
            <div
              onClick={() => setSize(14)}
              className={`rounded-full border border-white w-7 h-7 flex justify-center items-center cursor-pointer ${size === 14 ? "bg-white text-black" : "text-white"}`}
            >
              <p className="text-[12px] font-semibold">14"</p>
            </div>

            <div
              onClick={() => setSize(16)}
              className={`rounded-full border border-white w-7 h-7 flex justify-center items-center cursor-pointer ${size === 16 ? "bg-white text-black" : "text-white"}`}
            >
              <p className="text-[12px] font-semibold">16"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductViewer;
