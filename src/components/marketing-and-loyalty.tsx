import React from "react";
import Image from "next/image";

export const MarketingAndLoyalty = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl">
        <div className="flex flex-col gap-8 sm:text-center md:text-left">
          <div className="text-4xl md:text-5xl">Marketing & Loyalty</div>
          <div className="text-gray-600 text-2xl md:text-3xl leading-relaxed">
            Cradle automates boater communications that feel personal, keeping
            your customers engaged without the manual work.
          </div>
        </div>

        <div className="w-full flex flex-col">
          <div className="text-3xl tracking-wider mb-8 text-center">Integrates with</div>
          <div className="grid grid-cols-2 md:gap-8 w-full">
            <div className="flex items-center justify-center p-4 rounded-lg h-24">
              <Image
                src="/images/facebook_logo.png"
                alt="Facebook"
                width={100}
                height={50}
                className="transition-all object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4   rounded-lg h-24">
              <Image
                src="/images/hubspot_logo.png"
                alt="HubSpot"
                width={180}
                height={80}
                className="transition-all object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4   rounded-lg h-24">
              <Image
                src="/images/outlook_logo.png"
                alt="Outlook"
                width={100}
                height={50}
                className="transition-all object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4  rounded-lg h-24">
              <Image
                src="/images/gmail_logo.png"
                alt="Gmail"
                width={140}
                height={60}
                className="transition-all object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
