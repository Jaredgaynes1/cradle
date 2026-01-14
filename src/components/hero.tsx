import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { TalkToTheFounderButton } from "./ui/talk-to-the-founder-button";
import { HERO_SUBHEADLINE } from "@/constants";

export const HeroSection = () => {
  const images = [
    "/images/boat1.png",
    "/images/boat1.png",
    "/images/data2.png",
    "/images/boat1.png",
    "/images/data2.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data2.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data2.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data2.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data.png",
    "/images/data2.png",
    "/images/data.png",
    "/images/data.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data2.png",
    "/images/data2.png",
  ];
  return (
    <div className="text-center overflow-hidden">
      <div className="relative flex h-screen w-full flex-col items-center justify-center">
        <div className="text-9xl sm:text-7xl md:text-8xl font-bold break-words text-black z-50 mb-8">
          <Highlight>Supercharge</Highlight> your Marina
        </div>
        <div className="z-50 p-4">
          <div className="text-lg md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-700">
            {HERO_SUBHEADLINE}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="https://cal.com/jared-gaynes-vjuiq7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <TalkToTheFounderButton />
            </a>
          </div>
        </div>
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full"
          images={images}
        />
      </div>
      <div className="h-32 bg-gradient-to-b from-transparent to-white z-50 relative"/>
    </div>
  );
};
