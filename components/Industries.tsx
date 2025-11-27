import React from "react";
import { Link } from "react-router-dom";

const Industries: React.FC = () => {
  const industries = [
    {
      title: "Manufacturing",
      desc: "Streamline operations and ensure compliance with ISO standards tailored for manufacturing excellence.",
      icon: (
        <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      title: "Construction",
      desc: "Enhance safety and quality with ISO certifications designed for the construction industry.",
      icon: (
        <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Healthcare",
      desc: "Ensure patient safety and operational excellence with ISO standards for healthcare facilities.",
      icon: (
        <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Mining & Resources",
      desc: "Support sustainable mining operations with comprehensive environmental and safety management systems.",
      icon: (
        <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: "Energy & Utilities",
      desc: "Navigate complex regulatory requirements with ISO certifications for energy and utilities sectors.",
      icon: (
        <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Food & Agriculture",
      desc: "Maintain food safety and quality standards with specialized certifications for the agri-food sector.",
      icon: (
        <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="industries" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-800">
              Industries
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Tailored solutions for every industry.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
              We provide ISO certification and compliance services across diverse industries, ensuring standards are met and exceeded.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, idx) => (
            <article
              key={idx}
              className="group flex h-full flex-col rounded-xl bg-white p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 mb-5 transition-colors group-hover:bg-blue-100">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {industry.title}
              </h3>
              <p className="flex-grow text-slate-600 leading-relaxed">
                {industry.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
