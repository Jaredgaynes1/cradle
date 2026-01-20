"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { Footer } from "@/components/footer";
import { BusinessIntelligence } from "@/components/business-intelligence";
import { MarketingAndLoyalty } from "@/components/marketing-and-loyalty";
import { DryStorageOptimization } from "@/components/dry-storage-optimization";
import { CallToAction } from "@/components/call-to-action";
import { motion } from "motion/react";

export default function HomePage() {
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
      <CallToAction />
      <Footer />
    </div>
  );
}
