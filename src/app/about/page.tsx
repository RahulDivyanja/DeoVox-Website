import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />

            <main className="grow">

                {/* --- Hero Section --- */}
                <section className="relative w-full h-[50vh] min-h-[400px] flex items-center px-4 sm:px-6 lg:px-8">
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/assets/images/building-hero.png')" }} // Add a modern building/glass facade image here
                    >
                        {/* Deep maroon/dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#03050b]/90 to-gray-900/80"></div>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl">
                            Pioneering Global Trade with Precision
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
                            Unwavering reliability in logistics and supply chain management for the modern world.
                        </p>
                    </div>
                </section>

                {/* --- Our Story Section --- */}
                <section id="about" className="py-20 lg:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Text Column */}
                            <div>
                                <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 block">
                                    Legacy & Excellence
                                </span>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
                                    Our Story
                                </h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed">
                                    <p>
                                        Founded on the principles of reliability and precision, Deo Vox General Trading FZC LLC was established to bridge the gap between emerging markets and international trade hubs. Our journey began with a single vision: to deliver seamless, integrated logistics solutions.
                                    </p>
                                    <p>
                                        We navigate the complexities of international trade, building a network that spans continents. Today, our focus extends to optimizing major shipping lanes and logistics arteries, powered by advanced technology and a deep understanding of global market dynamics.
                                    </p>
                                </div>
                            </div>

                            {/* Bento Box Image Grid (Updated for Trust) */}
                            <div className="grid grid-cols-2 gap-4">
                                {/* Top Left: Image */}
                                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-md">
                                    {/* Replace with an image of a glass globe on a desk */}
                                    <div className="absolute inset-0 bg-gray-200" style={{ backgroundImage: "url('/assets/images/globe-desk.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                </div>

                                {/* Top Right: Trust Stat (Replaced 15k Containers) */}
                                <div className="bg-[#800000] rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg transform transition-transform hover:scale-105">
                                    <span className="text-3xl md:text-4xl font-black text-white mb-2">100%</span>
                                    <span className="text-sm md:text-base font-semibold text-red-100">Trade Compliance &<br />Quality Assurance</span>
                                </div>

                                {/* Bottom Left: Capability Stat (Replaced 50+ Countries) */}
                                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm transform transition-transform hover:scale-105">
                                    <svg className="w-8 h-8 text-[#800000] mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm md:text-base font-bold text-gray-800">Global Market<br />Access Strategy</span>
                                </div>

                                {/* Bottom Right: Image */}
                                <div className="relative h-48 md:h-56 rounded-2xl overflow-hidden shadow-md">
                                    {/* Replace with an image of a cargo ship at sunset */}
                                    <div className="absolute inset-0 bg-gray-200" style={{ backgroundImage: "url('/assets/images/ship-sunset.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- Mission & Vision Section --- */}
                <section className="py-20 bg-gray-50 border-y border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

                            {/* Mission Card */}
                            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#800000] rounded-lg flex items-center justify-center text-white mb-6 shadow-md">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To provide seamless, high-velocity trading and logistics solutions that empower businesses to scale globally with absolute confidence in their supply chain integrity.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#800000] rounded-lg flex items-center justify-center text-white mb-6 shadow-md">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    To be the global benchmark for reliability in general trading, setting the standard for operational excellence and innovative logistics through sustainable practices.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="bg-[#800000] py-24 text-center px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Ready to Globalize Your Reach?
                        </h2>
                        <p className="text-lg md:text-xl text-red-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join forces with a partner that values precision and reliability as much as you do. Let&apos;s build your supply chain&apos;s future together.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto bg-white text-[#800000] px-8 py-3.5 rounded-md font-bold transition-all shadow-md hover:bg-gray-50 focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-[#800000]"
                            >
                                Contact Our Experts
                            </Link>
                            <Link
                                href="/services"
                                className="w-full sm:w-auto bg-transparent border-2 border-white/80 text-white hover:bg-white/10 px-8 py-3.5 rounded-md font-bold transition-all focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-[#800000]"
                            >
                                Our Services
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}