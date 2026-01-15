import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: 30% Revenue Increase Through Data Analytics',
  description: 'How one marina operator used Cradle to identify untapped revenue streams and optimize pricing, resulting in $700K additional annual revenue.',
  keywords: ['marina case study', 'marina revenue optimization', 'data analytics ROI', 'marina success story'],
  openGraph: {
    title: 'Case Study: 30% Revenue Increase Through Data Analytics',
    description: 'Real results: $700K additional revenue from data optimization',
    url: 'https://usecradle.com/blog/case-study-revenue-increase',
    type: 'article',
    publishedTime: '2025-12-28T00:00:00.000Z',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Case Study: 30% Revenue Increase Through Data Analytics
        </h1>
        <p className="text-gray-500 mb-8">Published on December 28, 2025</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            How a 300-slip marina used Cradle's data infrastructure to identify
            untapped revenue streams and optimize pricing, resulting in a 30%
            revenue increase in 12 months.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Challenge</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Harbor Bay Marina operated 300 wet slips and 200 dry storage spaces
            in a competitive market. Despite strong occupancy, the general manager
            felt they were leaving money on the table but couldn't pinpoint where.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Their challenges included:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Pricing that hadn't been updated in 3 years</li>
            <li>No visibility into which services were most profitable</li>
            <li>Manual reporting that took 40+ hours per month</li>
            <li>Limited understanding of customer lifetime value</li>
            <li>Inefficient dry storage utilization</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Approach</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We started by implementing Cradle's data infrastructure to create
            a unified view of their entire operation. This involved:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li>Integrating their PMS, accounting, and service systems</li>
            <li>Building real-time dashboards for key metrics</li>
            <li>Analyzing 3 years of historical data</li>
            <li>Implementing AI-powered storage optimization</li>
            <li>Creating automated customer segmentation</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Findings</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The data revealed several surprising insights:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">1. Pricing Was 15-20% Below Market</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            By comparing their rates to market data and analyzing customer
            retention by price point, we found they could increase prices
            without impacting occupancy.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">2. Service Utilization Was Only 40%</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Most customers didn't know about available services. The data showed
            which customers were most likely to buy which services, enabling
            targeted outreach.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">3. Dry Storage Was 25% Underutilized</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Poor space allocation meant they were turning away customers while
            leaving spaces empty. AI optimization identified room for 50 more boats.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">4. 20% of Customers Generated 60% of Revenue</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Customer segmentation revealed their most valuable customers, enabling
            VIP programs and retention strategies.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Implementation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Based on these insights, Harbor Bay implemented:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Tiered pricing strategy based on market analysis</li>
            <li>Automated service recommendations to customers</li>
            <li>AI-optimized dry storage configuration</li>
            <li>VIP program for high-value customers</li>
            <li>Dynamic pricing for transient slips</li>
            <li>Automated upsell campaigns</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Results</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            After 12 months, Harbor Bay Marina saw:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>30% increase in total revenue</strong> ($2.4M to $3.1M)</li>
            <li><strong>18% increase in average slip rate</strong> without occupancy loss</li>
            <li><strong>50 additional dry storage spots</strong> from optimization</li>
            <li><strong>35% increase in service revenue</strong> from targeted marketing</li>
            <li><strong>12% improvement in customer retention</strong> from better engagement</li>
            <li><strong>40 hours per month saved</strong> on reporting</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Key Takeaways</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This case study demonstrates several important lessons:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li><strong>You can't optimize what you can't measure:</strong> Real-time data visibility is essential</li>
            <li><strong>Small changes compound:</strong> Multiple 5-10% improvements add up to massive gains</li>
            <li><strong>Data reveals hidden opportunities:</strong> The biggest wins weren't obvious</li>
            <li><strong>Automation scales impact:</strong> What worked for 10 customers works for 500</li>
            <li><strong>ROI is immediate:</strong> The platform paid for itself in month 2</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-4">Could This Work for Your Marina?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            While every marina is different, most operators have similar untapped
            opportunities in:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Pricing optimization</li>
            <li>Space utilization</li>
            <li>Service penetration</li>
            <li>Customer lifetime value</li>
            <li>Operational efficiency</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            The question isn't whether opportunities exist—it's whether you have
            the data infrastructure to find and capitalize on them.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
            <p className="text-lg font-semibold text-teal-900 mb-2">
              Discover your revenue opportunities
            </p>
            <p className="text-teal-800">
              Schedule a call to discuss how data analytics could impact your
              marina's revenue.
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
