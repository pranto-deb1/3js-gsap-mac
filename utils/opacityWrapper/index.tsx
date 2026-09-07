"use client";
import React, { useEffect, useRef, useState } from "react";

function OpacityWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.1);
      },
      {
        root: null,
        threshold: 0.1 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

export default OpacityWrapper;
