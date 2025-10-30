import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 grid grid-cols-1 md:grid-cols-3 items-center">
          <div className="flex items-baseline gap-3 justify-self-center md:justify-self-start">
            <Image src="/cradle-logo.svg" alt="Cradle Logo" width={50} height={50} />
            <div className="text-5xl font-bold text-gray-900 justify-self-start">Cradle</div>
          </div>

          <nav className="hidden md:flex items-center justify-center space-x-8">
            <a href="/#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
            <a href="/#industries" className="text-gray-600 hover:text-gray-900">Industries</a>
            <a href="/#hero" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="mailto:Jared@usecradle.com" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>

          <a
            href="https://cal.com/jared-gaynes-vjuiq7/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex justify-self-end"
          >
            <Button className="bg-gray-900 hover:bg-gray-800 text-white w-full md:w-auto">
              Talk to a data expert
            </Button>
          </a>
        </div>
      </header>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Blog</h1>

          <div className="border border-dashed border-gray-300 rounded-lg p-12 mt-6">
            <p className="text-gray-500 text-lg">Coming soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}


