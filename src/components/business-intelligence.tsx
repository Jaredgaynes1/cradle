import React from "react";
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
  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16">
      <div className="w-full flex flex-col gap-12 items-center max-w-6xl">
        <div className="text-red-400 text-4xl md:text-5xl text-center">
          Building Reports is a Pain
        </div>
        <div className="text-gray-700 text-3xl md:text-4xl text-center max-w-4xl leading-relaxed">
          Cradle connects all of your tools into one clean data layer to give
          you real-time business intelligence.
        </div>
        <BusinessIntelligenceTabs />
      </div>
    </div>
  );
};
