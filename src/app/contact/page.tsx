"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Freight Forwarding',
    message: ''
  });

  const [activeMap, setActiveMap] = useState<'sharjah' | 'colombo'>('sharjah');

  // Security States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Turnstile Ref to programmatic reset
  const turnstileRef = useRef<TurnstileInstance>(null);

  // Check localStorage on mount for cooldown state
  useEffect(() => {
    const lastSubmitTime = localStorage.getItem("lastContactSubmit");
    const cooldownDuration = 60000; // 60 seconds

    if (lastSubmitTime) {
      const timePassed = Date.now() - parseInt(lastSubmitTime);
      const remaining = cooldownDuration - timePassed;

      if (remaining > 0) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCooldownTime(Math.ceil(remaining / 1000));
      }
    }
  }, []);

  // Manage the cooldown interval
  useEffect(() => {
    if (cooldownTime <= 0) return;

    const timer = setInterval(() => {
      setCooldownTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [cooldownTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      toast.error("Please complete the security check.");
      return;
    }

    if (isSubmitting || cooldownTime > 0) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        captchaToken,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit message");
      }

      console.log("Contact message submitted:", data);
      toast.success("Message sent successfully! We will get in touch with you shortly.");

      // Reset form & CAPTCHA
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Freight Forwarding',
        message: ''
      });
      setCaptchaToken(null);
      turnstileRef.current?.reset();

      // Cooldown setup
      setCooldownTime(60);
      localStorage.setItem("lastContactSubmit", Date.now().toString());
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      toast.error(errorMessage);
      setCaptchaToken(null);
      turnstileRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow">
        {/* --- Hero / Header Section --- */}
        <section className="bg-slate-50/50 py-16 md:py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
              Global Reach, <span className="text-[#800000]">Personal Touch.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
              Connect with our logistics experts across the globe. From Sharjah to Sri Lanka, we are here to streamline your supply chain with precision and reliability.
            </p>
          </div>
        </section>

        {/* --- Main Contact Grid Section --- */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Left Column: Form Card */}
              <div className="lg:col-span-7 bg-white p-8 md:p-10 border border-gray-100 rounded-2xl shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-sm text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 business hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        disabled={isSubmitting}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none text-sm text-gray-800 transition-all placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        disabled={isSubmitting}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none text-sm text-gray-800 transition-all placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        disabled={isSubmitting}
                        placeholder="Company Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none text-sm text-gray-800 transition-all placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Service Interest</label>
                      <div className="relative">
                        <select
                          id="service"
                          disabled={isSubmitting}
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none text-sm text-gray-800 transition-all appearance-none cursor-pointer disabled:opacity-50 disabled:bg-gray-100"
                        >
                          <option>Freight Forwarding</option>
                          <option>Product Sourcing</option>
                          <option>Customs Clearance</option>
                          <option>General Trading</option>
                          <option>Supply Chain Consultancy</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      placeholder="How can we help with your global logistics needs?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none text-sm text-gray-800 transition-all resize-none placeholder:text-gray-400 disabled:opacity-50 disabled:bg-gray-100"
                    ></textarea>
                  </div>

                  {/* Cloudflare Turnstile CAPTCHA */}
                  <div className="mb-6 flex justify-start">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                      onSuccess={(token) => setCaptchaToken(token)}
                      onError={() => toast.error("Security check failed. Please refresh.")}
                      onExpire={() => setCaptchaToken(null)}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || cooldownTime > 0 || !captchaToken}
                    className={`inline-flex items-center justify-center gap-2 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]
                      ${isSubmitting || cooldownTime > 0 || !captchaToken
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#800000] hover:bg-[#5a0000] hover:shadow-md"
                      }`}
                  >
                    {isSubmitting
                      ? "Sending..."
                      : cooldownTime > 0
                        ? `Please wait ${cooldownTime}s`
                        : "Send Inquiry"}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Right Column: Address Cards & Hours */}
              <div className="lg:col-span-5 flex flex-col gap-6 w-full">

                {/* Sharjah headquarters card */}
                <div className="bg-[#eff5fd] p-6 rounded-2xl border border-blue-50 shadow-sm flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-[#800000] shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-0.5">Sharjah, UAE</h3>
                    <span className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Headquarters</span>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      SAIF Zone, P.O. Box 123456,<br />
                      Sharjah, United Arab Emirates
                    </p>
                    <div className="space-y-1 text-xs">
                      <a href="tel:+94 70 167 9437" className="block text-gray-700 font-semibold hover:text-[#800000] transition-colors">&bull; +94 70 167 9437</a>
                      <a href="mailto:deovox2026@gmail.com" className="block text-gray-700 font-semibold hover:text-[#800000] transition-colors">&bull; devox2026@gmail.com</a>
                    </div>
                  </div>
                </div>

                {/* Colombo branch card */}
                <div className="bg-[#eff5fd]/60 p-6 rounded-2xl border border-blue-50 shadow-sm flex gap-4 opacity-75">
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-blue-100 flex items-center justify-center text-gray-400 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-0.5">Colombo, Sri Lanka</h3>
                    <span className="inline-block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Regional Hub</span>
                    <p className="text-sm text-gray-500 italic leading-relaxed mb-1">
                      Address details pending...
                    </p>
                    <p className="text-xs text-gray-400">
                      Coming Soon
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-[#4a0000] text-white p-8 rounded-2xl shadow-sm border border-red-950 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-bold">Business Hours</h3>
                  </div>

                  <div className="space-y-3 text-sm pt-2">
                    <div className="flex justify-between border-b border-red-900 pb-1.5">
                      <span className="text-red-100 font-medium">Mon - Fri</span>
                      <span className="font-bold">08:00 AM - 06:00 PM</span>
                    </div>
                    <div className="flex justify-between border-b border-red-900 pb-1.5">
                      <span className="text-red-100 font-medium">Saturday</span>
                      <span className="font-bold">09:00 AM - 01:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-red-100 font-medium">Sunday</span>
                      <span className="text-red-200 font-bold italic">Closed</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-red-200/80 leading-relaxed mt-4">
                    Operating across multiple time zones. For urgent logistics inquiries, please use the emergency hotline in your service contract.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* --- Global Operations Map Section --- */}
        <section className="py-16 bg-gray-50 border-t border-b border-gray-100 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">Our Operations Maps</h3>

            <div className="flex flex-col sm:inline-flex sm:flex-row bg-white p-1.5 rounded-xl sm:rounded-full shadow-sm border border-gray-200 mb-8 w-full sm:w-auto gap-2 sm:gap-0">
              <button
                onClick={() => setActiveMap('sharjah')}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-lg sm:rounded-full font-bold text-sm transition-all duration-200 ${activeMap === 'sharjah'
                  ? 'bg-[#800000] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#800000]'
                  }`}
              >
                Sharjah, UAE (HQ)
              </button>
              <button
                onClick={() => setActiveMap('colombo')}
                className={`w-full sm:w-auto px-6 py-2.5 rounded-lg sm:rounded-full font-bold text-sm transition-all duration-200 ${activeMap === 'colombo'
                  ? 'bg-[#800000] text-white shadow-sm'
                  : 'text-gray-600 hover:text-[#800000]'
                  }`}
              >
                Colombo, Sri Lanka (Hub)
              </button>
            </div>

            {/* Google Maps Embed Container */}
            <div className="w-full h-[450px] bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200/50">
              {activeMap === 'sharjah' ? (
                <iframe
                  src="https://www.google.com/maps?q=25.3199091,55.4585985&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sharjah HQ Location Map"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.672808051759!2d79.84156157580665!3d6.929853918342426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25925a6f2bd7f%3A0x6333c5e88880dd85!2sWorld%20Trade%20Center!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Colombo Hub Location Map"
                ></iframe>
              )}
            </div>
          </div>
        </section>

        {/* --- Section: Ready to Optimize Your Supply Chain CTA --- */}
        <section className="py-20 bg-gray-50 border-b border-gray-100 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10">
              Ready to Optimize Your Supply Chain?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {/* CTA Item 1 */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#800000] shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">24/7 Support</h4>
                  <p className="text-xs text-gray-500">Round-the-clock monitoring for your shipments.</p>
                </div>
              </div>

              {/* CTA Item 2 */}
              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-[#800000] shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1">Real-time Tracking</h4>
                  <p className="text-xs text-gray-500">Full visibility through our digital portal.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
