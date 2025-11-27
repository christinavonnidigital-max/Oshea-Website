import React from "react";
import CoverageMap from "./CoverageMap";

const Footprint: React.FC = () => (
  <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-800 mb-4">
              Regional Footprint
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-slate-900 mb-6 leading-tight">
              Africa-wide coverage with local expertise
            </h2>
            <p className="text-base text-slate-600 sm:text-lg leading-relaxed">
              We support organisations across South Africa, Namibia, Botswana, Zimbabwe, Zambia, Kenya, Ghana,
              Nigeria, Côte d'Ivoire and more — with local delivery and global recognition through TÜV NORD CERT
              cooperation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="rounded-lg bg-blue-50 p-5 border border-blue-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Coverage</p>
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p className="text-sm text-slate-600 mt-1">Countries</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-5 border border-blue-100">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-2">Response</p>
              <p className="text-2xl font-bold text-slate-900">24h</p>
              <p className="text-sm text-slate-600 mt-1">Typical time</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden">
          <CoverageMap />
          <div className="bg-slate-50 border-t border-slate-200 p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Key Hubs</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>Johannesburg</li>
                  <li>Nairobi</li>
                  <li>Harare</li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-600 mb-3">Capabilities</p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>Local audit teams</li>
                  <li>Remote surveillance</li>
                  <li>On-site inspections</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footprint;
