"use client";

import React, { useState } from "react";
import Image from "next/image";

export const DryStorageOptimization = () => {
  const [activeImage, setActiveImage] = useState<number>(2);

  const handleImageInteraction = (imageIndex: number) => {
    setActiveImage(imageIndex);
  };

  return (
    <div className="text-6xl w-full justify-center items-center flex flex-col mt-16 p-16 gap-16">
      <div className="text-center">AI Dry Storage Optimization</div>
      <div className="text-4xl mt-8 mb-16 max-w-5xl text-center text-gray-500">
        Cradle maximizes capacity and NOI using AI to automatically assign every
        boat to the optimal storage slip.
      </div>
      {/* Mobile: Vertical List */}
      <div className="flex flex-col gap-8 w-full max-w-2xl md:hidden">
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
      <div className="hidden md:block relative w-[700px] h-[500px]">
        <Image
          src="/images/business_intelligence_dashboard.png"
          alt="Reporting"
          width={400}
          height={600}
          className={`absolute top-0 -left-60 h-auto rounded-lg shadow-xl transform -rotate-10 cursor-pointer transition-all ${activeImage === 1 ? 'z-30' : 'z-20'}`}
          onClick={() => handleImageInteraction(1)}
          onMouseEnter={() => handleImageInteraction(1)}
        />
        <Image
          src="/images/storage_comparisons.png"
          alt="Reporting"
          width={1000}
          height={800}
          className={`absolute top-0 left-0 h-auto rounded-lg shadow-xl transform cursor-pointer transition-all ${activeImage === 2 ? 'z-30' : 'z-21'}`}
          onClick={() => handleImageInteraction(2)}
          onMouseEnter={() => handleImageInteraction(2)}
        />
        <Image
          src="/images/reconfiguration_steps.png"
          alt="Reporting"
          width={400}
          height={600}
          className={`absolute -top-5 -right-70 h-auto rounded-lg shadow-xl transform rotate-6 cursor-pointer transition-all ${activeImage === 3 ? 'z-30' : 'z-19'}`}
          onClick={() => handleImageInteraction(3)}
          onMouseEnter={() => handleImageInteraction(3)}
        />
      </div>
    </div>
  );
};
