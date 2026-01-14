import {
  Anchor,
  Building2,
  Database,
  BarChart3,
  Ship,
  Shield,
  Zap,
  Users,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { CUSTOMER_TESTIMONIALS } from "@/constants";
import { TalkToTheFounderButton } from "@/components/ui/talk-to-the-founder-button";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const FONT_COLOR = "rgb(78, 161, 187)";

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "/images/rent_roll.png",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "/images/business_intelligence_dashboard.png",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "/images/service_work_dashboard.png",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "/images/analytics_dashboard.png"
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <div className="text-4xl w-full justify-center flex mt-16">
        <div className="text-teal-500 underline">Product</div>
      </div>

      <div className="w-full justify-center items-center flex flex-col mt-8 mb-16 border-b border-gray-300 p-16">
        {/* <div className="text-6xl">Reporting & Business Intelligence</div> */}
        <div className="w-full flex flex-col gap-4 text-4xl text-gray-500">
          <div className="text-center p-10 text-red-400 text-5xl">
            Building Reports is a Pain
          </div>
          <div className="flex items-center justify-center">
            <ArrowDown className="w-16 h-16 text-gray-600" />
          </div>
          <div className="text-center w-2/3 items-center content-center mx-auto">
            <div className="space-y-4 text-left text-5xl p-10">
              Cradle connects all of your existing tools into one clean data
              layer to give you real-time business intelligence in one place.
            </div>
            <AnimatedTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col  mb-16 border-b border-gray-300 p-16">
        {/* <div className="text-6xl">Marketing & Loyalty</div> */}
        <div className="w-full flex flex-col gap-4 text-5xl text-gray-500">
          <div className="text-center p-10 text-red-400 text-5xl">
            Maintaining Customer Relationships is Hard
          </div>

          <div className="flex items-center justify-center">
            <ArrowDown className="w-16 h-16 text-gray-600" />
          </div>

          <div className="text-center w-2/3 items-center content-center mx-auto">
            <div className="space-y-4 text-left list-decimal list-inside text-5xl">
              Cradle automates boater communications that feel personal, keeping
              your customers engaged without the manual work.
            </div>
          </div>
        </div>
      </div>

      <div className="text-6xl w-full justify-center items-center flex flex-col mt-32 mb-16 p-16 gap-16">
        <div>AI Dry Storage Optimization</div>
        <div className="text-4xl mt-8 max-w-4xl text-center text-gray-500">
          Cradle maximizes capacity and NOI using AI to automatically assign every boat to the optimal storage slip.
        </div>
        <div className="relative w-[1000px] h-[600px]">
          <Image
            src="/images/storage_comparisons.png"
            alt="Reporting"
            width={1200}
            height={600}
            className="absolute top-0 left-40 h-auto rounded-lg shadow-xl transform -rotate-3 z-20"
          />
          <Image
            src="/images/reconfiguration_steps.png"
            alt="Reporting"
            width={600}
            height={600}
            className="absolute top-70 right-0 h-auto rounded-lg shadow-xl transform rotate-6 z-10"
          />
        </div>
      </div>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={CUSTOMER_TESTIMONIALS}
          direction="right"
          speed="fast"
        />
      </div>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-16 bg-gray-900 bg-white/10 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to streamline your operations?
          </h2>

          <p className="text-lg mb-8 max-w-3xl mx-auto">
            {
              "Schedule a 30-minute call to see how Cradle can work for your property."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cal.com/jared-gaynes-vjuiq7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <TalkToTheFounderButton />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
