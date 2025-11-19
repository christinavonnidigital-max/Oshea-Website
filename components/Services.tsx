import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Services: FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0F1A3E] mb-6">
            Where do you want to start?
          </h2>
          <p className="text-xl text-gray-600">
            Pick the path that makes sense for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Path 1 */}
          <Link to="/services" className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FD7E14] hover:shadow-2xl transition-all cursor-pointer flex flex-col">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#FFC107] to-[#FD7E14] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">
              I need a specific standard
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              You know which ISO standard you need. Get straight to certification.
            </p>
            <div className="flex items-center text-[#FD7E14] font-semibold group-hover:gap-2 transition-all mt-auto">
              View all standards
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Path 2 - Featured */}
          <Link to="/contact" className="group bg-gradient-to-br from-[#FD7E14] to-[#DC3545] rounded-2xl p-8 text-white hover:shadow-2xl hover:scale-105 transition-all cursor-pointer flex flex-col">
            <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Not sure which standard I need
            </h3>
            <p className="text-white/90 mb-6 leading-relaxed flex-grow">
              Let&apos;s talk. We&apos;ll figure out which certification makes sense for your goals.
            </p>
            <div className="flex items-center font-semibold group-hover:gap-2 transition-all mt-auto">
              Book free consultation
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Path 3 */}
          <Link to="/contact" className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[#FD7E14] hover:shadow-2xl transition-all cursor-pointer flex flex-col">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[#0F1A3E] to-[#1a2b5f] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">
              Already certified
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
              Surveillance audits, recertification, or adding new standards.
            </p>
            <div className="flex items-center text-[#FD7E14] font-semibold group-hover:gap-2 transition-all mt-auto">
              Get ongoing support
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;