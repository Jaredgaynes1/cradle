import { Navbar } from "@/components/navbar";

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-4 py-16 mt-32 text-center">
        <h1 className="text-3xl font-bold mb-4">Solutions</h1>
        <p className="text-gray-600 mb-6">Overview of what Cradle offers.</p>
      </main>
    </div>
  )
} 