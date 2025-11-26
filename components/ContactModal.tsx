import React from "react";
import { Link } from "react-router-dom";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close contact form"
      />
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">
        <div className="flex items-start justify-between px-6 py-4 border-b border-slate-200">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Talk to an expert</p>
            <h3 id="contact-modal-title" className="text-lg font-semibold text-slate-900">Share your project</h3>
            <p className="text-sm text-slate-600">We respond within one business day.</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400"
            aria-label="Close"
            type="button"
          >
            x
          </button>
        </div>

        <form className="px-6 py-5 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent"
            />
            <select
              name="topic"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              defaultValue="quote"
            >
              <option value="quote">Request a quote</option>
              <option value="audit">Audit timing</option>
              <option value="training">Training</option>
              <option value="other">Other</option>
            </select>
          </div>
          <textarea
            name="message"
            rows={3}
            placeholder="What do you need help with?"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-brand-blue focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900/30"
          >
            Send message
          </button>
          <p className="flex items-center justify-between text-xs text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-700">24h response</span>
            <Link to="/contact" className="font-semibold text-brand-blue hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue/60">
              Full contact page
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
