"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="shrink-0 flex flex-row items-center gap-2 cursor-pointer">
             <Image src="/assets/images/DeoVox-icon.jpeg" alt="Deo Vox Logo" width={40} height={40} className="rounded-sm" />
            <span className="font-bold text-xl text-gray-900 tracking-tight">Deo Vox</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 md:text-sm lg:text-lg font-medium">
            <Link href="/" className={`${isActive('/') ? 'text-[#800000] border-b-2 border-[#800000]' : 'text-gray-600 hover:text-[#800000]'} px-1 py-2 transition-all duration-200`}>
              Home
            </Link>
            <Link href="/about" className={`${isActive('/about') ? 'text-[#800000] border-b-2 border-[#800000]' : 'text-gray-600 hover:text-[#800000] hover:border-b-2 hover:border-[#800000]/50'} px-1 py-2 transition-all duration-200`}>
              About Us
            </Link>
            <Link href="/services" className={`${isActive('/services') ? 'text-[#800000] border-b-2 border-[#800000]' : 'text-gray-600 hover:text-[#800000] hover:border-b-2 hover:border-[#800000]/50'} px-1 py-2 transition-all duration-200`}>
              Services
            </Link>
            <Link href="/careers" className={`${isActive('/careers') ? 'text-[#800000] border-b-2 border-[#800000]' : 'text-gray-600 hover:text-[#800000] hover:border-b-2 hover:border-[#800000]/50'} px-1 py-2 transition-all duration-200`}>
              Careers
            </Link>
            <Link href="/contact" className={`${isActive('/contact') ? 'text-[#800000] border-b-2 border-[#800000]' : 'text-gray-600 hover:text-[#800000] hover:border-b-2 hover:border-[#800000]/50'} px-1 py-2 transition-all duration-200`}>
              Contact
            </Link>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/quote" 
              className="bg-[#800000] hover:bg-[#5a0000] md:text-sm lg:text-lg text-white px-6 py-2.5 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-[#800000] focus:outline-none focus:ring-2 focus:ring-[#800000] rounded-md p-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close (X) Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger (Three Lines) Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link 
              href="/" 
              onClick={toggleMobileMenu}
              className={`${isActive('/') ? 'text-[#800000] bg-red-50' : 'text-gray-600 hover:text-[#800000] hover:bg-gray-50'} block px-3 py-3 rounded-md font-medium transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={toggleMobileMenu}
              className={`${isActive('/about') ? 'text-[#800000] bg-red-50' : 'text-gray-600 hover:text-[#800000] hover:bg-gray-50'} block px-3 py-3 rounded-md font-medium transition-colors`}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              onClick={toggleMobileMenu}
              className={`${isActive('/services') ? 'text-[#800000] bg-red-50' : 'text-gray-600 hover:text-[#800000] hover:bg-gray-50'} block px-3 py-3 rounded-md font-medium transition-colors`}
            >
              Services
            </Link>
            <Link 
              href="/careers" 
              onClick={toggleMobileMenu}
              className={`${isActive('/careers') ? 'text-[#800000] bg-red-50' : 'text-gray-600 hover:text-[#800000] hover:bg-gray-50'} block px-3 py-3 rounded-md font-medium transition-colors`}
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              onClick={toggleMobileMenu}
              className={`${isActive('/contact') ? 'text-[#800000] bg-red-50' : 'text-gray-600 hover:text-[#800000] hover:bg-gray-50'} block px-3 py-3 rounded-md font-medium transition-colors`}
            >
              Contact
            </Link>
            
            {/* Mobile CTA Button */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link 
                href="/quote" 
                onClick={toggleMobileMenu}
                className="w-full text-center block bg-[#800000] hover:bg-[#5a0000] text-white px-6 py-3 rounded-md font-medium transition-colors shadow-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}