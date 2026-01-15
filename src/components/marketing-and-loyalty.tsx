import React from "react";
import Image from "next/image";

export const MarketingAndLoyalty = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16">
      <div className="w-full flex flex-col gap-12 items-center max-w-6xl">
        <div className="text-red-400 text-4xl md:text-5xl text-center">
          Maintaining Customer Relationships is Hard
        </div>

        <div className="text-gray-700 text-3xl md:text-4xl text-center max-w-4xl leading-relaxed">
          Cradle automates boater communications that feel personal, keeping
          your customers engaged without the manual work.
        </div>

        <div className="text-center mt-8">
          <div className="text-lg uppercase tracking-wider text-teal-500 mb-8">
            Integrates With
          </div>
          <div className="flex flex-row gap-8 md:gap-12 items-center justify-center max-w-5xl mx-auto flex-wrap">
            <Image
              src="/images/facebook_logo.png"
              alt="Facebook"
              width={150}
              height={70}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/hubspot_logo.png"
              alt="HubSpot"
              width={300}
              height={200}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/outlook_logo.png"
              alt="Outlook"
              width={150}
              height={70}
              className="grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="/images/gmail_logo.png"
              alt="Gmail"
              width={200}
              height={70}
              className="grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
