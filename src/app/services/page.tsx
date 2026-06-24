"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function ServicesPage() {
  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow">
        {/* --- Hero Section (Preserved Background & Overlay, Updated Text) --- */}
        <section className="relative w-full h-[50vh] min-h-[400px] flex items-center px-4 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/global-logistics-international-shipping-network.jpg')",
              backgroundPosition: 'center 30%'
            }}
          >
            {/* Deep maroon/dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000033]/95 to-gray-700/80"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
            <span className="inline-block py-1.5 px-4 rounded-full bg-red-500/20 text-white border border-red-500/30 text-xs font-bold tracking-widest uppercase mb-4">
              OUR SERVICES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
              Comprehensive Solutions for Global Trade
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Leveraging world-class logistics expertise and a robust global network to streamline your supply chain and accelerate business growth across international borders.
            </p>
          </div>
        </section>

        {/* --- Quick Jump Navigation Tabs --- */}
        <section className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              <button
                onClick={() => scrollToSection('import-export')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#800000] hover:text-[#800000] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <span className="truncate">Import & Export</span>
              </button>

              <button
                onClick={() => scrollToSection('product-sourcing')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#800000] hover:text-[#800000] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="truncate">Product Sourcing</span>
              </button>

              <button
                onClick={() => scrollToSection('general-trading')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#800000] hover:text-[#800000] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="truncate">General Trading</span>
              </button>

              <button
                onClick={() => scrollToSection('consultancy')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#800000] hover:text-[#800000] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">Consultancy</span>
              </button>

              <button
                onClick={() => scrollToSection('supply-chain')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#800000] hover:text-[#800000] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="truncate">Supply Chain</span>
              </button>

              <button
                onClick={() => scrollToSection('logistics')}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 hover:border-[#800000] hover:text-[#800000] hover:shadow-sm transition-all duration-200"
              >
                <svg className="w-5 h-5 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                <span className="truncate">Logistics</span>
              </button>
            </div>
          </div>
        </section>

        {/* --- Section A: Import & Export Services --- */}
        <section id="import-export" className="py-20 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Left */}
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/container-ship-sea.png"
                  alt="Import & Export Services"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Content Right */}
              <div>
                <div className="w-12 h-1 bg-[#800000] mb-4 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Import & Export Services
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  We facilitate seamless international trade by managing the complexities of customs, compliance, and documentation. Our end-to-end solutions ensure your cargo reaches its destination safely and on schedule.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-[#800000]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">Full customs brokerage and regulatory compliance management.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-[#800000]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">Multimodal transport options (Sea, Air, and Land).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-[#800000]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">Comprehensive cargo insurance and risk mitigation strategies.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Section B: Global Product Sourcing --- */}
        <section id="product-sourcing" className="py-20 lg:py-24 bg-gray-50/50 scroll-mt-24 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Left */}
              <div className="order-2 lg:order-1">
                <div className="w-12 h-1 bg-[#800000] mb-4 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Global Product Sourcing
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  Discover high-quality manufacturers and suppliers through our verified global network. We mitigate sourcing risks by conducting thorough factory audits and quality inspections at the source.
                </p>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-[#800000]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">Direct factory sourcing for competitive pricing and direct oversight.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-[#800000]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">Rigorous quality control protocols and pre-shipment inspections.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="shrink-0 mt-1 mr-3 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-[#800000]">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm md:text-base font-medium">Ethical sourcing and supplier sustainability compliance checks.</span>
                  </li>
                </ul>
              </div>

              {/* Image Right */}
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-md order-1 lg:order-2">
                <Image
                  src="/assets/images/warehouse.png"
                  alt="Global Product Sourcing"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Section C: Trade Consultancy & General Trading Cards --- */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Card 1: Trade Consultancy */}
              <div id="consultancy" className="bg-[#0b1d33] rounded-2xl p-8 md:p-10 text-white flex flex-col justify-between shadow-lg scroll-mt-24">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Trade Consultancy</h3>
                  <p className="text-gray-300 leading-relaxed mb-8 text-sm md:text-base">
                    Navigating the complexities of international markets requires expert insight. Our consultants provide strategic guidance on market entry, tariffs, and trade agreements to optimize your global footprint.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pt-6 border-t border-white/10">
                    <div>
                      <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">MARKET ANALYSIS</h4>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">Clear-cut insights for custom market strategies.</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">POLICY NAVIGATION</h4>
                      <p className="text-xs md:text-sm text-gray-300 leading-relaxed">Expert guidance on changing trade regulations.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-white hover:bg-gray-100 text-[#0b1d33] py-3 px-8 rounded-full font-bold text-sm shadow-sm transition-all duration-200"
                  >
                    Speak to an Expert
                  </Link>
                </div>
              </div>

              {/* Card 2: General Trading */}
              <div id="general-trading" className="bg-[#e3ecfc] rounded-2xl p-8 md:p-10 text-gray-900 flex flex-col justify-between shadow-sm border border-blue-100 scroll-mt-24">
                <div>
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0b1d33]">General Trading</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                    As a licensed general trading entity, Deo Vox bridges the gap between global demand and local supply, managing a diverse portfolio of industrial and consumer commodities.
                  </p>

                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-inner">
                    <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Key Commodity Areas</h4>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed font-semibold">
                      Industrial Raw Materials &bull; Construction Equipment &bull; FMCG &bull; Specialized Machinery
                    </p>
                  </div>
                </div>
                {/* Visual height balancer to align with the first card on larger screens */}
                <div className="hidden lg:block h-[52px]"></div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Section D: Integrated Supply Chain Solutions --- */}
        <section id="supply-chain" className="py-20 lg:py-24 bg-gray-50/50 border-t border-b border-gray-100 scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Image Left */}
              <div className="relative h-[300px] sm:h-[400px] w-full rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/assets/images/supply-chain-monitor.png"
                  alt="Integrated Supply Chain Solutions"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Content Right */}
              <div>
                <div className="w-12 h-1 bg-[#800000] mb-4 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  Integrated Supply Chain Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8 text-base">
                  Beyond just moving cargo, we engineer supply chains. From inventory optimization to warehousing and last-mile delivery, we provide the visibility and control needed for operational excellence.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] mr-4 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">Real-Time Visibility</h4>
                      <p className="text-sm text-gray-600">Advanced tracking systems that provide granular visibility across every node of your supply chain.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] mr-4 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">Warehousing & Distribution</h4>
                      <p className="text-sm text-gray-600">Strategically located facilities equipped for efficient storage, cross-docking, and distribution.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] mr-4 mt-0.5 shadow-sm">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">Process Optimization</h4>
                      <p className="text-sm text-gray-600">Analyzing data to identify bottlenecks and implement lean logistics strategies that reduce costs.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- Section E: Logistics Management --- */}
        <section id="logistics" className="py-20 lg:py-24 bg-white scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-[#eff4f9] rounded-2xl p-8 md:p-12 overflow-hidden shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Left Side Info */}
              <div className="max-w-2xl relative z-10">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">Logistics Management</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  We serve as your outsourced logistics department, managing every touchpoint from the point of origin to the final destination. Our expert team handles carrier negotiations, route planning, and problem-solving so you can focus on your core business.
                </p>

                {/* Stats */}
                <div className="flex flex-row gap-12 mb-8">
                  <div>
                    <span className="text-4xl md:text-5xl font-black text-[#800000] block mb-1">100%</span>
                    <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">REAL-TIME TRACKING</span>
                  </div>
                  <div>
                    <span className="text-4xl md:text-5xl font-black text-[#800000] block mb-1">24/7</span>
                    <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">OPERATIONAL SUPPORT</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#800000] hover:bg-[#5a0000] text-white px-8 py-3.5 rounded-md font-bold text-sm text-center transition-colors shadow-sm"
                  >
                    Schedule a Review
                  </Link>
                  <button
                    onClick={() => alert("Services PDF download placeholder")}
                    className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3.5 rounded-md font-bold text-sm text-center transition-colors shadow-sm"
                  >
                    Download Services PDF
                  </button>
                </div>
              </div>

              {/* Right Side: Globe Outline Watermark */}
              <div className="absolute right-0 bottom-[-20%] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-10 opacity-10 pointer-events-none">
                <svg className="w-72 h-72 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

            </div>
          </div>
        </section>

        {/* --- Footer CTA Section --- */}
        <section className="bg-[#4a0000] py-20 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Optimize Your Logistics?
            </h2>
            <p className="text-lg text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with our trade experts to identify efficiencies and unlock new global opportunities for your business.
            </p>
            <div className="flex justify-center">
              <Link
                href="/quote"
                className="bg-white text-[#4a0000] px-10 py-4 rounded-md font-bold text-lg transition-all shadow-lg hover:bg-gray-50 hover:shadow-xl inline-flex items-center gap-2"
              >
                Request a Consultation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
