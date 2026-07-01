import React from 'react';

export default function WhyDeoVox() {
  return (
    <section className="bg-[#eceeef] py-20 overflow-hidden relative">
      
      {/* Optional: Subtle background decorative element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Text & Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2c3e50] mb-6">
              Why Deo Vox?
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Building the most resilient multi-sectoral trade system in the region, positioning Deo Vox as an indispensable engine of the international supply chain.
            </p>

            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-[#800000]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Expertise</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dominating national economy through localized intelligence and global standards.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start">
                <div className="shrink-0 mt-1">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-[#800000]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Operational Agility</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rapid response systems to navigate the dynamic complexities of international freight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Image & Badge */}
          <div className="relative mt-10 lg:mt-0">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Note: Make sure to add a suitable dashboard/logistics image to your assets folder */}
              <div 
                className="w-full h-75 sm:h-100 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/global-logistics-international-shipping-network.jpg')" }}
              >
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 bg-[#1a252f] opacity-20"></div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-[#800000]/90 text-white p-6 rounded-xl shadow-xl border-4 border-white transform transition-transform hover:scale-105">
              <div className="text-3xl sm:text-4xl font-black tracking-tighter mb-1">100%</div>
              <div className="text-sm sm:text-base font-semibold text-red-100 leading-tight">
                Trusted<br/> Performance
              </div>
            </div>
            
            {/* Decorative dot grid behind the image (Optional but adds polish) */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-[radial-gradient(#cbd5e1_3px,transparent_3px)] [bg-size-[16px_16px]] -z-10 opacity-70"></div>
          </div>

        </div>
      </div>
    </section>
  );
}