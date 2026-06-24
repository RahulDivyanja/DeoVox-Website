"use client";
import React from 'react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="relative pt-20 pb-32 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Contact Card */}
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Information (Maroon Background) */}
          <div className="lg:w-1/3 bg-[#800000] text-white p-10 lg:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-extrabold mb-8">Get in Touch</h3>
              
              <div className="space-y-8">
                {/* Office Address */}
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-200 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4">
                    <h5 className="font-semibold text-red-100 uppercase tracking-wider text-sm mb-1">Global HQ</h5>
                    <p className="text-white leading-relaxed">SPC Free Zone, Sharjah,<br />United Arab Emirates</p>
                  </div>
                </div>

                {/* Coming Soon: Sri Lanka Office */}
                <div className="flex items-start opacity-75">
                  <svg className="w-6 h-6 text-red-200 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <div className="ml-4">
                    <h5 className="font-semibold text-red-100 uppercase tracking-wider text-sm mb-1">Sri Lanka Office</h5>
                    <p className="text-white text-sm italic">Address details pending...</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-200 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="ml-4">
                    <h5 className="font-semibold text-red-100 uppercase tracking-wider text-sm mb-1">Hours of Operation</h5>
                    <p className="text-white">09:00 am to 06:00 pm<br />Monday - Saturday</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-red-200 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4">
                    <h5 className="font-semibold text-red-100 uppercase tracking-wider text-sm mb-1">Email</h5>
                    <a href="mailto:deovoxgloble23@gmail.com" className="text-white hover:text-red-200 transition-colors">
                      deovoxgloble23@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form & Map (White Background) */}
          <div className="lg:w-2/3 p-10 lg:p-12 flex flex-col justify-between">
            {/* How It Works Section */}
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold text-[#800000] mb-8">How It Works</h3>
              
              <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-6 sm:left-7 top-6 sm:top-7 bottom-6 sm:bottom-7 w-0.5 bg-gray-200"></div>

                <div className="space-y-10">
                  {/* Step 1 */}
                  <div className="flex items-start gap-6 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 pt-1.5 sm:pt-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">1. Submit Requirements</h4>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 leading-relaxed">Tell us about your cargo and destination.</p>
                      <Link
                        href="/quote"
                        className="inline-block bg-[#4a0000] hover:bg-[#300000] text-white px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-6 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                      </svg>
                    </div>
                    <div className="flex-1 pt-1.5 sm:pt-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">2. Expert Route & Cost Analysis</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">Our specialists design the most efficient logistics path and provide transparent pricing.</p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-6 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-gray-300 bg-white flex items-center justify-center shrink-0 z-10 shadow-sm">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#800000]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div className="flex-1 pt-1.5 sm:pt-2">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">3. Global Freight Execution</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">We manage the entire journey from origin to destination with real-time tracking.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map iframe Embed (Sharjah UAE Focus) */}
            <div className="w-full h-64 bg-gray-200 rounded-md overflow-hidden shadow-inner border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.0878572111!2d55.35760882775618!3d25.322300055455952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f8df928a5%3A0x5282279a374fcca5!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Deo Vox Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}