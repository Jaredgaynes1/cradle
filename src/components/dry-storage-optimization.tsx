"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  DRY_STORAGE_TITLE,
  DRY_STORAGE_SUBTITLE,
  DRY_STORAGE_IMAGES,
} from "@/constants";

export const DryStorageOptimization = () => {
  const [activeImage, setActiveImage] = useState<number>(2);

  const handleImageInteraction = (imageIndex: number) => {
    setActiveImage(imageIndex);
  };

  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 min-h-150 max-w-400 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full bg-blue-50 rounded-3xl p-6 cursor-pointer group relative">
          <Image
            src={"/images/dry-storage-optimization/optimization_results.png"}
            alt={DRY_STORAGE_TITLE}
            width={400}
            height={300}
            className="w-11/12 mx-auto h-auto transition-transform duration-300 ease-out group-hover:scale-105 rounded-xl shadow-lg"
          />
          <Image
            src={"/images/dry-storage-optimization/marina_layout.png"}
            alt={DRY_STORAGE_TITLE}
            width={50}
            height={50}
            className="absolute bottom-0 right-0 w-1/2 h-auto transition-transform duration-300 ease-out group-hover:scale-105 border-4 border-white rounded-xl shadow-xl"
          />
        </div>
        <div className="flex flex-col  md:w-full sm:text-center md:text-left p-8">
          <div className="text-md md:text-md font-bold mb-2 text-gray-500">
            {DRY_STORAGE_TITLE}
          </div>
          <div>
            <div className="mr-3 text-5xl leading-none font-semibold mb-5">
              Maximize utilization without playing Tetris
            </div>
            <ul className="mr-3 text-xl leading-relaxed space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="mr-3 text-2xl leading-none">•</span>
                <span>Optimize slip placement with AI-powered technology</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl leading-none">•</span>
                <span>Reduce wasted capacity and increase NOI</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-2xl leading-none">•</span>
                <span>Get real-time notifications when efficiency drops</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
