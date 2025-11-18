import React from "react";

const industries = [
  "Manufacturing",
  "Construction & Engineering",
  "Food & Beverage",
  "Energy & Utilities",
  "Information Technology",
  "Healthcare & Pharmaceuticals",
  "Logistics & Supply Chain",
  "Mining",
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Industries we serve
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Partnering with organisations across a diverse range of sectors in
            Sub Sahara Africa.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-transparent hover:border-[#FFC107]/60"
            >
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]" />
              <div className="px-5 py-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F1A3E]/5 group-hover:bg-[#0F1A3E]/10">
                  <span className="text-sm">•</span>
                </div>
                <p className="font-semibold text-[#0F1A3E]">{industry}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;