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

      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">📍</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Headquarters</h3>
                  <p className="text-gray-600 mt-1">Unit RG0-002, The Campus,<br/>Bryanston, South Africa</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">📧</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@oshea.co.za" className="hover:text-brand-blue">info@oshea.co.za</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl flex-shrink-0" aria-hidden="true">📞</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                  <p className="text-gray-600 mt-1">+27 10 210 7715</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <h4 className="font-semibold text-brand-blue mb-2">Global Partnership</h4>
              <p className="text-sm text-gray-600">
                In cooperation with <strong>TÜV NORD CERT GmbH</strong><br/>
                Langemarckstraße 20, 45141 Essen, Germany
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form action="https://formsubmit.io/send/info@oshea.co.za" method="POST" className="space-y-6">
              {/* Hidden Spam Protection */}
              <input type="hidden" name="_formsubmit_id" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input 
                    id="firstName"
                    type="text" 
                    name="firstName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" 
                    placeholder="John" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input 
                    id="lastName"
                    type="text" 
                    name="lastName" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" 
                    placeholder="Doe" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  name="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" 
                  placeholder="john@company.com" 
                  required 
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <select 
                  id="subject"
                  name="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition"
                >
                  <option>General Inquiry</option>
                  <option>Request for Quote</option>
                  <option>Training Information</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition" 
                  placeholder="How can we help you?" 
                  required
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-brand-dark transition shadow-md hover:shadow-lg uppercase tracking-wide text-sm">
                Send Message
              </button>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Response within 1 business day</p>
                    <p className="text-xs text-gray-600">Dedicated coordinators for audits, training, and quotes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Accredited through TÜV NORD CERT</p>
                    <p className="text-xs text-gray-600">Internationally recognized certification and inspection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Local teams, regional reach</p>
                    <p className="text-xs text-gray-600">Support across South Africa and key Sub-Saharan markets.</p>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
