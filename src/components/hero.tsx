import React from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { TalkToTheFounderButton } from "./ui/talk-to-the-founder-button";


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
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl break-words text-black z-50 mb-6 md:mt-28 sm:mt-16 max-w-full leading-tight">
          <div className="font-bold">
            <Highlight>Unlock Hidden Revenue</Highlight> at Your Marina
          </div>
        </div>
        <div className="z-50 w-full max-w-3xl mx-auto mb-10">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-900 leading-relaxed">
            Automated workflows, powerful dashboards and smart optimization tools. All powered by the systems you already use.
          </p>
        </div>
        <div className="z-50 w-full">
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
