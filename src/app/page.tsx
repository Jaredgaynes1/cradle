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
} from "lucide-react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Footer } from "@/components/footer";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import { CUSTOMER_TESTIMONIALS } from "@/constants";
import { TalkToTheFounderButton } from "@/components/ui/talk-to-the-founder-button";

const FONT_COLOR = "rgb(78, 161, 187)";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      <div className="text-4xl w-full justify-center flex mt-16 mb-8">
        <div className="text-teal-500 ">Product</div>
      </div>

      <div className="w-full justify-center items-center flex flex-col mt-32 mb-16 border-b border-gray-300 p-16">
        <div className="text-6xl">Reporting & Business Intelligence</div>
        <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-4  text-4xl text-gray-500">
          <div className="text-center p-10 ">
            Building reports in Excel is a pain
            <Image
              src="/images/excel.png"
              alt="Reporting"
              width={400}
              height={300}
            />
          </div>

          <div className="flex items-center justify-center">
            <ArrowRight className="w-16 h-16 text-gray-600" />
          </div>

          <div className="text-center">
            <div className="text-center p-10">Cradle gives you:</div>
            <div className="space-y-4 text-left list-decimal list-inside text-3xl">
              Real-time business intelligence in one place so you dont have to
              build reports in Excel
            </div>
          </div>
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col  mb-16 border-b border-gray-300 p-16">
        <div className="text-6xl">Marketing & Loyalty</div>
        <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-4  text-4xl text-gray-500">
          <div className="text-center p-10">
            Maintaining relationships with your customers is hard
          </div>

          <div className="flex items-center justify-center">
            <ArrowRight className="w-16 h-16 text-gray-600" />
          </div>

          <div className="text-center">
            <div className="text-center p-10">Cradle:</div>
            <ol className="space-y-4 text-left list-decimal list-inside text-4xl">
              <li>Automates boater communications that feel personal</li>
              <li>Keeps your customers engaged without the manual work</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="w-full justify-center items-center flex flex-col mt-32 mb-16 p-8 border-b border-gray-300 p-16">
        <div className="text-6xl">System Integration</div>
        <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-4  text-4xl text-gray-500">
          <div className="text-center p-10">
            Integrating different systems is complex
          </div>

          <div className="flex items-center justify-center">
            <ArrowRight className="w-16 h-16 text-gray-600" />
          </div>

          <div className="text-center">
            <div className="text-center p-10">Cradle:</div>
            <ol className="space-y-4 text-left list-decimal list-inside text-4xl">
              <li>Connect all your existing tools into one clean data layer</li>
              <li>Works with your existing tools</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="text-6xl w-full justify-center items-center flex flex-col mt-32 mb-16 p-16">
        <div>AI Dry Storage Optimization</div>
        <div className="text-4xl mt-8 max-w-4xl text-center text-gray-500">
          Automatically assign every boat to the optimal storage slip using
          machine learning to maximize capacity and NOI
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
              "Let's discuss how Cradle can help consolidate your fragmented systems and unlock operational insights across your business."
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
