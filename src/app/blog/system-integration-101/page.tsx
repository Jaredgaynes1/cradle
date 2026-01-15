import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'System Integration 101: Connecting Your Marina Tech Stack',
  description: 'A practical guide to unifying your accounting, PMS, and operations systems into one data layer. Learn about marina system integration.',
  keywords: ['marina system integration', 'marina software integration', 'PMS integration', 'marina tech stack'],
  openGraph: {
    title: 'System Integration 101: Connecting Your Marina Tech Stack',
    description: 'Practical guide to integrating your marina systems',
    url: 'https://usecradle.com/blog/system-integration-101',
    type: 'article',
    publishedTime: '2026-01-03T00:00:00.000Z',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          System Integration 101: Connecting Your Marina Tech Stack
        </h1>
        <p className="text-gray-500 mb-8">Published on January 3, 2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            Most marinas use 5-10 different software systems that don't talk to
            each other. System integration creates a unified data layer that makes
            all your tools work together seamlessly.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Typical Marina Tech Stack</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A modern marina typically uses:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Property management system (PMS) for reservations and billing</li>
            <li>Accounting software (QuickBooks, Xero, etc.)</li>
            <li>CRM or customer database</li>
            <li>Point of sale system for fuel and retail</li>
            <li>Maintenance tracking software</li>
            <li>Email marketing platform</li>
            <li>Payment processing system</li>
            <li>Access control and security systems</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Without integration, data has to be manually copied between these
            systems, leading to errors, wasted time, and incomplete information.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">What Integration Solves</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            System integration creates a unified data layer where:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Customer data automatically syncs across all platforms</li>
            <li>Financial data flows directly from PMS to accounting</li>
            <li>Service history is accessible everywhere it's needed</li>
            <li>Reporting pulls from all systems automatically</li>
            <li>Changes in one system update all connected systems</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Common Integration Patterns</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-3">1. PMS to Accounting</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Automatically sync invoices, payments, and customer data from your
            property management system to your accounting software. No more
            double-entry or reconciliation headaches.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">2. CRM to Email Marketing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Customer segments and behavior data flow to your email platform,
            enabling automated, targeted campaigns based on actual usage patterns.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">3. Access Control to Billing</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Track facility usage and automatically bill customers for gate access,
            pump-out services, or other amenity usage.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">4. All Systems to Analytics</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pull data from every system into a unified analytics platform for
            comprehensive business intelligence and reporting.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Integration Approaches</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            There are several ways to integrate systems:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>Native integrations:</strong> Some software has built-in connections</li>
            <li><strong>API connections:</strong> Direct system-to-system data exchange</li>
            <li><strong>Integration platforms:</strong> Middleware that connects multiple systems</li>
            <li><strong>Custom data pipelines:</strong> Tailored solutions for complex needs</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Getting Started with Integration</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Start with your highest-value connections:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li>Identify which manual processes waste the most time</li>
            <li>Map out where your data lives and where it needs to go</li>
            <li>Prioritize integrations based on ROI and complexity</li>
            <li>Start with one or two critical integrations</li>
            <li>Expand your integration layer over time</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Long-Term Benefits</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once your systems are integrated, you unlock:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Single source of truth for all business data</li>
            <li>Automated workflows that span multiple systems</li>
            <li>Real-time reporting and analytics</li>
            <li>Reduced errors from manual data entry</li>
            <li>Ability to add new systems easily</li>
            <li>Better customer experience from unified data</li>
          </ul>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
            <p className="text-lg font-semibold text-teal-900 mb-2">
              Ready to connect your systems?
            </p>
            <p className="text-teal-800">
              Cradle specializes in marina system integration. Let's discuss your
              tech stack.
            </p>
            <a
              href="https://cal.com/jared-gaynes-vjuiq7/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}
