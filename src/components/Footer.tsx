"use client";
import React from "react";
import Link from "next/link";

interface FooterProps {
  overlap?: boolean;
}

export default function Footer({ overlap }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`bg-[#f0f4f8] pb-10 relative z-0 ${overlap ? "pt-32 -mt-24" : "pt-16 mt-0"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <h4 className="font-bold text-2xl text-gray-900 mb-4 tracking-tight">
              Deo Vox
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed pr-4">
              A world-class leader in global trading and supply chain management
              solutions, connecting markets with unwavering precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold text-gray-900 uppercase text-sm tracking-wider mb-4">
              Quick Links
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-[#800000] text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#800000] text-sm transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#800000] text-sm transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-[#800000] text-sm transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-gray-900 uppercase text-sm tracking-wider mb-4">
              Legal
            </h5>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-[#800000] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-[#800000] text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Connect */}
          <div>
            <h5 className="font-bold text-gray-900 uppercase text-sm tracking-wider mb-4">
              Connect
            </h5>
            <div className="flex space-x-4">
              {/* LinkedIn Placeholder */}
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-[#800000] hover:text-white transition-all shadow-sm"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Deo Vox General Trading FZC LLC. All Rights
            Reserved.
          </p>
          <p className="text-gray-400 text-xs">
            Designed & Developed by{" "}
            <Link
              href="https://yasirurahul.me"
              className="text-gray-400 hover:text-[#800000] transition-colors"
            >
              Yasiru Rahul
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
