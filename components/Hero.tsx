import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-[#0B1B2B] text-white">
    <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-5 lg:items-center lg:gap-12 lg:px-8 lg:py-14">
      <div className="lg:col-span-3">
        <p className="mb-4 inline-flex rounded-full border border-orange-300/30 bg-orange-300/10 px-3 py-1.5 text-xs font-medium text-orange-100">Accredited by DAkkS • IAF MLA Member</p>
        <h1 className="text-4xl font-bold tracking-tight leading-[1.1] sm:text-5xl">
          Independent ISO certification for{" "}
          <span className="text-brand-warmLight">Sub-Saharan Africa</span>
        </h1>
        <p className="body-copy mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
          Accredited ISO certification, inspection and training services backed by TÜV NORD CERT GmbH. Building excellence across management systems, safety, and quality.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-brand-warm px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#E84E00] active:translate-y-px focus-visible:outline-white">
            Talk to an expert
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-500 px-6 py-3 text-base font-semibold text-white transition-colors duration-200 hover:border-slate-300 hover:bg-white/10 active:translate-y-px focus-visible:outline-white">
            View services
          </Link>
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-700 pt-5 sm:grid-cols-4">
          {[['10+', 'Countries'], ['500+', 'Certifications'], ['15', 'Years experience'], ['8+', 'Industries']].map(([value, label]) => (
            <div key={label}>
              <dt className="text-xs text-slate-300">{label}</dt>
              <dd className="mt-1 text-xl font-bold text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 sm:p-6 lg:col-span-2">
        <h2 className="text-xl font-bold">Support for your next assessment</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">Discuss your standard, site and timing with our team.</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=320&q=65" alt="Team discussing management system requirements" width="320" height="240" className="aspect-[4/3] w-full rounded-xl object-cover" decoding="async" />
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=320&q=65" alt="Industrial working environment" width="320" height="240" className="aspect-[4/3] w-full rounded-xl object-cover" decoding="async" />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-300">Explore certification for ISO 9001, ISO 14001 and ISO 45001.</p>
        <Link to="/services#certification" className="mt-4 inline-flex items-center justify-center rounded-full border border-slate-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-slate-300 hover:bg-white/10 active:translate-y-px focus-visible:outline-white">Explore certification</Link>
      </div>
    </div>
  </section>
);

export default Hero;
