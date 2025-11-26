import React from "react";
import CoverageMap from "./CoverageMap";

const Footprint: React.FC = () => (
  <section className="bg-slate-50">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="grid gap-10 md:gap-16 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Regional footprint</p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl text-slate-900">
            Africa-wide coverage with local expertise
          </h2>
          <p className="text-sm text-slate-600 sm:text-base leading-relaxed">
            We support organisations across South Africa, Namibia, Botswana, Zimbabwe, Zambia, Kenya, Ghana,
            Nigeria, Cote d'Ivoire and more — with local delivery and global recognition through TUV NORD CERT
            cooperation.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
              10+ countries
            </span>
            <span className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
              Fast local response
            </span>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-0 shadow-sm ring-1 ring-slate-100 overflow-hidden">
          <CoverageMap />
          <div className="grid grid-cols-2 gap-3 p-6 bg-slate-50 border-t border-slate-200">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Key hubs</p>
              <ul className="text-sm text-slate-700 space-y-1 mt-1">
                <li>Johannesburg</li>
                <li>Nairobi</li>
                <li>Harare</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Response radius</p>
              <ul className="text-sm text-slate-700 space-y-1 mt-1">
                <li>10+ countries covered</li>
                <li>Local audit teams</li>
                <li>Remote surveillance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Footprint;
