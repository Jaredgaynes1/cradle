import React from "react";
import Image from "next/image";
import {
  MARKETING_LOYALTY_TITLE,
  MARKETING_LOYALTY_HEADING,
  MARKETING_LOYALTY_BULLETS,
  MARKETING_LOYALTY_IMAGE,
  MARKETING_LOYALTY_INTEGRATIONS,
} from "@/constants";

export const MarketingAndLoyalty = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 max-w-350 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col md:w-full sm:text-center md:text-left p-6">
          <div className="text-sm font-bold mb-1 text-gray-600">
            {MARKETING_LOYALTY_TITLE}
          </div>
          <div className="mr-3 text-2xl md:text-3xl leading-snug font-semibold mb-4">
            {MARKETING_LOYALTY_HEADING}
          </div>
          <ul className="text-gray-600 mr-3 text-base leading-relaxed space-y-2">
            {MARKETING_LOYALTY_BULLETS.map((bullet, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 text-2xl leading-none">
                  •
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col bg-blue-50 rounded-3xl p-6">
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full cursor-pointer group">
              <Image
                src={MARKETING_LOYALTY_IMAGE.src}
                alt={MARKETING_LOYALTY_IMAGE.alt}
                width={MARKETING_LOYALTY_IMAGE.width}
                height={MARKETING_LOYALTY_IMAGE.height}
                className="transition-transform duration-300 ease-out object-contain w-full rounded-xl shadow-lg group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-12 left-42 flex w-3/4 gap-2 px-3 py-2 bg-white rounded-2xl shadow-lg justify-evenly border-2 border-dotted border-gray-300 items-center cursor-pointer transition-transform duration-300 ease-out hover:scale-105">
              {MARKETING_LOYALTY_INTEGRATIONS.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-1 cursor-pointer group"
                >
                  <Image
                    src={integration.src}
                    alt={integration.alt}
                    width={integration.width * 0.5}
                    height={integration.height * 0.5}
                    className="object-contain rounded-lg transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
