import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { Footer } from "@/components/footer";
import { BusinessIntelligence } from "@/components/business-intelligence";
import { MarketingAndLoyalty } from "@/components/marketing-and-loyalty";
import { DryStorageOptimization } from "@/components/dry-storage-optimization";
import { CallToAction } from "@/components/call-to-action";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <BusinessIntelligence />
      <MarketingAndLoyalty />
      <DryStorageOptimization />
      <CallToAction />
      <Footer />
    </div>
  );
}
