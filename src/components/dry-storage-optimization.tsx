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
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 min-h-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full bg-blue-50 rounded-xl p-4">
          <Image
            src={"/images/dry_storage_optimization.png"}
            alt={DRY_STORAGE_TITLE}
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-8 md:w-full sm:text-center md:text-left p-8">
          <div className=" text-4xl md:text-5xl font-bold mb-7">
            {DRY_STORAGE_TITLE}
          </div>
          <div className="text-gray-700 text-2xl md:text-2xl leading-relaxed">
            {DRY_STORAGE_SUBTITLE}
          </div>
        </div>
      </div>
    </div>
  );
};
