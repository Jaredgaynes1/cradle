import React from "react";
import Image from "next/image";
import {
  DRY_STORAGE_TITLE,
  DRY_STORAGE_HEADING,
  DRY_STORAGE_BULLETS,
  DRY_STORAGE_MAIN_IMAGE,
  DRY_STORAGE_OVERLAY_IMAGE,
} from "@/constants";

export const DryStorageOptimization = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col py-16 px-4 md:px-16 border-b border-gray-200 min-h-150 max-w-350 mx-auto">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="w-full bg-blue-50 rounded-3xl p-6 cursor-pointer group relative">
          <Image
            src={DRY_STORAGE_MAIN_IMAGE.src}
            alt={DRY_STORAGE_MAIN_IMAGE.alt}
            width={DRY_STORAGE_MAIN_IMAGE.width}
            height={DRY_STORAGE_MAIN_IMAGE.height}
            className="w-11/12 mx-auto h-auto transition-transform duration-300 ease-out group-hover:scale-105 rounded-xl shadow-lg"
          />
          <Image
            src={DRY_STORAGE_OVERLAY_IMAGE.src}
            alt={DRY_STORAGE_OVERLAY_IMAGE.alt}
            width={DRY_STORAGE_OVERLAY_IMAGE.width}
            height={DRY_STORAGE_OVERLAY_IMAGE.height}
            className="absolute bottom-0 right-0 w-1/2 h-auto transition-transform duration-300 ease-out group-hover:scale-105 border-4 border-white rounded-xl shadow-xl"
          />
        </div>
        <div className="flex flex-col md:w-full sm:text-center md:text-left p-8">
          <div className="text-md md:text-md font-bold mb-2 text-gray-500">
            {DRY_STORAGE_TITLE}
          </div>
          <div>
            <div className="mr-3 text-4xl leading-none font-semibold mb-5">
              {DRY_STORAGE_HEADING}
            </div>
            <ul className="mr-3 text-lg leading-relaxed space-y-2 text-gray-600">
              {DRY_STORAGE_BULLETS.map((bullet, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 text-2xl leading-none">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
