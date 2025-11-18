import React from "react";

// Using a remote URL for the map image to ensure it loads correctly.
const africaMapUrl = "https://images.unsplash.com/photo-1601655648216-2fd1076629ec?q=75&w=1200&auto=format&fit=crop&fm=webp";

const Footprint: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="rounded-[32px] bg-[#0F1A3E] text-white shadow-xl overflow-hidden grid md:grid-cols-2 gap-0">
          {/* Text side */}
          <div className="px-8 py-10 lg:px-10 lg:py-12 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our footprint in Sub Sahara Africa
            </h2>
            <p className="text-sm md:text-base text-gray-200 mb-4">
              O&apos;Shea SA supports clients across Sub Sahara Africa as a
              cooperation partner of TÜV NORD CERT GmbH. We work with
              organisations in manufacturing, construction, food and beverage,
              energy, IT, healthcare, logistics and mining.
            </p>
            <p className="text-xs md:text-sm text-gray-300">
              Key countries served include South Africa, Namibia, Botswana,
              Zimbabwe, Zambia, Mozambique, Kenya, Nigeria, Ghana and more.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
              {[
                "South Africa",
                "Namibia",
                "Botswana",
                "Zimbabwe",
                "Zambia",
                "Mozambique",
                "Kenya",
                "Nigeria",
                "Ghana",
              ].map((country) => (
                <span
                  key={country}
                  className="px-3 py-1 rounded-full bg-white/10 border border-white/20"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>

          {/* Map side */}
          <div className="relative bg-[#0A122C]">
            <img
              src={africaMapUrl}
              alt="Map of Sub Sahara Africa showing O'Shea SA operating countries"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-4 rounded-[28px] border border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footprint;