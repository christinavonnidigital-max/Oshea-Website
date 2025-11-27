import React from "react";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const services = [
    {
      title: "Management Systems Certification",
      desc: "Independent certification of your management systems against recognised ISO standards, including 9001, 14001 and 45001.",
      icon: (
        <svg
          className="h-6 w-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Inspection & Audits",
      desc: "On-site inspections and audits that surface risk, confirm compliance and provide clear, prioritised findings.",
      icon: (
        <svg
          className="h-6 w-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Training & Awareness",
      desc: "Practical training for management systems, internal auditors and operational teams, tailored to your certification and compliance needs.",
      icon: (
        <svg
          className="h-6 w-6 text-blue-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-800">
              Services
            </p>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              ISO certification, inspection and training.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed">
              We support organisations through the full management systems lifecycle, from initial gap analysis to certification audits and ongoing surveillance.
            </p>
          </div>
          <Link
            to="/services"
            className="whitespace-nowrap px-4 py-2 text-sm font-semibold bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors"
          >
            View service overview →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={idx}
              className="group relative flex h-full flex-col rounded-xl bg-white p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 mb-5 transition-colors group-hover:bg-blue-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="flex-grow text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;