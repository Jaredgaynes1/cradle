import React from "react"
export const Footer = () => {
    return (
      <footer className="relative border-t border-gray-200"
        style={{
          backgroundImage: "url('/images/marina.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Cradle</h3>
              <p className="text-sm">
                Modern data infrastructure for real-world operations across
                legacy industries.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#solutions"
                    className=" hover:text-gray-900 text-sm"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#industries"
                    className=" hover:text-gray-900 text-sm"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className=" hover:text-gray-900 text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className=" hover:text-gray-900 text-sm"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#hero"
                    className=" hover:text-gray-900 text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className=" hover:text-gray-900 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#solutions"
                    className=" hover:text-gray-900 text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://cal.com/jared-gaynes-vjuiq7/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 text-sm"
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
              <p className="text-sm">
                © 2025 Cradle Labs Inc. All Rights Reserved
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#hero" className=" hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  ></svg>
                </a>
                <a href="#hero" className=" hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  ></svg>
                </a>
                <a href="#hero" className="hover:text-gray-600">
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  ></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      )
}