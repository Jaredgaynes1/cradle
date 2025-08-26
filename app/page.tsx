import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Anchor, Building2, Truck, Factory, Database, BarChart3, Shield, Zap, Users } from "lucide-react"
import NextLink from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">Cradle</div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900">
              Solutions
            </a>
            <a href="#industries" className="text-gray-600 hover:text-gray-900">
              Industries
            </a>
            <a href="#hero" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="mailto:Jared@usecradle.com" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </nav>

          <a
            href="https://calendly.com/jaredgaynes/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Talk to a data expert</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Modern data infrastructure
            <br />
            for <span className="text-blue-600">real-world operations</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Cradle helps unify customer, accounting, and operational data across fragmented systems. Built for rollups
            and operators managing complex portfolios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/jaredgaynes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                Talk to a data expert →
              </Button>
            </a>
            <a href="mailto:Jared@usecradle.com" className="inline-flex">
              <Button variant="ghost" size="lg" className="text-gray-600 hover:text-gray-900">
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Built for Complex Operations */}
      <section id="solutions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for complex operations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in the messy, fragmented data challenges that come with managing portfolios of legacy
              businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Database className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Consolidation</h3>
                <p className="text-gray-600">
                  Unify disparate data sources from legacy systems into a single, coherent view.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">System Integration</h3>
                <p className="text-gray-600">
                  Connect fragmented business units and their various operational systems seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Operational Analytics</h3>
                <p className="text-gray-600">
                  Rent roll reporting & actionable insights for management and optimization.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Managed Infrastructure</h3>
                <p className="text-gray-600">
                  Fully managed data infrastructure with built-in security and compliance for sensitive operational
                  data.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">
                  Get up and running quickly with pre-built connectors for common legacy systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Experts </h3>
                <p className="text-gray-600">
                  Dedicated team of data engineers with deep expertise in legacy industry operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized expertise across legacy industries
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique challenges of operationally fragmented verticals and have deep experience helping
              operators consolidate their portfolio data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Anchor className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marinas</h3>

                <p className="text-gray-600 text-sm">
                  Consolidate slip management, maintenance records, and customer data across marina portfolios.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Building2 className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Management</h3>

                <p className="text-gray-600 text-sm">
                  Integrate tenant data, maintenance systems, and financial records across property portfolios.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Truck className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Logistics & Transport</h3>

                <p className="text-gray-600 text-sm">
                  Connect fleet management, route optimization, and customer systems for transport companies.
                </p>
              </CardContent>
            </Card>

            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to unify your portfolio data?</h2>

          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            {
              "Let's discuss how Cradle can help consolidate your fragmented systems and unlock operational insights across your portfolio companies."
            }
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/jaredgaynes/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Talk to a data expert
              </Button>
            </a>
            <a href="mailto:Jared@usecradle.com" className="inline-flex">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
              >
                Learn More →
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Cradle</h3>
              <p className="text-gray-600 text-sm">
                Modern data infrastructure for real-world operations across legacy industries.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#solutions" className="text-gray-600 hover:text-gray-900 text-sm">
                    Solutions
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-gray-600 hover:text-gray-900 text-sm">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-gray-900 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-gray-600 hover:text-gray-900 text-sm">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="text-gray-600 hover:text-gray-900 text-sm">
                    About
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-gray-600 hover:text-gray-900 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#solutions" className="text-gray-600 hover:text-gray-900 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://calendly.com/jaredgaynes/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">© 2025 Cradle Labs Inc. All Rights Reserved</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#hero" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    
                  </svg>
                </a>
                <a href="#hero" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    
                  </svg>
                </a>
                <a href="#hero" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
