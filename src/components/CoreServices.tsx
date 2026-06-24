"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { services } from '../data/services';

export default function CoreServices() {
  // 1. Create a reference to the DOM element we want to observe
  const sloganRef = useRef<HTMLDivElement>(null);
  // 2. Create state to track if the element is visible on screen
  const [isSloganVisible, setIsSloganVisible] = useState(false);

  useEffect(() => {
    // 3. Set up the Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element enters the viewport, set state to true
        if (entry.isIntersecting) {
          setIsSloganVisible(true);
          // Stop observing once it's visible so it only animates once
          if (sloganRef.current) observer.unobserve(sloganRef.current);
        }
      },
      { 
        threshold: 0.2 // Trigger when 20% of the element is visible
      } 
    );

    if (sloganRef.current) {
      observer.observe(sloganRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sloganRef.current) {
        observer.unobserve(sloganRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="bg-gray-50 pt-16 pb-24 overflow-hidden">
      
      {/* Slogan Banner with Animation applied */}
      <div 
        ref={sloganRef}
        className={`text-center mb-20 px-4 transition-all duration-1000 ease-out transform ${
          isSloganVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#800000] mb-4 tracking-wide">
          World‑class standards. Worldwide reach.
        </h2>
        {/* Decorative Underline (Animates slightly after the text) */}
        <div 
          className={`h-1 bg-[#800000] mx-auto rounded-full transition-all duration-1000 delay-300 ease-out ${
            isSloganVisible ? 'w-32 opacity-50' : 'w-0 opacity-0'
          }`}
        ></div>
      </div>

      {/* Services Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive logistics and trading solutions tailored for global scale and local precision.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-red-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#800000] group-hover:text-white transition-colors duration-300">
                {/* Clone the SVG to override text color on hover */}
                {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#800000] group-hover:text-white transition-colors duration-300" })}
              </div>
              
              {/* Content */}
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-6 grow leading-relaxed">
                {service.description}
              </p>
              
              {/* Learn More Link */}
              <div className="mt-auto pt-4 border-t border-gray-50">
                <Link 
                  href={`#${service.title.toLowerCase().replace(/ /g, '-')}`} 
                  className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-[#800000] transition-colors"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}