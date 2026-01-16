"use client";

import React, { useState } from "react";
import Image from "next/image";

export const DryStorageOptimization = () => {
  const [activeImage, setActiveImage] = useState<number>(2);

  const handleImageInteraction = (imageIndex: number) => {
    setActiveImage(imageIndex);
  };

  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl">
        <div className="flex flex-col gap-8 md:w-2/3 sm:text-center md:text-left">
          <div className=" text-4xl md:text-5xl">
            AI Dry Storage Optimization
          </div>
          <div className="text-gray-700 text-2xl md:text-3xl leading-relaxed">
            Cradle maximizes capacity and NOI using AI to automatically assign
            every boat to the optimal storage slip.
          </div>
        </div>

        <div className="w-full">
          {/* Mobile: Vertical List */}
          <div className="flex flex-col gap-8 w-full md:hidden">
            <Image
              src="/images/business_intelligence_dashboard.png"
              alt="Reporting"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <Image
              src="/images/storage_comparisons.png"
              alt="Reporting"
              width={1000}
              height={800}
              className="w-full h-auto rounded-lg shadow-xl"
            />
            <Image
              src="/images/reconfiguration_steps.png"
              alt="Reporting"
              width={400}
              height={600}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Desktop: Stacked Layout */}
          <div className="hidden md:block relative w-full h-[600px] overflow-visible">
            <Image
              src="/images/business_intelligence_dashboard.png"
              alt="Reporting"
              width={280}
              height={250}
              className={`w-1/2 absolute top-0 -left-30 h-auto rounded-lg shadow-xl transform -rotate-6 cursor-pointer transition-all duration-500 ease-out ${
                activeImage === 1
                  ? "z-30 scale-105 opacity-100 shadow-2xl"
                  : "z-20 scale-95 hover:opacity-100"
              }`}
              onClick={() => handleImageInteraction(1)}
              onMouseEnter={() => handleImageInteraction(1)}
            />
            <Image
              src="/images/storage_comparisons.png"
              alt="Reporting"
              width={380}
              height={300}
              className={`w-full w-auto absolute top-0 left-1/2 -translate-x-1/2 h-auto rounded-lg shadow-xl transform  cursor-pointer transition-all duration-500 ease-out ${
                activeImage === 2
                  ? "z-30 scale-105 opacity-100 shadow-2xl"
                  : "z-21 scale-95 hover:opacity-100"
              }`}
              onClick={() => handleImageInteraction(2)}
              onMouseEnter={() => handleImageInteraction(2)}
            />
            <Image
              src="/images/reconfiguration_steps.png"
              alt="Reporting"
              width={280}
              height={250}
              className={`w-1/2 absolute top-10 -right-20 h-auto rounded-lg shadow-xl transform rotate-8 cursor-pointer transition-all duration-500 ease-out ${
                activeImage === 3
                  ? "z-30 scale-105 opacity-100 shadow-2xl"
                  : "z-19 scale-95 hover:opacity-100"
              }`}
              onClick={() => handleImageInteraction(3)}
              onMouseEnter={() => handleImageInteraction(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
