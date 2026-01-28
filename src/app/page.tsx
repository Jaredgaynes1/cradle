"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { Footer } from "@/components/footer";
import { BusinessIntelligence } from "@/components/business-intelligence";
import { MarketingAndLoyalty } from "@/components/marketing-and-loyalty";
import { DryStorageOptimization } from "@/components/dry-storage-optimization";
import { CallToAction } from "@/components/call-to-action";
import { motion } from "motion/react";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function HomePage() {
  const items = [
    {
      src: "/images/technology-partners/boatyard.png",
      alt: "Boatyard",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/dockwa.png",
      alt: "Dockwa",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/mms.png",
      alt: "MMS",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/sharper.png",
      alt: "Sharper",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/slipify.png",
      alt: "Slipify",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/storable.png",
      alt: "Storable",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/boatyard.png",
      alt: "Boatyard",
      width: 150,
      height: 60,
    },
    {
      src: "/images/technology-partners/dockwa.png",
      alt: "Dockwa",
      width: 150,
      height: 60,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <BusinessIntelligence />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <MarketingAndLoyalty />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <DryStorageOptimization />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full justify-center items-center flex flex-col py-12 px-4 md:px-16  bg-gradient-to-b from-white to-blue-100">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-3xl md:text-3xl text-center mb-16">
              From our Customers
            </div>
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 relative max-w-4xl mx-auto">
              <div className="flex flex-row gap-12 items-center">
                <div className="flex justify-center items-center">
                  <Image
                    src="/images/bluewater_marinas.png"
                    alt="Bluewater Marinas"
                    width={900}
                    height={200}
                    className="object-contain"
                  />
                </div>
                <div className="relative">
                  <p className="text-gray-700 text-xl md:text-lg leading-relaxed mb-8 relative z-10 italic">
                    "Our goal as we scale is simple. Every marina in our
                    portfolio should be data-driven with modern processes and
                    consistent standards. This becomes hard to execute when
                    manually exporting data and stitching together reports on a
                    daily basis. Cradle plugged into our existing systems and
                    turned that vision into a reality with unified reporting and
                    automated workflows, giving us what we needed to scale our
                    business without the worry of manual upkeep."
                  </p>

                  <div className="flex items-center gap-4">
                    <div>
                      <div className="font-semibold text-gray-900 text-xl">
                        Josh Schooler
                      </div>
                      <div className="text-gray-600 text-sm">
                        Director of Finance at Bluewater Marinas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

        <div className="w-full justify-center items-center flex flex-col py-24 px-4 md:px-16  bg-blue-100">
          <div className="text-3xl md:text-3xl  text-center mb-16">
            Technology Partners
          </div>
          <InfiniteMovingCards items={items} speed="normal" pauseOnHover={false} />
        </div>

      <CallToAction />
      <Footer />
    </div>
  );
}
