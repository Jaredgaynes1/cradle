import { Navbar } from "@/components/navbar";

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Learn More</h1>
        <p className="text-gray-600 mb-6">Deep dive resources and documentation links.</p>
      </main>
    </div>
  )
} 