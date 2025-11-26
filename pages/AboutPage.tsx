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

      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-600">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h3>
          <p className="mb-6">
            O'Shea SA is a leading provider of Management Systems Certification, Inspection, Testing, and Training Services across Sub-Saharan Africa. Established with a vision to bridge the gap between local industry needs and international standards, we operate as a trusted cooperation partner of <strong>TUV NORD CERT GmbH</strong>.
          </p>
          <p>
            Our expertise spans multiple sectors including manufacturing, mining, energy, and construction. We pride ourselves on a team of highly qualified auditors and inspectors who bring both technical depth and practical understanding to every engagement.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-blue">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the preferred partner for quality, safety, and sustainability assurance in Africa, recognized for our integrity and technical excellence.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-accent">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower businesses by verifying compliance, mitigating risk, and enhancing performance through world-class certification and inspection services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-brand-blue">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2"><span className="text-brand-accent">•</span> Integrity in all we do</li>
              <li className="flex items-center gap-2"><span className="text-brand-accent">•</span> Customer Focus</li>
              <li className="flex items-center gap-2"><span className="text-brand-accent">•</span> Technical Competence</li>
              <li className="flex items-center gap-2"><span className="text-brand-accent">•</span> Continuous Innovation</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
