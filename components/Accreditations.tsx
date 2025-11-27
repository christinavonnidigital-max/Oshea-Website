import React from "react";

const logos = [
  {
    name: "DAkkS accreditation",
    src: "/logos/dakks.png",
  },
  {
    name: "IAF MLA member",
    src: "/logos/iaf.png",
  },
  {
    name: "ESYD accreditation",
    src: "/logos/esyd.png",
  },
];

const Accreditations: React.FC = () => {
  return (
    <section className="bg-white border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Accredited by leading bodies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto max-w-[120px] object-contain opacity-60 hover:opacity-100 transition-opacity"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
