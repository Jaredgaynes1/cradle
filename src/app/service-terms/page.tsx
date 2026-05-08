import { Navbar } from "@/components/navbar";

export default function ServiceTermsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />

      <main className="container mx-auto px-4 py-16 mt-32 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2">
            <strong>Terms of Service</strong>
          </h1>
          <p className="text-gray-500 text-sm mb-8">Cradle Labs, Inc.</p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            These Online Terms of Service ("<strong>Terms</strong>") form a
            binding agreement between <strong>Cradle Labs, Inc.</strong> ("
            <strong>Cradle</strong>," "<strong>we</strong>," "
            <strong>us</strong>
            ," "<strong>our</strong>") and the customer entity or individual ("
            <strong>Customer</strong>," "<strong>you</strong>," or "
            <strong>your</strong>") who accepts them by paying a Cradle invoice,
            executing an Order Form or SOW referencing these Terms, or otherwise
            using or receiving the Services.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            If you and Cradle have signed a separate master services agreement
            ("MSA"), that agreement controls to the extent of any conflict.
          </p>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>1. Scope of Services</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cradle provides: (a) a software platform for marina data
              analytics, storage optimization, operational scoring, and boater
              lifecycle management, accessible via web application or API (the
              "Platform"); (b) data integration and sync services, including
              connectivity between marina management systems (e.g., Dockwa,
              Molo, Boatyard), customer relationship management platforms (e.g.,
              HubSpot, HighLevel), and accounting or operational systems; and
              (c) professional services, including managed onboarding, custom
              integration development, data migration, reporting configuration,
              and ongoing technical support (together with the Platform and
              integration services, the "Services").
            </p>
            <p className="text-gray-700 leading-relaxed">
              The specific Services, pricing, and subscription terms will be set
              forth in an Order Form or Statement of Work ("SOW").
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>2. Term; Renewals</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Unless otherwise stated in an Order Form/SOW:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                Services begin on the Start Date specified in the Order Form or
                SOW.
              </li>
              <li>Services renew monthly or for the stated subscription period.</li>
              <li>
                Either party may decline renewal with 30 days&apos; written notice
                prior to the next renewal period.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              These Terms apply to all renewal terms unless replaced in writing.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>3. Fees; Payment; Taxes</strong>
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              3.1 <strong>Fees.</strong> Customer will pay the fees described in
              each Order Form/SOW. Fees may include:
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>Monthly or annual Platform subscription fees</li>
              <li>Per-property or per-location fees</li>
              <li>Fixed-fee or hourly professional services work</li>
              <li>
                Pass-through costs (e.g., third-party APIs, infrastructure,
                storage, compute) at cost
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">
              3.2 <strong>Invoicing & Payment Terms.</strong>
            </h3>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                Platform subscriptions are billed monthly or annually in advance
              </li>
              <li>Professional services work is billed per milestone or monthly</li>
              <li>
                Net <strong>30 days</strong> unless stated otherwise
              </li>
              <li>
                Late fees: <strong>1.5%/month</strong> or the maximum rate
                permitted by law
              </li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">
              3.3 <strong>Taxes.</strong> Fees exclude taxes. Customer is
              responsible for applicable taxes except those based on Cradle&apos;s
              income.
            </h3>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>4. Customer Responsibilities</strong>
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              4.1 <strong>Access & Credentials.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Customer will provide Cradle the system access required to perform
              the Services (e.g., marina management system credentials,
              accounting system access, API keys, integration credentials).
              Customer warrants it has the authority to grant such access.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              4.2 <strong>Third-Party Systems.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Customer is responsible for its licensing, compliance, data
              accuracy, and usage of third-party systems that Cradle integrates
              with, including but not limited to marina management systems,
              property management systems, accounting systems, and CRM
              platforms. Cradle is not responsible for outages, errors, API
              changes, or data issues originating from third-party platforms.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              4.3 <strong>Lawful Use.</strong>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Customer will not use the Services for unlawful purposes or to
              build a competing data analytics, integration, or marina
              optimization product.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>5. Data; Security; Privacy</strong>
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              5.1 <strong>Customer Data.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Customer retains ownership of all data supplied to or processed on
              behalf of Customer ("Customer Data"). Customer grants Cradle a
              limited license to use Customer Data solely to (a) provide and
              operate the Services on behalf of Customer, and (b) improve the
              functionality, reliability, and performance of Cradle&apos;s products
              and infrastructure. Customer Data is logically separated from the
              data of other customers and is not accessible to or shared with
              any other customer.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              5.2 <strong>Security.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cradle will maintain commercially reasonable administrative,
              technical, and physical safeguards appropriate to the nature of
              the Services.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              5.3 <strong>Data Return.</strong>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Upon request within <strong>30 days</strong> of termination,
              Cradle will provide Customer Data in a reasonable export format.
              After this window, Cradle may delete Customer Data.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>6. Intellectual Property</strong>
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              6.1 <strong>Cradle IP.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cradle retains all rights to its proprietary technology ("Cradle
              IP"), which includes but is not limited to the Platform, data
              infrastructure, schemas, connectors, code, pipelines, monitoring
              systems, tooling, templates, analytical models, algorithms, scoring
              methodologies, derived metrics, and all underlying technology.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              6.2 <strong>Deliverables.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              If an SOW generates deliverables, Customer receives ownership of
              the specific deliverables upon full payment, excluding embedded
              Cradle IP. Cradle IP within deliverables is licensed to Customer
              solely for internal use during the subscription.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              6.3 <strong>Feedback.</strong>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Customer grants Cradle the right to use suggestions or feedback
              without restriction.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>7. Service Availability</strong>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cradle provides the Platform and Services on a commercially
              reasonable basis. Cradle may perform scheduled maintenance, deploy
              updates, or adjust pipelines and integrations as necessary. Cradle
              does not guarantee continuous, uninterrupted, or error-free
              operation of the Platform, particularly where the Services depend
              on the availability and performance of third-party systems.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>8. Warranties; Disclaimers</strong>
            </h2>

            <h3 className="text-xl font-semibold mb-3">
              8.1 <strong>Professional Services Warranty.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cradle warrants that its professional services will be performed
              in a professional and workmanlike manner.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              8.2 <strong>Platform Disclaimer.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              THE PLATFORM, INCLUDING ALL DATA ANALYTICS, SCORING, OPTIMIZATION
              TOOLS, INTEGRATIONS, PIPELINES, AND INFRASTRUCTURE, IS PROVIDED{" "}
              <strong>&quot;AS IS.&quot;</strong> CRADLE DISCLAIMS ALL IMPLIED
              WARRANTIES, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold mb-3">
              8.3 <strong>Optimization and Placement Recommendations.</strong>
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              To the extent the Services include storage optimization analysis,
              placement recommendations, dry stack scoring, or similar
              operational guidance (collectively, "Optimization Outputs"), such
              Optimization Outputs are provided solely as informational tools
              and analytical aids. Optimization Outputs do not constitute
              engineering, structural, safety, or operational directives.
              Customer acknowledges and agrees that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                all decisions regarding the physical placement, relocation, or
                storage of vessels and equipment remain solely within
                Customer&apos;s discretion and responsibility;
              </li>
              <li>
                Customer shall independently evaluate all Optimization Outputs
                in consultation with its qualified operations personnel, marina
                engineers, structural engineers, and any other relevant
                professionals before implementing any changes to vessel
                placement or storage configurations;
              </li>
              <li>
                Cradle does not inspect, assess, or warrant the structural
                capacity, load-bearing limits, or physical condition of any
                storage facility, rack system, or marine infrastructure; and
              </li>
              <li>
                Cradle shall have no liability for any loss, damage, injury, or
                claim arising from Customer&apos;s implementation of or reliance upon
                any Optimization Output.
              </li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>9. Indemnification</strong>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Customer will indemnify, defend, and hold harmless Cradle and its
              officers, directors, employees, and agents from and against any
              third-party claims, liabilities, damages, losses, and expenses
              (including reasonable attorneys&apos; fees) arising from: (a) Customer
              Data; (b) Customer&apos;s unlawful use of the Services; (c) misuse of
              access or credentials provided by Customer; or (d) Customer&apos;s
              implementation of Optimization Outputs in a manner inconsistent
              with Section 8.3.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>10. Limitation of Liability</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>
                NEITHER PARTY IS LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL,
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, REGARDLESS OF THE THEORY OF
                LIABILITY.
              </li>
              <li>
                EXCEPT FOR PAYMENT OBLIGATIONS, INDEMNIFICATION OBLIGATIONS,
                BREACH OF CONFIDENTIALITY, OR WILLFUL MISCONDUCT, EACH
                PARTY&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO
                THESE TERMS IS CAPPED AT THE FEES PAID BY CUSTOMER TO CRADLE IN
                THE 12 MONTHS PRECEDING THE CLAIM.
              </li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>11. Suspension & Termination</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Cradle may suspend Services if (a) required for security or system
              integrity, or (b) Customer materially breaches these Terms.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Either party may terminate for material breach not cured within{" "}
              <strong>30 days</strong> of written notice.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
              <li>All unpaid fees become due.</li>
              <li>Access to the Platform and all managed service obligations end.</li>
              <li>Data return rules in Section 5.3 apply.</li>
            </ul>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>12. Dispute Resolution; Arbitration; Waivers</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Before filing any claim, the parties will attempt good-faith
              resolution for <strong>30 days</strong>.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              All disputes arising from these Terms will be resolved by binding
              arbitration under AAA Commercial Rules before a single arbitrator
              in New York County, NY.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Federal Arbitration Act governs this provision.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed font-semibold">
              NO CLASS ACTIONS.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Either party may seek injunctive relief in court for IP or
              confidentiality violations.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>13. Modifications to These Terms</strong>
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Cradle may update these Terms periodically. Updated Terms take
              effect upon posting and apply to renewals and new Orders. For
              materially adverse changes affecting an ongoing paid term,
              Customer may terminate within <strong>30 days</strong> of notice
              with a pro-rated refund of prepaid unused fees.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>14. Notices</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Notices must be emailed to:
            </p>
            <p className="text-gray-700 mb-2 leading-relaxed">
              <strong>Cradle:</strong> jared@usecradle.com
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Customer:</strong> the billing/admin contact listed in the
              Order Form/SOW.
            </p>
          </section>

          <hr className="my-8 border-gray-300" />

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              <strong>15. Entire Agreement</strong>
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              These Terms, together with any Order Form or SOW referencing them,
              constitute the entire agreement for the Services and supersede all
              prior communications.
            </p>
            <p className="text-gray-700 font-semibold">
              <strong>Last Updated:</strong> May 8, 2026
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Cradle</h3>
              <p className="text-gray-600 text-sm">
                Modern data infrastructure for real-world operations across
                legacy industries.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/#solutions"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/#industries"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Industries
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="/#solutions"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
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
                  <a
                    href="/#hero"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/#solutions"
                    className="text-gray-600 hover:text-gray-900 text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://cal.com/jared-gaynes-vjuiq7/30min"
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
              <p className="text-gray-500 text-sm">
                © 2025 Cradle Labs Inc. All Rights Reserved
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/#hero" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  ></svg>
                </a>
                <a href="/#hero" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  ></svg>
                </a>
                <a href="/#hero" className="text-gray-400 hover:text-gray-600">
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
    </div>
  );
}
