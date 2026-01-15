import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Footer } from "@/components/footer";
import { CUSTOMER_TESTIMONIALS, PRODUCT_SECTION_HEADER } from "@/constants";
import { BusinessIntelligence } from "@/components/business-intelligence";
import { MarketingAndLoyalty } from "@/components/marketing-and-loyalty";
import { DryStorageOptimization } from "@/components/dry-storage-optimization";
import { CallToAction } from "@/components/call-to-action";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <div className="text-4xl w-full justify-center flex flex-col items-center mt-0 md:mt-16 sm:mt-0">
        <div className="text-teal-500 mb-10 ">{PRODUCT_SECTION_HEADER}</div>
        <img
          src={"images/waves.svg"}
          className="text-teal-500"
          alt="waves"
          width={80}
        />
      </div>

      <BusinessIntelligence />
      <div className="text-4xl w-full justify-center flex flex-col items-center mt-16">
        <img
          src={"images/waves.svg"}
          className="text-teal-500"
          alt="waves"
          width={80}
        />
      </div>
      <MarketingAndLoyalty />
      <div className="text-4xl w-full justify-center flex flex-col items-center mt-16">
        <img
          src={"images/waves.svg"}
          className="text-teal-500"
          alt="waves"
          width={80}
        />
      </div>
      <DryStorageOptimization />
      <div className="text-4xl w-full justify-center flex flex-col items-center">
        <div className="text-teal-500 mb-10 ">{'Our Customers'}</div>
        <img
          src={"images/waves.svg"}
          className="text-teal-500"
          alt="waves"
          width={80}
        />
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={CUSTOMER_TESTIMONIALS}
          direction="right"
          speed="slow"
        />
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}
