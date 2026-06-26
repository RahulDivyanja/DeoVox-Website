import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import PrintButton from "@/src/components/PrintButton";

export const metadata: Metadata = {
  title: "Privacy Policy | Deo Vox",
  description: "Learn how Deo Vox General Trading FZC LLC collects, uses, and protects your personal information and corporate logistics data.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction & Overview",
      content: (
        <>
          <p className="mb-4">
            Deo Vox General Trading FZC LLC (&quot;Deo Vox&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request quotes, use our general trading services, or engage with our logistics and supply chain systems.
          </p>
          <p>
            Please read this policy carefully. By accessing our site or using our services, you consent to the collection and use of your information in accordance with this Privacy Policy.
          </p>
        </>
      ),
      summary: "We value your privacy and explain here how we handle your personal and trade logistics data."
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: (
        <>
          <p className="mb-4">
            We collect information that you provide directly to us when using our services. This includes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Contact Information:</strong> Full name, company name, corporate email address, phone number, and physical mailing address.</li>
            <li><strong>Logistics & Cargo Data:</strong> Details about your cargo, including shipping origin, destination, cargo dimensions, weight, customs declarations, trade invoices, and licensing requirements.</li>
            <li><strong>Inquiry Details:</strong> Information submitted via our &quot;Get a Quote&quot; form, contact forms, or communication channels.</li>
          </ul>
          <p>
            We also automatically collect standard log data, IP addresses, browser types, page interaction statistics, and cookies to optimize website performance and user experience.
          </p>
        </>
      ),
      summary: "We collect contact details and logistics/cargo specifications to facilitate shipping and quoting."
    },
    {
      id: "use-of-information",
      title: "3. How We Use Your Information",
      content: (
        <>
          <p className="mb-4">
            We use the information we collect to manage and streamline your global supply chain requirements:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To compile, process, and present accurate shipping and sourcing quotes.</li>
            <li>To execute cargo transit, customs clearance, and global freight operations.</li>
            <li>To communicate transaction statuses, cargo tracking updates, and supply chain reports.</li>
            <li>To verify identity and prevent fraudulent activities or unauthorized trade actions.</li>
            <li>To comply with international trade regulations, sanctions screening, and border authority requirements.</li>
          </ul>
        </>
      ),
      summary: "Your data is used to coordinate shipping, calculate prices, verify customs paperwork, and run logistics."
    },
    {
      id: "data-sharing",
      title: "4. Information Sharing & Third-Party Disclosure",
      content: (
        <>
          <p className="mb-4">
            We do not sell or rent your personal or trade details. To execute our international operations, we share data with:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Logistics Partners:</strong> Ocean carriers, air freight providers, warehousing facilities, and local road transport operators.</li>
            <li><strong>Customs Authorities:</strong> National border customs, ports, and regulatory inspection agencies as legally required for import/export clearances.</li>
            <li><strong>Corporate Affiliates:</strong> Partner entities within the Deo Vox network for coordinated multi-leg transit.</li>
            <li><strong>Legal Counsel & Law Enforcement:</strong> Where necessary to prevent fraud, comply with court subpoenas, or adhere to international trade compliance mandates.</li>
          </ul>
        </>
      ),
      summary: "We share shipping details strictly with transport partners and customs authorities to carry out your cargo transit."
    },
    {
      id: "security",
      title: "5. Data Security & Retention",
      content: (
        <>
          <p className="mb-4">
            We implement high-grade physical, administrative, and technological security controls to safeguard your transaction files and customer details. Communications are encrypted in transit via SSL protocols, and access to internal databases is restricted to authorized personnel.
          </p>
          <p>
            We retain data as long as necessary to fulfill trade contracts, settle billing cycles, or comply with local and international financial and maritime auditing rules (typically 5 to 7 years post-transaction).
          </p>
        </>
      ),
      summary: "We utilize industry-standard encryption and security measures. Logs are kept in accordance with international audit laws."
    },
    {
      id: "your-rights",
      title: "6. Your Rights & Contacts",
      content: (
        <>
          <p className="mb-4">
            Depending on your jurisdiction, you have rights regarding your personal information, including accessing, correcting, or requesting the deletion of data we hold.
          </p>
          <p>
            For any privacy inquiries or to exercise your rights, please reach out to us at:
          </p>
          <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
            <p className="font-bold text-gray-900">Deo Vox General Trading FZC LLC</p>
            <p className="text-gray-600 text-sm">SPC Free Zone, Sharjah, United Arab Emirates</p>
            <p className="text-sm">Email: <a href="mailto:deovox2026@gmail.com" className="text-[#800000] hover:underline font-semibold">deovox2026@gmail.com</a></p>
          </div>
        </>
      ),
      summary: "You can request access, correction, or deletion of your records by emailing our compliance team."
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
              Privacy <span className="text-[#800000]">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Last Updated: June 26, 2026. This policy outlines how Deo Vox protects and manages your corporate, trade, and personal information globally.
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
                  <p>Need a copy for your records?</p>
                  <PrintButton label="Print Document" />
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
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Have Questions about our Privacy Policies?</h2>
            <p className="text-red-100 max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              If you require a signed Data Processing Agreement (DPA) or have strict jurisdictional compliance audits, our legal and compliance desk is ready to assist.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-[#800000] hover:bg-red-50 px-8 py-3.5 rounded-md font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Legal Compliance
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
