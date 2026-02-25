import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cradle - Outcomes for Marinas, Not Just Software",
  description:
    "Cradle delivers outcomes for marinas — not just software. We plug into the tools you already use and build custom solutions using our proprietary technology.",
  openGraph: {
    title: "About Cradle",
    description:
      "Outcomes for marinas, not just software",
    url: "https://usecradle.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Cradle</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cradle delivers outcomes for marinas — not just software.
          </p>
        </div>

        <section className="mb-16">
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            Every marina runs differently. Different systems, different workflows, different customers. That&apos;s why we don't believe in one-size-fits-all software.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            We take a different approach: we plug into the management and reservation tools you already use and build custom solutions using our proprietary technology. No rip-and-replace. No learning a new system. Just results.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            The marina industry has been operating the same way for decades. Boats have gotten smarter. Customer expectations have risen. But the software hasn&apos;t kept pace.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            We&apos;re here to change that. Cradle exists to give marina operators the same operational sophistication that every other modern industry takes for granted — without adding complexity to their day.
          </p>
        </section>

        {/* Approach Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">Our Approach</h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Cradle is built on AI from the ground up, but you&apos;d never know it. We don&apos;t ask our clients to learn new technology or change how they work. Instead, we handle the heavy lifting behind the scenes — automating workflows, surfacing insights, and eliminating manual work — so operators can spend their time where it matters most: with their customers.
          </p>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 -mx-4 px-4 md:-mx-8 md:px-8 py-12 rounded-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let&apos;s Talk</h2>
          <p className="text-base text-gray-700 mb-8 max-w-2xl mx-auto">
            We&apos;re working with marina operators across the country to modernize their businesses. If you&apos;re ready to get more from the tools you already have, let&apos;s connect.
          </p>
          <a
            href="https://cal.com/jared-gaynes-vjuiq7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-teal-600 transition"
          >
            Schedule a Call &rarr;
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
