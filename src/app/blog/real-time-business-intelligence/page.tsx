import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Real-Time Business Intelligence for Marina Operators
        </h1>
        <p className="text-gray-500 mb-8">Published on January 1, 2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            Waiting until month-end to see how your business is performing is
            like driving while looking in the rearview mirror. Real-time business
            intelligence gives you the visibility you need to make better decisions.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Problem with Monthly Reports</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Traditional reporting cycles create several problems:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>By the time you see a problem, it's been happening for weeks</li>
            <li>You can't capitalize on opportunities that have already passed</li>
            <li>Seasonal patterns are hard to spot without daily visibility</li>
            <li>Staff performance issues go unaddressed</li>
            <li>You're always reacting instead of proactively managing</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">What Real-Time BI Provides</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Real-time business intelligence gives you instant visibility into:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Current occupancy and available capacity</li>
            <li>Today's revenue vs. forecasts and historical performance</li>
            <li>Service utilization and shop efficiency</li>
            <li>Customer activity and engagement metrics</li>
            <li>Operational KPIs updated continuously</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Key Dashboards for Marina Operators</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-3">1. Revenue Dashboard</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Track daily revenue across all categories, compare to targets and
            previous periods, and identify trends before they become problems.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">2. Occupancy Dashboard</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            See current occupancy rates, upcoming arrivals and departures,
            available inventory, and optimization opportunities in real-time.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">3. Service Dashboard</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Monitor work orders, technician utilization, average service times,
            and customer satisfaction scores as they happen.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-3">4. Customer Health Dashboard</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Track engagement metrics, identify at-risk customers, monitor NPS
            scores, and spot upsell opportunities before they're missed.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">Actionable Alerts</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Real-time BI isn't just about dashboards—it's about getting notified
            when action is needed:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Alert when occupancy drops below target thresholds</li>
            <li>Notify when a high-value customer hasn't been seen in 30 days</li>
            <li>Flag when service wait times exceed SLAs</li>
            <li>Warn when revenue is tracking below forecast</li>
            <li>Identify inventory that's been sitting too long</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Making Data-Driven Decisions</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            With real-time visibility, you can:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Adjust pricing based on current demand</li>
            <li>Reallocate staff based on workload</li>
            <li>Launch promotions when occupancy dips</li>
            <li>Address customer issues immediately</li>
            <li>Optimize operations continuously instead of quarterly</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Competitive Advantage</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Marina operators with real-time BI have a significant edge:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>They spot problems before they impact revenue</li>
            <li>They capitalize on opportunities immediately</li>
            <li>They make decisions based on data, not gut feel</li>
            <li>They respond to market changes in real-time</li>
            <li>They operate more efficiently than competitors</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You don't need a complete BI overhaul to get started. Begin with:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-gray-700">
            <li>Identify your top 5 KPIs that matter most</li>
            <li>Connect the systems that track those metrics</li>
            <li>Build a simple dashboard that updates in real-time</li>
            <li>Set up alerts for critical thresholds</li>
            <li>Expand from there as you see the value</li>
          </ol>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
            <p className="text-lg font-semibold text-teal-900 mb-2">
              See your business in real-time
            </p>
            <p className="text-teal-800">
              Schedule a demo to see what real-time BI looks like for your marina.
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
