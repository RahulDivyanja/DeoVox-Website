import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import PrintButton from "@/src/components/PrintButton";

export const metadata: Metadata = {
  title: "Terms of Service | Deo Vox",
  description: "Review the standard terms and conditions of Deo Vox General Trading FZC LLC governing global sourcing, cargo transit, and trading operations.",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      id: "acceptance-of-terms",
      title: "1. Acceptance & Engagement",
      content: (
        <>
          <p className="mb-4">
            These Terms of Service (&quot;Terms&quot;) govern the relationship, communications, and transactions between you (either an individual representing your company or a sole entrepreneur, &quot;Client&quot;, &quot;you&quot;, or &quot;your&quot;) and Deo Vox General Trading FZC LLC (&quot;Deo Vox&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>
            By browsing our website, requesting logistics or general trading quotes, issuing Purchase Orders (PO), or signing freight execution agreements, you agree to comply with and be bound by these Terms.
          </p>
        </>
      ),
      summary: "Entering our site, requesting quotes, or placing orders binds you to these service terms."
    },
    {
      id: "scope-of-services",
      title: "2. Scope of Services",
      content: (
        <>
          <p className="mb-4">
            Deo Vox operates as an international general trading and supply chain provider. Our primary solutions include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Product Sourcing & General Trading:</strong> Finding, auditing, procuring, and supply-chaining materials and bulk goods across sectors.</li>
            <li><strong>Freight Coordination:</strong> Managing third-party sea carriers, air cargo lines, and overland haulage networks.</li>
            <li><strong>Customs Clearance:</strong> Handling import/export duty compliance, commercial paperwork filing, and free-zone logistics coordination.</li>
          </ul>
          <p>
            Specific timelines, volumes, cargo limitations, and rates are set forth in individually executed service contracts or signed Proforma Invoices (PI), which take precedence in the event of a conflict.
          </p>
        </>
      ),
      summary: "We handle general trading, global sourcing, freight logistics coordination, and customs documentation."
    },
    {
      id: "client-obligations",
      title: "3. Client Commitments & Declarations",
      content: (
        <>
          <p className="mb-4">
            Clients utilizing our trade and transport channels represent and warrant that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Accuracy of Records:</strong> All cargo manifests, dimensions, weight metrics, custom valuations, and dangerous goods declarations provided to us are 100% accurate and complete.</li>
            <li><strong>Regulatory Compliance:</strong> The cargo does not violate international trade embargos, United Nations sanctions, UAE trade laws, or importing-country regulations.</li>
            <li><strong>Licenses & Permits:</strong> You hold all valid permits, import-export codes, and customs clearances required to legally receive the cargo.</li>
          </ul>
          <p>
            Deo Vox reserves the right to reject, hold, or return any shipments if we suspect inaccurate declarations or non-compliance, at the Client&apos;s sole expense.
          </p>
        </>
      ),
      summary: "You must provide correct weights/customs values and verify that your cargo is fully legal and holds proper import permits."
    },
    {
      id: "billing-and-payments",
      title: "4. Pricing, Quotes, & Financial Terms",
      content: (
        <>
          <p className="mb-4">
            Our trade quotes are based on current shipping carrier space availability, fuel surcharges, and local port clearance rates.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Validity Window:</strong> Unless otherwise stated in writing, trade quotes and estimates are valid for 7 calendar days from issuance.</li>
            <li><strong>Payment Milestones:</strong> Service charges and trade fulfillment balances must be settled in full according to the milestones detailed in your Proforma Invoice (typically prior to cargo loading or container release).</li>
            <li><strong>Late Fees & Storage:</strong> Delays in payment or delay in receiving cargo at destination warehouses may result in demurrage, detention, and warehouse storage fees which will be billed directly to the Client.</li>
          </ul>
        </>
      ),
      summary: "Quotes are valid for 7 days. Late payments or cargo collection delays will incur carrier detention or warehousing fees."
    },
    {
      id: "limitation-of-liability",
      title: "5. Limitation of Liability & Insurance",
      content: (
        <>
          <p className="mb-4">
            Deo Vox operates as a general trading firm and logistics coordinator, partnering with world-class shipping lines, air carriers, and port terminals.
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Carrier Liability:</strong> Claims for cargo loss, damage, or delayed delivery must be filed against the responsible ocean/air carrier under standard international maritime regulations (e.g., Hague-Visby Rules or Montreal Convention).</li>
            <li><strong>Force Majeure:</strong> Deo Vox is not liable for service failures, route diversions, or delivery delays resulting from acts of God, extreme maritime weather, port strikes, government lockdowns, border closures, or geopolitical conflict.</li>
            <li><strong>Cargo Insurance:</strong> We highly recommend purchasing comprehensive cargo transit insurance for all international shipments to shield your company from transit losses.</li>
          </ul>
        </>
      ),
      summary: "We coordinate carriage. We are not liable for weather/geopolitical delays or carrier damage; cargo insurance is strongly recommended."
    },
    {
      id: "governing-law",
      title: "6. Governing Law & Dispute Resolution",
      content: (
        <>
          <p className="mb-4">
            These Terms, along with any separate agreements for logistics or trading services, shall be governed by, and interpreted in accordance with, the federal laws of the United Arab Emirates as applicable in the Emirate of Sharjah.
          </p>
          <p>
            Any disputes arising from these Terms or our services that cannot be resolved through amicable negotiation shall be submitted to the exclusive jurisdiction of the competent courts of Sharjah, United Arab Emirates.
          </p>
        </>
      ),
      summary: "All transactions and terms are governed by the laws of the United Arab Emirates, under Sharjah courts."
    }
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow">
        {/* --- Hero Section --- */}
        <section className="relative bg-slate-50/50 py-16 md:py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Terms of <span className="text-[#800000]">Service</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Last Updated: June 26, 2026. Please read these terms carefully before scheduling shipments or engaging Deo Vox for trade and sourcing activities.
            </p>
          </div>
        </section>

        {/* --- Legal Content Section --- */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Side: Table of Contents */}
              <aside className="lg:col-span-4 sticky top-28 bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  Document Navigation
                </h3>
                <nav className="space-y-4">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block text-sm text-gray-600 hover:text-[#800000] hover:translate-x-1 transition-all duration-200 font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
                <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400">
                  <p>Need a copy for your files?</p>
                  <PrintButton label="Print Terms" />
                </div>
              </aside>

              {/* Right Side: Main Text */}
              <div className="lg:col-span-8 space-y-12">
                {sections.map((sec) => (
                  <div 
                    key={sec.id} 
                    id={sec.id} 
                    className="scroll-mt-28 border-b border-gray-100 pb-10 last:border-0"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">{sec.title}</h2>
                    
                    {/* Quick Summary Alert Box */}
                    <div className="mb-6 p-4 bg-red-50/50 border-l-4 border-[#800000] rounded-r-xl">
                      <span className="block text-xs font-bold text-[#800000] uppercase tracking-wider mb-1">
                        Summary Highlights
                      </span>
                      <p className="text-xs text-[#800000]/90 leading-relaxed font-medium">
                        {sec.summary}
                      </p>
                    </div>

                    <div className="text-gray-600 text-sm sm:text-base leading-relaxed space-y-4">
                      {sec.content}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* --- Quick Help / Contact Banner --- */}
        <section className="bg-[#800000] text-white py-16 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Contractual & Legal Service Agreement Questions?</h2>
            <p className="text-red-100 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              For customs clearances, multi-vessel contracts, or complex enterprise logistics agreements, contact our support team.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#800000] hover:bg-red-50 px-8 py-3.5 rounded-md font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Operations Desk
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
