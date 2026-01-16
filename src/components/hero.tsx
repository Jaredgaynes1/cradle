import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { TalkToTheFounderButton } from "./ui/talk-to-the-founder-button";
import { HERO_SUBHEADLINE } from "@/constants";

export const HeroSection = () => {
  const images = [
    "/images/boat1.png",
    "/images/boat1.png",
    "/images/data2_teal.png",
    "/images/boat1.png",
    "/images/data2_teal.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data2_teal.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data2_teal.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data2_teal.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data.png",
    "/images/data2_teal.png",
    "/images/data.png",
    "/images/data.png",
    "/images/data.png",
    "/images/boat1.png",
    "/images/data.png",
    "/images/data2_teal.png",
    "/images/data2_teal.png",
  ];
  return (
    <div className="text-center overflow-hidden">
      <div className="relative flex h-[800px] sm:h-[800px] md:h-screen w-full flex-col items-center justify-center px-4">
        <div className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold break-words text-black z-50 md:mb-4 sm:mb-8 md:mt-40 sm:mt-20 sm:mb-10 max-w-full">
          <Highlight>Supercharge</Highlight> your Marina
        </div>
        <div className="z-50 p-4 w-full">
          <div className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed text-gray-700">
            {HERO_SUBHEADLINE}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
            <a
              href="https://cal.com/jared-gaynes-vjuiq7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto"
            >
              <TalkToTheFounderButton className="w-full sm:w-auto" />
            </a>
          </div>
        </div>
        <ThreeDMarquee
          className="pointer-events-none absolute inset-0 h-full w-full translate-y-2/3 md:translate-y-0"
          images={images}
        />
      </div>
      <div className="hidden md:block h-32 bg-gradient-to-b from-transparent to-white z-50 relative"/>
    </div>
  );
};
