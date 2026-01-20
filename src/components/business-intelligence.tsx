"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Tabs } from "./ui/tabs";
import {
  BUSINESS_INTELLIGENCE_TITLE,
  BUSINESS_INTELLIGENCE_SUBTITLE,
  BUSINESS_INTELLIGENCE_IMAGES,
} from "@/constants";

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
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 min-h-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full bg-blue-50 rounded-xl p-8">
            <Image
              src={"/images/image_group.png"}
              alt={"Business Intelligence Dashboards"}
              width={400}
              height={300}
              className="w-full h-auto"
            />
        </div>
        <div className="flex flex-col md:w-full sm:text-center md:text-left p-8">
          <div className="text-4xl md:text-5xl font-bold mb-7">
            {BUSINESS_INTELLIGENCE_TITLE}
          </div>
          <ul className="text-gray-600 text-xl md:text-2xl leading-relaxed space-y-3">
            {BUSINESS_INTELLIGENCE_SUBTITLE.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-teal-500 mr-3 text-4xl leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
