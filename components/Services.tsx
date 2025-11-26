import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
              Services
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              ISO certification, inspection and training.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base leading-relaxed">
              We support organisations through the full management systems
              lifecycle, from initial gap analysis to certification audits and
              ongoing surveillance.
            </p>
          </div>
          <Link
            to="/services"
            className="whitespace-nowrap text-sm font-semibold text-primary-700 hover:text-primary-800 transition-colors"
          >
            View service overview →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-7 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary-700 hover:shadow-lg hover:bg-white">
            <h3 className="text-lg font-semibold text-slate-900">
              Management systems certification
            </h3>
            <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">
              Independent certification of your management systems against
              recognised ISO standards, including 9001, 14001 and 45001.
            </p>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-7 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary-700 hover:shadow-lg hover:bg-white">
            <h3 className="text-lg font-semibold text-slate-900">
              Inspection and audits
            </h3>
            <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">
              On-site inspections and audits that surface risk, confirm
              compliance and provide clear, prioritised findings.
            </p>
          </article>

          <article className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/90 p-7 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:border-primary-700 hover:shadow-lg hover:bg-white">
            <h3 className="text-lg font-semibold text-slate-900">
              Training and awareness
            </h3>
            <p className="mt-3 flex-1 text-sm text-slate-600 leading-relaxed">
              Practical training for management systems, internal auditors and
              operational teams, tailored to your certification and compliance
              needs.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;