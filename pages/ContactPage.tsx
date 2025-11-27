import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

const SITE_URL = "https://www.oshea.co.za";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact O'Shea SA | ISO Certification & Compliance Support</title>
        <meta
          name="description"
          content="Get in touch with O'Shea SA for ISO certification, inspection, and training across Sub-Saharan Africa. Speak with our coordinators for quotes or project support."
        />
        <meta property="og:title" content="Contact O'Shea SA" />
        <meta
          property="og:description"
          content="Talk to our certification and inspection specialists about your compliance needs."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1423666639041-f142afb94e90?auto=format&fit=crop&w=1200&q=80"
        />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
      </Helmet>
      <PageHero 
        title="Contact Us" 
        subtitle="Let's talk compliance excellence."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f142afb94e90?auto=format&fit=crop&w=1400&q=75"
      />

      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Contact</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            <p className="text-slate-600 leading-relaxed">
              Have questions about ISO certification, inspection, or training? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Unit RG0-002, Ground Floor<br/>
                  Roland Garros Building, The Campus<br/>
                  57 Sloane Street, Bryanston<br/>
                  South Africa
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                <a href="mailto:info@oshea.co.za" className="text-sm text-blue-700 hover:text-blue-800 font-medium">
                  info@oshea.co.za
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                <a href="tel:+27102107715" className="text-sm text-slate-700 hover:text-slate-900">
                  +27 10 210 7715
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-2">Global Partnership</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                In cooperation with <strong>TÜV NORD CERT GmbH</strong><br/>
                Langemarckstraße 20, 45141 Essen, Germany
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h3>

            <form action="https://formsubmit.io/send/info@oshea.co.za" method="POST" className="space-y-5">
              <input type="hidden" name="_formsubmit_id" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                >
                  <option>General Inquiry</option>
                  <option>Request for Quote</option>
                  <option>Training Information</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition shadow-sm hover:shadow-md">
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-200 text-sm text-slate-600">
              <p>We typically respond within 1 business day. For urgent matters, please call us directly at <a href="tel:+27102107715" className="text-blue-700 hover:text-blue-800 font-medium">+27 10 210 7715</a>.</p>
            </div>
          </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
