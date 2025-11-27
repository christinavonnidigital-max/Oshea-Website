import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

const SITE_URL = "https://www.oshea.co.za";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>About O'Shea SA | TUV NORD CERT Cooperation Partner</title>
        <meta
          name="description"
          content="Learn about O'Shea SA: a TUV NORD CERT cooperation partner delivering accredited certification, inspection, and training across Sub-Saharan Africa."
        />
        <meta property="og:title" content="About O'Shea SA" />
        <meta
          property="og:description"
          content="Meet the team behind O'Shea SA's accredited certification and compliance services."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
        />
        <link rel="canonical" href={`${SITE_URL}/about`} />
      </Helmet>
      <PageHero 
        title="Your Excellence in Execution" 
        subtitle="About O'Shea SA"
        backgroundImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=75"
      />

      <section className="py-16 sm:py-20 lg:py-24 bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-800 mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
                <p>
                  O'Shea SA is a leading provider of Management Systems Certification, Inspection, Testing, and Training Services across Sub-Saharan Africa. Established with a vision to bridge the gap between local industry needs and international standards, we operate as a trusted cooperation partner of <strong className="text-slate-900">TUV NORD CERT GmbH</strong>.
                </p>
                <p>
                  Our expertise spans multiple sectors including manufacturing, mining, energy, and construction. We pride ourselves on a team of highly qualified auditors and inspectors who bring both technical depth and practical understanding to every engagement.
                </p>
              </div>
            </div>

            {/* Stats Card */}
            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 shadow-lg ring-1 ring-slate-200">
                <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-blue-500/10 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-8 translate-y-8 rounded-full bg-indigo-500/10 blur-2xl" />

                <div className="relative">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Impact at a Glance</h3>
                  <dl className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Countries</dt>
                      <dd className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">10+</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Industries</dt>
                      <dd className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">8+</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Certifications</dt>
                      <dd className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">500+</dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Experience</dt>
                      <dd className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">15y</dd>
                    </div>
                  </dl>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Trusted by organizations across Sub-Saharan Africa to deliver independent, accredited certification and inspection services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-50 to-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Our Vision */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To be the preferred partner for quality, safety, and sustainability assurance in Africa, recognized for our integrity and technical excellence.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                To empower businesses by verifying compliance, mitigating risk, and enhancing performance through world-class certification and inspection services.
              </p>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-xl p-8 border border-slate-200 transition-all duration-300 hover:shadow-lg hover:border-blue-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                  <svg className="h-6 w-6 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900">Our Values</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-3 text-slate-600">
                  <span>• Integrity in all we do</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <span>• Customer Focus</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <span>• Technical Competence</span>
                </li>
                <li className="flex items-center gap-3 text-slate-600">
                  <span>• Continuous Innovation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
