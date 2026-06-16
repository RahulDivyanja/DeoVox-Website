"use client";
import React from 'react';

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
            {/* Contact Form */}
            <form className="mb-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input type="text" id="name" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input type="email" id="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 resize-none" required></textarea>
              </div>
              <button type="submit" className="bg-[#800000] hover:bg-[#5a0000] text-white px-8 py-3 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]">
                Send Message
              </button>
            </form>

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