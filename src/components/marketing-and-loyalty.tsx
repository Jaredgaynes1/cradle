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
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 min-h-150 max-w-400 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 sm:text-center md:text-left p-8">
          <div className="text-4xl md:text-4xl font-bold mb-7">
            {MARKETING_LOYALTY_TITLE}
          </div>
          <ul className="text-gray-600 text-xl md:text-2xl leading-relaxed space-y-3">
            <li className="flex items-start">
              <div>
                <div className="text-grey-400 mr-3 text-2xl leading-none font-semibold mb-5">
                  Turn your boater data into revenue
                </div>
                <div className="mr-3 text-xl leading-none mb-5">
                  {`Cradle syncs your reservation and service data with your CRM and marketing tools so you can run timely, personalized campaigns without manual work or exports.`}
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <div className="text-grey-400 mr-3 text-2xl leading-none font-semibold mb-5">
                  Build loyalty that sticks — and pays
                </div>
                <div className="mr-3 text-xl leading-none mb-5">
                  {`Create custom loyalty programs based on real customer behavior across your entire operation. Keep boaters engaged and coming back without adding work for your team.`}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col bg-blue-50 rounded-3xl p-8">
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full cursor-pointer group">
              <Image
                src={"/images/marketing_and_loyalty_base.png"}
                alt="Marketing and Loyalty Base"
                width={400}
                height={150}
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
