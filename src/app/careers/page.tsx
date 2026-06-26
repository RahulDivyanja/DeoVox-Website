"use client";
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    areaOfInterest: "Supply Chain Operations",
    resumeUrl: "",
    motivation: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitted talent interest:", formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <main className="grow">
        {/* --- Hero Section --- */}
        <section className="relative w-full h-[65vh] min-h-[500px] flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/careers-hero.png')",
            }}
          >
            {/* Deep maroon/dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-[#4a0000]/40"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Join Our Global Team
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              At Deo Vox, we bridge the world through logistics and precision.
              We&apos;re looking for thinkers, doers, and innovators to help us
              redefine the global supply chain.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#opportunities"
                className="bg-[#800000] hover:bg-[#5a0000] text-white px-8 py-3.5 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#800000]"
              >
                View Openings
              </a>
              <a
                href="#culture"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3.5 rounded-md font-semibold transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none"
              >
                Our Culture
              </a>
            </div>
          </div>
        </section>

        {/* --- Why Work With Us Section (Culture) --- */}
        <section id="culture" className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold tracking-widest text-[#800000] uppercase mb-2 block">
                Work Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                Why Work With Us
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We foster an environment of growth, innovation, and global
                perspective. Our team is our greatest asset in achieving
                operational excellence.
              </p>
            </div>

            {/* Three Core Culture Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Card 1 */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#800000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Global Reach
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Work on logistics challenges that span continents and impact
                  global trade directly from our international hubs.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#800000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Career Growth
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We invest in your professional development with continuous
                  training programs and clear paths for advancement.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#800000]/10 rounded-xl flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#800000]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Inclusive Culture
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  Join a diverse, collaborative workplace where every voice is
                  heard and unique perspectives are celebrated.
                </p>
              </div>
            </div>

            {/* --- Image Grid (Matching screenshot) --- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Left tall card */}
              <div className="md:col-span-6 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/assets/images/careers-collab.png')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold text-red-200 uppercase tracking-widest block mb-1">
                    Collaboration
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold text-white">
                    Collaborative Innovation
                  </h4>
                </div>
              </div>

              {/* Middle stacked cards */}
              <div className="md:col-span-3 flex flex-col gap-6">
                {/* Middle top */}
                <div className="relative h-[213px] rounded-2xl overflow-hidden shadow-md group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('/assets/images/careers-woman.png')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Middle bottom */}
                <div className="relative h-[213px] rounded-2xl overflow-hidden shadow-md group">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "url('/assets/images/careers-meeting.png')",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>

              {/* Right tall card */}
              <div className="md:col-span-3 relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-md group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: "url('/assets/images/careers-laptop.png')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Open Positions / Empty State Section --- */}
        <section
          id="opportunities"
          className="py-20 bg-gray-50 border-y border-gray-100"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-12">
              Find your place in the global logistics revolution.
            </p>

            {/* Empty State Card */}
            <div className="bg-white rounded-2xl border border-gray-200/80 p-10 md:p-12 shadow-sm max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-[#800000]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-[#800000]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Future Opportunities
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
                We are currently fully staffed and not actively recruiting for
                specific roles. However, Deo Vox is always looking to connect
                with exceptional talent in global logistics, technology, and
                commercial operations as we scale.
              </p>
              <div className="mt-8">
                <a
                  href="#talent-network"
                  className="inline-block bg-[#800000] hover:bg-[#5a0000] text-white px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Join Talent Pool
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- Talent Network Application Section --- */}
        <section
          id="talent-network"
          className="py-20 lg:py-28 bg-[#0b1d33] text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column: Expectation and Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                  Join Our Talent Network
                </h2>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Ready to contribute to a world-class logistics leader?
                  Register your details below to become part of our talent
                  pipeline.
                </p>

                <div className="space-y-6">
                  {/* Expectation 1 */}
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#800000] flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">
                        Fast registration process
                      </h4>
                      <p className="text-blue-100 text-sm mt-0.5">
                        Quickly complete your profile in under 2 minutes.
                      </p>
                    </div>
                  </div>

                  {/* Expectation 2 */}
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#800000] flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">
                        Direct leadership connection
                      </h4>
                      <p className="text-blue-100 text-sm mt-0.5">
                        Your profile goes directly to our department heads.
                      </p>
                    </div>
                  </div>

                  {/* Expectation 3 */}
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-[#800000] flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-white">
                        Continuous Opportunity Review
                      </h4>
                      <p className="text-blue-100 text-sm mt-0.5">
                        We review all submissions quarterly and will reach out
                        directly when a role matching your profile opens up.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Application Form */}
              <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-800 shadow-xl border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You have joined our talent pool. We will keep your profile
                      on file and review it quarterly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-[#800000] hover:text-[#5a0000] font-semibold text-sm underline focus:outline-none"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50/50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50/50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="areaOfInterest"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Area of Interest
                      </label>
                      <select
                        id="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            areaOfInterest: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50/50 appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundSize: "1.25rem",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <option value="Supply Chain Operations">
                          Supply Chain Operations
                        </option>
                        <option value="Commercial/Sales">
                          Commercial/Sales
                        </option>
                        <option value="Technology">Technology</option>
                        <option value="Administration">Administration</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="resumeUrl"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Resume URL (LinkedIn or Drive)
                      </label>
                      <input
                        type="url"
                        id="resumeUrl"
                        value={formData.resumeUrl}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            resumeUrl: e.target.value,
                          })
                        }
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50/50"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="motivation"
                        className="block text-sm font-semibold text-gray-700 mb-1"
                      >
                        Briefly describe your motivation
                      </label>
                      <textarea
                        id="motivation"
                        rows={4}
                        value={formData.motivation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            motivation: e.target.value,
                          })
                        }
                        placeholder="Tell us why you want to join Deo Vox..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#800000] focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50/50 resize-none"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#800000] hover:bg-[#5a0000] text-white py-3.5 rounded-lg font-bold transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]"
                    >
                      Join Talent Pool
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
