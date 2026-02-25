import React from "react";
import Image from "next/image";
import {
  BUSINESS_INTELLIGENCE_TITLE,
  BUSINESS_INTELLIGENCE_HEADING,
  BUSINESS_INTELLIGENCE_BULLETS,
  BUSINESS_INTELLIGENCE_IMAGE,
} from "@/constants";

export const BusinessIntelligence = () => {
  return (
    <div
      id="business-intelligence"
      className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 max-w-350 mx-auto"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full bg-blue-50 rounded-3xl p-6 cursor-pointer group">
          <Image
            src={BUSINESS_INTELLIGENCE_IMAGE.src}
            alt={BUSINESS_INTELLIGENCE_IMAGE.alt}
            width={BUSINESS_INTELLIGENCE_IMAGE.width}
            height={BUSINESS_INTELLIGENCE_IMAGE.height}
            className="w-full h-auto transition-transform duration-300 ease-out group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col md:w-full sm:text-center md:text-left p-6">
          <div className="text-sm font-bold mb-1 text-gray-600">
            {BUSINESS_INTELLIGENCE_TITLE}
          </div>
          <div className="mr-3 text-2xl md:text-3xl leading-snug font-semibold mb-4">
            {BUSINESS_INTELLIGENCE_HEADING}
          </div>
          <ul className="mr-3 text-base leading-relaxed space-y-2 text-gray-600">
            {BUSINESS_INTELLIGENCE_BULLETS.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-2xl leading-none">•</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
