"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function BusinessIntelligenceTabs() {
  const tabs = [
    {
      title: "Rent Roll",
      value: "rent roll",
      content: (
        <Image
          src="/images/rent_roll.png"
          alt="Reporting"
          width={600}
          height={600}
          className="w-full h-auto rounded-lg shadow-xl"
        />
      ),
    },
    {
      title: "Service Work",
      value: "service_work",
      content: (
        <div className="bg-white w-full flex justify-center items-center">
          <Image
            src="/images/service_work_dashboard.png"
            alt="Reporting"
            width={600}
            height={600}
            className="flex w-2/3 rounded-lg shadow-xl items-center justify-center"
          />
        </div>
      ),
    },
    {
      title: "Analytics",
      value: "analytics",
      content: (
        <div className="bg-white w-full flex justify-center items-center">
          <Image
            src="/images/analytics_dashboard.png"
            alt="Reporting"
            width={600}
            height={600}
            className="flex w-2/3  rounded-lg shadow-xl items-center justify-center"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-center justify-center mt-16  text-3xl font-semibold">
      <Tabs tabs={tabs} />
    </div>
  );
}

export const BusinessIntelligence = () => {
  const [activeImage, setActiveImage] = useState<number>(2);

  const handleImageInteraction = (imageIndex: number) => {
    setActiveImage(imageIndex);
  };

  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl">
        <div className="flex flex-col gap-8 md:w-2/3 sm:text-center md:text-left">
          <div className="text-4xl md:text-5xl">
            Reporting & Business Intelligence
          </div>
          <div className="text-gray-600 text-2xl md:text-3xl leading-relaxed">
            Cradle connects all of your tools into one clean data layer to give
            you real-time business intelligence.
          </div>
        </div>
        <div className="w-full">
          <div className="w-full">
            {/* Mobile: Vertical List */}
            <div className="flex flex-col gap-8 w-full md:hidden">
              <Image
                src="/images/rent_roll.png"
                alt="Reporting"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <Image
                src="/images/service_work_dashboard.png"
                alt="Reporting"
                width={1000}
                height={800}
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <Image
                src="/images/analytics_dashboard.png"
                alt="Reporting"
                width={400}
                height={600}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>

            {/* Desktop: Stacked Layout */}
            <div className="hidden md:block relative w-full h-[500px]">
              <Image
                src="/images/rent_roll.png"
                alt="Reporting"
                width={700}
                height={600}
                className={`absolute top-6 -left-32 h-auto rounded-lg shadow-xl transform -rotate-8 cursor-pointer transition-all ${
                  activeImage === 1 ? "z-30" : "z-20"
                }`}
                onClick={() => handleImageInteraction(1)}
                onMouseEnter={() => handleImageInteraction(1)}
              />
              <Image
                src="/images/service_work_dashboard.png"
                alt="Reporting"
                width={600}
                height={500}
                className={`absolute top-0 left-0 h-auto rounded-lg shadow-xl transform cursor-pointer transition-all ${
                  activeImage === 2 ? "z-30" : "z-21"
                }`}
                onClick={() => handleImageInteraction(2)}
                onMouseEnter={() => handleImageInteraction(2)}
              />
              <Image
                src="/images/analytics_dashboard.png"
                alt="Reporting"
                width={400}
                height={600}
                className={`absolute -right-32 h-auto rounded-lg shadow-xl transform rotate-7 cursor-pointer transition-all ${
                  activeImage === 3 ? "z-30" : "z-19"
                }`}
                onClick={() => handleImageInteraction(3)}
                onMouseEnter={() => handleImageInteraction(3)}
              />
            </div>
          </div>
          {/* <BusinessIntelligenceTabs /> */}
        </div>
      </div>
    </div>
  );
};
