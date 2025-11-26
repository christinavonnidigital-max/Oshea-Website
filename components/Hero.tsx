import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Hero: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Brand colored glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 -top-40 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, #FFC10755, transparent)" }}
        ></div>
        <div
          className="absolute bottom-[-180px] right-[-80px] h-80 w-80 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle at 70% 70%, #004B9B66, transparent)" }}
        ></div>
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex-1 space-y-7">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-300">
            Management systems | Inspection | Training
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            Independent ISO certification for Sub-Saharan Africa
          </h1>
          <p className="max-w-xl text-base text-slate-200 sm:text-lg leading-relaxed">
            We provide accredited ISO certification, inspection and training across Sub-Saharan Africa.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setShowContact(true)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              Talk to an expert
            </button>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-500/70 px-6 py-2.5 text-sm font-semibold text-slate-100 hover:border-white hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              View services
            </Link>
          </div>
        </div>

        {/* Hero side panel, collage and stats */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-900/70 p-6 sm:p-8 shadow-xl ring-1 ring-slate-700/70 backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">
              Regional footprint
            </p>
            <h2 className="mt-2 text-lg font-semibold">
              Supporting clients across Sub-Saharan Africa
            </h2>
            <p className="mt-2 text-sm text-slate-200">
              We work with organisations in diverse industries to achieve and maintain internationally recognised management systems certifications.
            </p>

            {/* Collage */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm" aria-label="Project and audit imagery">
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-slate-800/80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=320&q=65"
                    alt="Consultants meeting to plan an audit"
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition"
                    loading="lazy"
                    width="320"
                    height="150"
                    decoding="async"
                  />
                </div>
                <div className="h-24 rounded-2xl bg-slate-800/60 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=320&q=65"
                    alt="Industrial equipment under inspection"
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition"
                    loading="lazy"
                    width="320"
                    height="150"
                    decoding="async"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-24 rounded-2xl bg-slate-800/60 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=320&q=65"
                    alt="Corporate team reviewing compliance requirements"
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition"
                    loading="lazy"
                    width="320"
                    height="150"
                    decoding="async"
                  />
                </div>
                <div className="h-24 rounded-2xl bg-slate-800/80 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=320&q=65"
                    alt="Safety training session on site"
                    className="w-full h-full object-cover opacity-60 hover:opacity-80 transition"
                    loading="lazy"
                    width="320"
                    height="150"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <dt className="text-slate-400 text-xs">Countries</dt>
                <dd className="text-lg font-semibold text-white">10+</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs">Industries</dt>
                <dd className="text-lg font-semibold text-white">8+</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs">Key standards</dt>
                <dd className="text-sm font-semibold text-white">ISO 9001, 14001, 45001</dd>
              </div>
              <div>
                <dt className="text-slate-400 text-xs">Typical clients</dt>
                <dd className="text-sm font-semibold text-white">Medium to large organisations</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </section>
  );
};

export default Hero;
