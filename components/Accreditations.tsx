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
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Accredited by leading bodies
          </p>
          <div className="grid w-full grid-cols-3 items-center justify-items-center gap-5 sm:w-auto sm:gap-8">
            {logos.map((logo) => (
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                className="h-12 w-full max-w-[120px] object-contain sm:h-14 sm:w-auto sm:max-w-[160px]"
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
