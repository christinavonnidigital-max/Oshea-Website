import React from "react";
import { Link } from "react-router-dom";

const Accreditations: React.FC = () => (
  <section className="border-b border-slate-200 bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <div className="max-w-3xl">
        <h2 className="font-semibold text-slate-900">Confirm the accreditation scope for your service</h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">The certification body and applicable accreditation must be confirmed for the standard and activities in your quotation. Accreditation wording is subject to confirmation.</p>
      </div>
      <Link to="/services#certification" className="shrink-0 font-semibold text-primary-700 underline underline-offset-4">Certification details</Link>
    </div>
  </section>
);

export default Accreditations;
