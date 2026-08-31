import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="min-h-[60vh] md:min-h-screen">
     <div className="h-fit flex flex-col justify-center items-center mt-50">
       <h1 className="text-2xl md:text-4xl leading-0">MacBook Pro</h1>
      <Image
        src="/title.png"
        alt="MacBook Title"
        width={500}
        height={500}
        className="w-75 md:w-3xl mt-5 md:mt-0"
      />
      <video src="/videos/hero.mp4" autoPlay muted playsInline></video>

      <button className="bg-blue-500 px-4 py-2 rounded-[100px]">Buy</button>
      <p className="text-gray-400 mt-3">From $1599 or $133.25/mo. for 12 mo.</p>
     </div>
    </section>
  );
}

export default Hero;
