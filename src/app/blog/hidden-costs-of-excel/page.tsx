import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Hidden Costs of Excel Spreadsheets',
  description: 'Discover how manual reporting is costing your marina thousands in lost revenue and wasted time. Calculate the true cost of spreadsheet-based operations.',
  keywords: ['excel costs', 'marina reporting', 'manual processes', 'spreadsheet alternatives'],
  openGraph: {
    title: 'The Hidden Costs of Excel Spreadsheets',
    description: 'Manual reporting costs marinas $50K-75K per year in wasted time',
    url: 'https://usecradle.com/blog/hidden-costs-of-excel',
    type: 'article',
    publishedTime: '2026-01-10T00:00:00.000Z',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          The Hidden Costs of Excel Spreadsheets
        </h1>
        <p className="text-gray-500 mb-8">Published on January 10, 2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            Excel spreadsheets seem free and familiar, but they're costing your
            marina far more than you realize. Let's break down the true cost.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Time Tax</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            How many hours per week does your team spend on spreadsheet work?
            The average marina operator spends 20-30 hours per week on:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Manually copying data from one system to another</li>
            <li>Building reports by pulling data from multiple sources</li>
            <li>Fixing errors from manual data entry</li>
            <li>Searching for the "right version" of a spreadsheet</li>
            <li>Teaching new employees your custom spreadsheet systems</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            At $50/hour, that's $1,000-$1,500 per week, or $50,000-$75,000 per year
            just in labor costs. And that doesn't include opportunity cost.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Error Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A study by Dartmouth found that 88% of spreadsheets contain errors.
            In marina operations, these errors translate to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Incorrect pricing leading to lost revenue</li>
            <li>Billing errors that damage customer relationships</li>
            <li>Poor resource allocation from inaccurate forecasting</li>
            <li>Compliance issues from incorrect financial reporting</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Even small errors compound. A 2% pricing error across your entire
            inventory could cost tens of thousands in lost revenue annually.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Decision-Making Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Spreadsheets give you historical data, not real-time insights. By the
            time you've built your monthly report, you're already making decisions
            based on outdated information. This leads to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Missed revenue opportunities</li>
            <li>Delayed responses to operational issues</li>
            <li>Inability to capitalize on seasonal trends</li>
            <li>Reactive instead of proactive management</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Scalability Cost</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Want to expand to a second location? Your spreadsheet-based system
            doesn't scale. You'll need to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Duplicate all your manual processes</li>
            <li>Hire additional staff just to manage data</li>
            <li>Spend months setting up systems for the new location</li>
            <li>Deal with version control across multiple properties</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Alternative</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern data infrastructure eliminates these hidden costs by:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Automating data collection and reporting</li>
            <li>Providing real-time dashboards instead of static reports</li>
            <li>Reducing errors through system integration</li>
            <li>Scaling effortlessly across multiple locations</li>
            <li>Freeing your team to focus on high-value work</li>
          </ul>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
            <p className="text-lg font-semibold text-teal-900 mb-2">
              Calculate your spreadsheet costs
            </p>
            <p className="text-teal-800">
              Talk to our team to see how much your current system is really costing you.
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
