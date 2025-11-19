import React from "react";

const Footprint: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-[40px] rounded-br-[120px] bg-[#0F1A3E] text-white shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0 relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]" />

          {/* Text side */}
          <div className="px-8 py-12 lg:px-12 lg:py-16 flex flex-col justify-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-wide uppercase mb-6 w-max">
              Geographic Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our footprint in Sub Sahara Africa
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              O&apos;Shea SA supports clients across Sub Sahara Africa as a
              cooperation partner of TÜV NORD CERT GmbH.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "South Africa", "Namibia", "Botswana", "Zimbabwe", 
                "Zambia", "Mozambique", "Kenya", "Nigeria", "Ghana"
              ].map((country) => (
                <span
                  key={country}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm hover:bg-white/20 transition-colors cursor-default"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Map side - using curved design concept for consistency */}
          <div className="relative min-h-[400px] bg-[#0A122C]">
            <img
              src="https://images.unsplash.com/photo-1601655648216-2fd1076629ec?q=75&w=1200&auto=format&fit=crop&fm=webp"
              alt="Map of Sub Sahara Africa"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A3E] via-[#0F1A3E]/50 to-transparent" />
            
            {/* Curved overlay on map side to match brand style */}
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-gray-50 rounded-tl-[80px] z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;