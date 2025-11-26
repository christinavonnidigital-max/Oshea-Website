import React from "react";
import { Link } from "react-router-dom";

const ContactCTA: React.FC = () => {
  return (
    <section id="contact-cta" className="bg-primary-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:flex-row sm:items-center sm:px-6 lg:gap-8 lg:px-8 lg:py-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-2xl lg:text-3xl">
            Ready to discuss your next certification or training?
          </h2>
          <p className="mt-3 text-sm text-slate-100 sm:text-base">
            Share a few details about your organisation and our team will
            contact you.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary-700 shadow-md hover:bg-slate-100 transition-colors whitespace-nowrap flex-shrink-0"
        >
          Submit an enquiry
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;