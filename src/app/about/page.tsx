import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Cradle - Our Mission to Transform Marina Operations',
  description: 'Learn about Cradle\'s mission to bring modern data infrastructure to marina operators. Founded by operators who experienced the pain of manual processes firsthand.',
  openGraph: {
    title: 'About Cradle',
    description: 'Our mission to transform marina operations with modern data infrastructure',
    url: 'https://usecradle.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-32 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Cradle</h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building modern data infrastructure for the marina industry—transforming
            how operators manage their businesses through real-time intelligence and automation.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-teal-600">Our Mission</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              The marina industry has been operating the same way for decades. While boats
              have become smarter and more sophisticated, the business operations behind
              them haven't kept pace.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              At Cradle, we believe marina operators deserve the same level of technological
              sophistication as any modern business. Our mission is to eliminate the manual
              work, data silos, and inefficiencies that hold marinas back from reaching their
              full potential.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              We're not just building software—we're building the data layer that connects
              everything together, giving operators real-time visibility and automated
              workflows that make their businesses run smoother.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20 bg-gray-50 -mx-4 px-4 md:-mx-8 md:px-8 py-12 rounded-2xl">
          <h2 className="text-4xl font-bold mb-6 text-teal-600">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Cradle was founded by operators who experienced firsthand the pain of managing
              a marina with disconnected systems and manual processes. After spending countless
              hours building reports in Excel and manually copying data between systems, we
              knew there had to be a better way.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              We started by building tools for ourselves—automated reporting, system
              integrations, and AI-powered optimization. The results were immediate: 20+ hours
              saved per week, 30% increase in capacity utilization, and significantly better
              decision-making through real-time data.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              When other marina operators saw what we'd built, they wanted it too. That's when
              we realized this wasn't just our problem—it was an industry-wide challenge. We
              founded Cradle to bring modern data infrastructure to every marina operator who's
              tired of fighting their systems instead of growing their business.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-10 text-teal-600 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-teal-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Operator-First</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We build for operators, not vendors. Every feature we ship solves a real
                problem that marina operators face daily. We're not interested in adding
                complexity—we're focused on making your life easier.
              </p>
            </div>

            <div className="bg-white border-2 border-teal-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Practical Innovation</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We use cutting-edge technology like AI and machine learning, but only when
                it delivers real, measurable value. No gimmicks—just practical solutions
                that increase revenue and save time.
              </p>
            </div>

            <div className="bg-white border-2 border-teal-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Transparency</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Your data is yours. We're transparent about how we handle it, what we do
                with it, and how our systems work. No black boxes, no vendor lock-in—just
                clear, honest communication.
              </p>
            </div>

            <div className="bg-white border-2 border-teal-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-teal-600">Long-Term Partnership</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're not trying to sell you software and disappear. We're building
                long-term partnerships with marina operators, helping you grow your business
                year after year through continuous improvement and support.
              </p>
            </div>
          </div>
        </section>

        {/* Why Now Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-6 text-teal-600">Why Now?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              The marina industry is at an inflection point. Customer expectations are rising,
              margins are tightening, and competition is increasing. The operators who thrive
              in the next decade will be those who embrace modern technology.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Recent advances in AI, cloud infrastructure, and data integration have made it
              possible to build solutions that simply weren't feasible five years ago. We can
              now automate complex workflows, optimize operations in real-time, and give
              operators insights that used to require entire teams of analysts.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              The technology is ready. The need is clear. The time is now.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-50 -mx-4 px-4 md:-mx-8 md:px-8 py-12 rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            We're working with marina operators across the country to modernize their operations.
            If you're ready to stop fighting your systems and start growing your business,
            let's talk.
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
  )
} 