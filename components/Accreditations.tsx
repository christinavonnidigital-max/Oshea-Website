import React from "react";

const logos = [
  {
    name: "DAkkS accreditation",
    src: "/logos/dakks.svg",
  },
  {
    name: "IAF MLA member",
    src: "/logos/iaf.svg",
  },
  {
    name: "ESYD accreditation",
    src: "/logos/esyd.svg",
  },
];

const Accreditations: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Recognised accreditation bodies
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group rounded-xl border border-slate-200 bg-slate-50/60 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                role="img"
                aria-label={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="object-contain transition duration-200 group-hover:scale-105"
                  style={{ height: 38, width: "auto" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
