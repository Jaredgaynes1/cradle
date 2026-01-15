import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Building Customer Loyalty in the Marina Industry',
  description: 'Automated communication strategies that keep boaters engaged without the manual work. Improve retention by 5-10% with personalized automation.',
  keywords: ['marina customer loyalty', 'boater retention', 'marina marketing automation', 'customer engagement'],
  openGraph: {
    title: 'Building Customer Loyalty in the Marina Industry',
    description: 'Automated strategies for better customer retention',
    url: 'https://usecradle.com/blog/building-customer-loyalty',
    type: 'article',
    publishedTime: '2026-01-05T00:00:00.000Z',
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <article className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6">
          Building Customer Loyalty in the Marina Industry
        </h1>
        <p className="text-gray-500 mb-8">Published on January 5, 2026</p>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl mb-6 text-gray-700 leading-relaxed">
            Customer retention is cheaper than acquisition, but most marinas
            struggle to maintain consistent communication with their boaters.
            Automated engagement is the solution.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Communication Challenge</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Marina operators know they should stay in touch with customers, but:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>You don't have time to send personalized emails to hundreds of boaters</li>
            <li>Generic mass emails feel impersonal and get ignored</li>
            <li>Manual tracking of customer interactions is impossible at scale</li>
            <li>You miss opportunities to upsell services at the right moment</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">What Automated Engagement Looks Like</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Modern customer engagement automation doesn't mean robotic, generic
            messages. It means personalized communication at scale:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Welcome sequences for new boaters with facility information</li>
            <li>Seasonal reminders (winterization, spring commissioning)</li>
            <li>Service recommendations based on boat age and usage</li>
            <li>Birthday and anniversary messages</li>
            <li>Re-engagement campaigns for inactive customers</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The Key: Personalization at Scale</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The secret to effective automated communication is using your data
            to make each message feel personal:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Reference the customer's specific boat and slip</li>
            <li>Time messages based on their usage patterns</li>
            <li>Recommend services relevant to their boat type</li>
            <li>Acknowledge their history with your marina</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Triggered Communications</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The most effective messages are triggered by customer behavior or
            data events:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>Send maintenance reminders based on engine hours</li>
            <li>Upsell premium services when a customer's boat value increases</li>
            <li>Reach out when a customer hasn't visited in 30 days</li>
            <li>Offer renewal incentives before contracts expire</li>
            <li>Request reviews after positive service interactions</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">The ROI of Better Engagement</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Marina operators with automated customer engagement see:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>5-10% improvement in customer retention rates</li>
            <li>15-20% increase in service revenue from upsells</li>
            <li>Higher customer satisfaction scores</li>
            <li>More positive reviews and referrals</li>
            <li>Zero additional staff time required</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-4">Getting Started</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You don't need to automate everything at once. Start with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
            <li>A welcome sequence for new customers</li>
            <li>Seasonal service reminders</li>
            <li>Contract renewal notifications</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-4">
            Then expand from there as you see the results.
          </p>

          <div className="bg-teal-50 border-l-4 border-teal-500 p-6 my-8">
            <p className="text-lg font-semibold text-teal-900 mb-2">
              Ready to improve customer retention?
            </p>
            <p className="text-teal-800">
              Learn how Cradle can help you automate personalized customer
              communications.
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
