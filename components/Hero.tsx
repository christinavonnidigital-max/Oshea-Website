import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";

const Hero: React.FC = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-24 -top-40 h-96 w-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle at 30% 30%, #FFC107, transparent)" }}
        ></div>
        <div
          className="absolute bottom-[-180px] right-[-80px] h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle at 70% 70%, #004B9B, transparent)" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #FD7E14, transparent)" }}
        ></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-32">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-2 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              Accredited by DAkkS • IAF MLA Member
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Independent ISO certification for{" "}
            <span className="bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] bg-clip-text text-transparent">
              Sub-Saharan Africa
            </span>
          </h1>

          <p className="max-w-xl text-lg text-slate-300 sm:text-xl leading-relaxed">
            Accredited ISO certification, inspection and training services backed by TÜV NORD CERT GmbH. Building excellence across management systems, safety, and quality.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="button"
              onClick={() => setShowContact(true)}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] px-8 py-3.5 text-base font-semibold text-slate-900 shadow-xl transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              Talk to an expert
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-500/70 bg-slate-800/30 px-8 py-3.5 text-base font-semibold text-slate-100 backdrop-blur-sm transition-all hover:border-white hover:bg-slate-700/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
            >
              View services
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-slate-400">10+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-slate-400">500+ Certifications</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-slate-400">15 Years Experience</span>
            </div>
          </div>
        </div>

        {/* Hero side panel, collage and stats */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-8 shadow-2xl ring-1 ring-slate-700/50 backdrop-blur-xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-orange-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-40 w-40 -translate-x-10 translate-y-10 rounded-full bg-blue-500/10 blur-3xl"></div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-[#FFC107] to-[#FD7E14]"></div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
                  Regional Impact
                </p>
              </div>
              <h2 className="text-xl font-bold text-white leading-tight">
                Supporting clients across Sub-Saharan Africa
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                We work with organisations in diverse industries to achieve and maintain internationally recognised management systems certifications.
              </p>

              {/* Enhanced Collage */}
              <div className="mt-6 grid grid-cols-2 gap-3" aria-label="Project and audit imagery">
                <div className="space-y-3">
                  <div className="group h-28 rounded-2xl bg-slate-800/80 overflow-hidden ring-1 ring-slate-700/50">
                    <img
                      src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=320&q=65"
                      alt="Consultants meeting to plan an audit"
                      className="w-full h-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                      loading="lazy"
                      width="320"
                      height="150"
                      decoding="async"
                    />
                  </div>
                  <div className="group h-28 rounded-2xl bg-slate-800/60 overflow-hidden ring-1 ring-slate-700/50">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=320&q=65"
                      alt="Industrial equipment under inspection"
                      className="w-full h-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                      loading="lazy"
                      width="320"
                      height="150"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="group h-28 rounded-2xl bg-slate-800/60 overflow-hidden ring-1 ring-slate-700/50">
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=320&q=65"
                      alt="Corporate team reviewing compliance requirements"
                      className="w-full h-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                      loading="lazy"
                      width="320"
                      height="150"
                      decoding="async"
                    />
                  </div>
                  <div className="group h-28 rounded-2xl bg-slate-800/80 overflow-hidden ring-1 ring-slate-700/50">
                    <img
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=320&q=65"
                      alt="Safety training session on site"
                      className="w-full h-full object-cover opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                      loading="lazy"
                      width="320"
                      height="150"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Enhanced Stats */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <dl className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Countries</dt>
                    <dd className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">10+</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Industries</dt>
                    <dd className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">8+</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Key standards</dt>
                    <dd className="text-sm font-semibold text-white">ISO 9001, 14001, 45001</dd>
                  </div>
                  <div className="flex flex-col gap-1">
                    <dt className="text-xs font-medium uppercase tracking-wider text-slate-500">Typical clients</dt>
                    <dd className="text-sm font-semibold text-white">Medium to large orgs</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactModal open={showContact} onClose={() => setShowContact(false)} />
    </section>
  );
};

export default Hero;
