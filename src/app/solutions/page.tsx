import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Database, Zap, Users, BarChart3 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions - Marina Management Platform",
  description:
    "Comprehensive data infrastructure solutions for marinas: real-time business intelligence, marketing automation, system integration, and AI-powered optimization.",
  keywords: [
    "marina solutions",
    "marina software",
    "marina management platform",
    "marina technology",
  ],
  openGraph: {
    title: "Cradle Solutions - Complete Marina Data Platform",
    description:
      "Real-time intelligence, automation, and optimization for modern marinas",
    url: "https://usecradle.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-32 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Complete Data Infrastructure for Marinas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to modernize your marina operations—from
            real-time reporting to AI-powered optimization—in one integrated
            platform.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-20">
          {/* Solution 1: Business Intelligence */}
          <section className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-8 md:p-12 border border-teal-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-teal-500 p-4 rounded-2xl">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3 text-teal-900">
                  Real-Time Business Intelligence
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Stop building reports in Excel. Get instant visibility into
                  your entire operation with automated dashboards and real-time
                  data.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-800">
                  Key Features
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Automated daily, weekly, and monthly reports
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Real-time occupancy and revenue dashboards
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Custom KPI tracking and alerts
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    Historical trend analysis and forecasting
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-teal-800">
                  Benefits
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    Save 20+ hours per week on manual reporting
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    Make data-driven decisions in real-time
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    Spot trends and issues before they impact revenue
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-500 mr-2">✓</span>
                    Access your data from anywhere, anytime
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solution 2: Marketing & Loyalty */}
          <section className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-blue-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-blue-500 p-4 rounded-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3 text-blue-900">
                  Marketing & Customer Loyalty Automation
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Keep customers engaged with automated, personalized
                  communications that feel human—without the manual work.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Key Features
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Automated email campaigns and drip sequences
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Personalized messaging based on customer data
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Seasonal reminders and service recommendations
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Re-engagement campaigns for inactive customers
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Benefits
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Improve customer retention by 5-10%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Increase service revenue by 15-20%
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Maintain relationships without manual effort
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    Never miss an upsell opportunity
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solution 3: System Integration */}
          <section className="bg-gradient-to-br from-purple-50 to-white rounded-3xl p-8 md:p-12 border border-purple-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-purple-500 p-4 rounded-2xl">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3 text-purple-900">
                  System Integration & Data Layer
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Connect all your existing tools into one unified data layer.
                  No more manual data entry or switching between systems.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-800">
                  Key Features
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    PMS, accounting, and operations system integration
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Automated data syncing and validation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Custom workflow automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    API connections to third-party tools
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-purple-800">
                  Benefits
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Eliminate manual data entry errors
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Single source of truth for all business data
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Automate repetitive workflows
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">✓</span>
                    Scale easily across multiple locations
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Solution 4: AI Storage Optimization */}
          <section className="bg-gradient-to-br from-orange-50 to-white rounded-3xl p-8 md:p-12 border border-orange-100">
            <div className="flex items-start gap-6 mb-6">
              <div className="bg-orange-500 p-4 rounded-2xl">
                <Database className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-3 text-orange-900">
                  AI-Powered Dry Storage Optimization
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Maximize your storage capacity with machine learning that
                  automatically assigns boats to optimal slips.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-orange-800">
                  Key Features
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    AI-powered space allocation algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Automatic rebalancing as boats come and go
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Visual layout management and planning
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Capacity forecasting and planning tools
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-orange-800">
                  Benefits
                </h3>
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Increase capacity by 15-30% with no construction
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Add $100K-$200K+ annual revenue
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Reduce time searching for available slips
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">✓</span>
                    Optimize for both capacity and operations
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <section className="bg-teal-50 -mx-4 px-4 md:-mx-8 md:px-8 py-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're working with marina operators across the country to modernize
            their operations. If you're ready to stop fighting your systems and
            start growing your business, let's talk.
          </p>
          <a
            href="https://cal.com/jared-gaynes-vjuiq7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition"
          >
            Schedule a Call
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
