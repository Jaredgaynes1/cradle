import React from "react";
import Image from "next/image";
import {
  MARKETING_LOYALTY_TITLE,
  MARKETING_LOYALTY_SUBTITLE,
  MARKETING_LOYALTY_INTEGRATIONS_HEADER,
  MARKETING_LOYALTY_INTEGRATIONS,
} from "@/constants";

export const MarketingAndLoyalty = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 min-h-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 sm:text-center md:text-left p-8">
          <div className="text-4xl md:text-5xl font-bold mb-7">{MARKETING_LOYALTY_TITLE}</div>
          <ul className="text-gray-600 text-xl md:text-xl leading-relaxed space-y-3">
            {MARKETING_LOYALTY_SUBTITLE.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-500 mr-3 text-4xl leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col bg-blue-50 rounded-xl p-8">
          <div className="text-3xl tracking-wider mb-8 text-center">
            {MARKETING_LOYALTY_INTEGRATIONS_HEADER}
          </div>
          <div className="grid grid-cols-2 md:gap-8 w-full">
            {MARKETING_LOYALTY_INTEGRATIONS.map((integration, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg h-24"
              >
                <Image
                  src={integration.src}
                  alt={integration.alt}
                  width={integration.width}
                  height={integration.height}
                  className="transition-all object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
