"use client";

import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function QuoteClient() {
  // State to hold the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    origin: "",
    destination: "",
    freightType: "Ocean Freight",
    weight: "",
    details: "",
  });

  // Security States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Turnstile Ref to programmatic reset
  const turnstileRef = useRef<TurnstileInstance>(null);

  // Check localStorage on component mount to see if they recently submitted
  useEffect(() => {
    const lastSubmitTime = localStorage.getItem("lastQuoteSubmit");
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

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Check CAPTCHA first
    if (!captchaToken) {
      toast.error("Please complete the security check.");
      return;
    }

    // 2. Block submission if currently submitting or in cooldown
    if (isSubmitting || cooldownTime > 0) return;

    setIsSubmitting(true);

    try {
      // 3. Prepare payload with the token for NestJS
      const payload = {
        ...formData,
        captchaToken,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
      const response = await fetch(`${apiUrl}/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit quote request");
      }

      console.log("Quote Request Submitted:", data);
      toast.success(
        "Quote request received. Our team will contact you shortly."
      );

      // Reset form & CAPTCHA token
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        origin: "",
        destination: "",
        freightType: "Ocean Freight",
        weight: "",
        details: "",
      });
      setCaptchaToken(null);
      turnstileRef.current?.reset();

      // Start 60-second cooldown and save to localStorage
      setCooldownTime(60);
      localStorage.setItem("lastQuoteSubmit", Date.now().toString());
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <main className="grow py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Request a Custom Quote
            </h1>
            <p className="text-lg text-gray-600">
              Provide us with the details of your shipment, and our logistics
              experts will craft a tailored solution for your global trade
              needs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-2 w-full bg-[#800000]"></div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-12">
              {/* --- Section 1: Contact Info --- */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
                1. Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
              </div>

              {/* --- Section 2: Shipment Details --- */}
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
                2. Shipment Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label
                    htmlFor="origin"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Origin Country/City *
                  </label>
                  <input
                    type="text"
                    id="origin"
                    name="origin"
                    value={formData.origin}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="e.g., Shanghai, China"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Destination Country/City *
                  </label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="e.g., Colombo, Sri Lanka"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="freightType"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Freight Type
                  </label>
                  <select
                    id="freightType"
                    name="freightType"
                    value={formData.freightType}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 bg-white disabled:opacity-50 disabled:bg-gray-100"
                  >
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Land Transportation">
                      Land Transportation
                    </option>
                    <option value="Customs Brokerage">
                      Customs Brokerage Only
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Estimated Weight/Volume
                  </label>
                  <input
                    type="text"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="e.g., 2000 kg or 2x40ft containers"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 disabled:opacity-50 disabled:bg-gray-100"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={formData.details}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-800 resize-none disabled:opacity-50 disabled:bg-gray-100"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <div className="mb-6 flex justify-center">
                  <Turnstile
                    ref={turnstileRef}
                    siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onSuccess={(token) => setCaptchaToken(token)}
                    onError={() =>
                      toast.error("Security check failed. Please refresh.")
                    }
                    onExpire={() => setCaptchaToken(null)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || cooldownTime > 0 || !captchaToken}
                  className={`w-full text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]
                    ${
                      isSubmitting || cooldownTime > 0 || !captchaToken
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#800000] hover:bg-[#5a0000] hover:shadow-lg"
                    }`}
                >
                  {isSubmitting
                    ? "Processing..."
                    : cooldownTime > 0
                    ? `Please wait ${cooldownTime}s to submit again`
                    : "Request Quote"}
                </button>
                <p className="text-center text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy. Your
                  information is kept strictly confidential.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
