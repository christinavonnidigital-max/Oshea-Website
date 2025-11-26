import React from "react";
import { Link } from "react-router-dom";

const Industries: React.FC = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Industries
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Supporting organisations across key sectors.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base leading-relaxed">
              We work with organisations of all sizes, tailoring our services to
              the specific regulatory and operational context of each industry.
            </p>
          </div>
          <Link
            to="/industries"
            className="whitespace-nowrap text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            Explore industries →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Manufacturing", desc: "Complex supply chains and stringent quality expectations across regional and export markets." },
            { title: "Food and beverage", desc: "Food safety and hygiene requirements across local and international standards." },
            { title: "Mining and resources", desc: "High-risk environments with strong focus on safety, environment and social impact." },
            { title: "Energy and utilities", desc: "Reliability, safety and environmental performance under regulatory scrutiny." },
            { title: "Healthcare and pharma", desc: "Patient safety, quality of care and robust process management." },
            { title: "Public sector and services", desc: "Service quality, transparency and risk management in public institutions." },
          ].map((item, idx) => (
            <article key={idx} className="flex h-full flex-col rounded-2xl bg-white p-7 sm:p-8 shadow-sm ring-1 ring-slate-200/80 hover:shadow-md hover:ring-slate-300 transition-all">
              <h3 className="text-base font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;