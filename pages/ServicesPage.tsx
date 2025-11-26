import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const SITE_URL = "https://www.oshea.co.za";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>ISO Certification, Inspection & Training | O'Shea SA Services</title>
        <meta
          name="description"
          content="Comprehensive ISO management systems certification, inspection, and training delivered with TUV NORD CERT cooperation across Sub-Saharan Africa."
        />
        <meta property="og:title" content="ISO Certification, Inspection & Training | O'Shea SA" />
        <meta
          property="og:description"
          content="From gap analysis to certification audits and training, we tailor compliance services to your industry."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80"
        />
        <link rel="canonical" href={`${SITE_URL}/services`} />
      </Helmet>
      <PageHero 
        title="Our Services" 
        subtitle="Internationally Recognized Certification, Inspection & Training"
        backgroundImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=75"
      />
      
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Tailored to Industry Demands</h2>
           <p className="text-lg text-gray-700 leading-relaxed">
             From certification to inspection and training, O'Shea SA helps organizations achieve compliance, improve performance, and build global trust. Our services are delivered under the accreditation of <strong>TUV NORD CERT GmbH</strong>, ensuring your business meets the highest international standards.
          </p>
        </div>
      </div>

      {/* Reusing the updated Services component for consistency */}
      <Services />

      <Testimonials />

      <section className="bg-brand-blue py-20 px-6 text-white text-center">
         <h2 className="text-3xl font-bold mb-6">Need tailored compliance services?</h2>
         <p className="max-w-2xl mx-auto mb-10 text-blue-100 text-lg">
           We can customize our inspection and training packages to meet your specific project requirements.
         </p>
         <Link 
           to="/contact"
           className="inline-block bg-white text-brand-blue font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition shadow-lg uppercase tracking-wide text-sm"
         >
           Get a Quote
         </Link>
      </section>
    </Layout>
  );
};

export default ServicesPage;
