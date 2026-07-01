import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-37.5 md:min-h-37.5 flex items-center justify-center">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/assets/images/hero-port.jpg"
          alt="Deo Vox Global Trade Operations"
          fill
          className="object-cover object-center"
          priority={true} 
        />
        {/* Deep maroon/dark gradient overlay to match other pages */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-[#450404ff]/50"></div>
      </div>

      {/* Center Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center px-4 sm:px-6 lg:px-8">

        {/* Small Tagline */}
        <span className="inline-block py-1.5 px-4 rounded-full bg-orange-100/30 text-white border border-white/20 text-xs font-bold tracking-widest uppercase mb-5">
          Global Trade Excellence
        </span>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-tight mb-4 md:mb-6">
          Building the most resilient multi-sectoral trade system
        </h1>

        {/* Sub-heading / Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
          Positioning Deo Vox as an indispensable engine of the international supply chain and Sri Lanka&apos;s main trade representative to the world.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-5">
          <Link
            href="/quote"
            className="w-full sm:w-auto bg-[#800000] hover:bg-[#5a0000] transition-all duration-300 ease-in-out hover:-translate-y-1 text-white px-8 py-3.5 rounded-md font-semibold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#800000] focus:ring-offset-transparent"
          >
            Get a Quote
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 transition-all duration-300 ease-in-out hover:-translate-y-1 text-white border border-white/30 px-8 py-3.5 rounded-md font-semibold shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/30 focus:ring-offset-transparent"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}