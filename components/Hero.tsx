import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -left-24 -top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    </div>
    <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-5 lg:items-center lg:gap-12 lg:px-8 lg:py-14">
      <div className="lg:col-span-3">
        <h1 className="text-4xl font-bold tracking-tight leading-[1.1] sm:text-5xl">
          Independent ISO certification for{" "}
          <span className="bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] bg-clip-text text-transparent">Sub-Saharan Africa</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
          Certification, inspection and training services for your management systems, safety and quality requirements.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] px-6 py-3 text-base font-semibold text-slate-950 transition hover:brightness-110 focus-visible:outline-white">
            Talk to an expert
          </Link>
          <Link to="/services" className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-slate-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-white">
            View services
          </Link>
        </div>
      </div>
      <div className="rounded-2xl border border-slate-700/50 bg-slate-900/60 p-5 sm:p-6 lg:col-span-2">
        <h2 className="text-xl font-bold">Support for your next assessment</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">Discuss your standard, site and timing with our team.</p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=320&q=65" alt="Team discussing management system requirements" width="320" height="240" className="aspect-[4/3] w-full rounded-xl object-cover" decoding="async" />
          <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=320&q=65" alt="Industrial working environment" width="320" height="240" className="aspect-[4/3] w-full rounded-xl object-cover" decoding="async" />
        </div>
        <p className="mt-5 text-sm leading-relaxed text-slate-300">Explore <Link to="/services#certification" className="font-semibold text-white underline underline-offset-4">ISO 9001, ISO 14001 and ISO 45001</Link> certification enquiries.</p>
      </div>
    </div>
  </section>
);

export default Hero;
