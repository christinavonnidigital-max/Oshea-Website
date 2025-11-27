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
  <section className="bg-gradient-to-b from-white to-slate-50">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          Proof in Practice
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900 mb-4">
          Real outcomes for clients
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          Credibility through accredited certification, practical training, and clear findings you can act on.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {testimonials.map((item, idx) => (
          <article
            key={idx}
            className="h-full flex flex-col rounded-xl bg-white p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
          >
            <p className="text-slate-700 leading-relaxed mb-6 italic">
              "{item.quote}"
            </p>

            <div className="mt-auto pt-6 border-t border-slate-100">
              <p className="text-sm font-semibold text-blue-700 mb-2">{item.result}</p>
              <p className="text-xs text-slate-500">{item.name}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 rounded-full bg-blue-700 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-800 transition-all hover:scale-105"
        >
          Talk to us about your project
          <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>
    </div>
  </section>
);

export default Testimonials;
