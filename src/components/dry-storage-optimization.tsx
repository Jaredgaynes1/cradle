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
        <div className="flex flex-col gap-8 md:w-full sm:text-center md:text-left p-8">
          <div className=" text-4xl md:text-4xl font-bold mb-7">
            {DRY_STORAGE_TITLE}
          </div>
          <ul className="text-gray-600 text-xl md:text-2xl leading-relaxed space-y-3">
            <li className="flex items-start">
              <div>
                <div className="text-grey-400 mr-3 text-2xl leading-none font-semibold mb-5">
                  Maximize Utilization without playing Tetris
                </div>
                <div className="mr-3 text-xl leading-none mb-5">
                  {`Cradle uses machine learning to determine the optimal
                  placement for every boat based on size, availability and your
                  marina’s unique operational constraints.`}
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <div>
                <div className="text-grey-400 mr-3 text-2xl leading-none font-semibold mb-5">
                  Reduce wasted capacity, improve throughput
                </div>
                <div className="mr-3 text-xl leading-none mb-5">
                  {`Automatically assign boats to the right slip every time. Your
                  team focuses on operations, not logistics.`}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
