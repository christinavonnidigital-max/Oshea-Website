import React from "react";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Operations Director, Mining Client",
    quote:
      "O'Shea SA guided us through ISO 45001 with clear findings and a realistic action plan. Audits are now faster with fewer surprises.",
    result: "Reduced audit findings by 35% within one year.",
  },
  {
    name: "CIO, Regional Tech Company",
    quote:
      "Their ISO 27001 readiness assessment mapped perfectly to our data privacy obligations. We built a stronger access control model in weeks.",
    result: "Closed critical access gaps and passed certification on first attempt.",
  },
  {
    name: "Quality Lead, Food Manufacturer",
    quote:
      "Training was practical and specific to our processes. We now maintain ISO 9001 and ISO 22000 with confidence.",
    result: "Improved on-time delivery and supplier quality metrics.",
  },
];

const Testimonials: React.FC = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Proof in practice
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
            Real outcomes for clients
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base leading-relaxed">
            Credibility through accredited certification, practical training, and clear findings you can act on.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-800 transition"
        >
          Talk to us
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item, idx) => (
          <article
            key={idx}
            className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm text-slate-700 leading-relaxed">"{item.quote}"</p>
            <p className="mt-4 text-xs font-semibold text-brand-blue">{item.result}</p>
            <p className="mt-2 text-xs text-slate-500">{item.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
