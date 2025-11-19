import type { FC } from 'react';
import { Link } from 'react-router-dom';
import CertificationIcon from './icons/CertificationIcon';
import InspectionIcon from './icons/InspectionIcon';
import TrainingIcon from './icons/TrainingIcon';

const Services: FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across three core pillars of excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Certification Pillar */}
          <div className="bg-gray-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
            <div className="w-16 h-16 bg-[#0F1A3E] rounded-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
               <CertificationIcon />
            </div>
            <h3 className="text-2xl font-bold text-[#0F1A3E] mb-6 border-b pb-4 border-gray-200">Management Systems Certification</h3>
            <div className="space-y-4 flex-grow">
                <p className="font-semibold text-gray-700">Key Standards:</p>
                <div className="grid grid-cols-1 gap-2 text-sm text-gray-600">
                    <p>• ISO 9001 (Quality)</p>
                    <p>• ISO 14001 (Environment)</p>
                    <p>• ISO 45001 (Health & Safety)</p>
                    <p>• ISO 22000 (Food Safety)</p>
                    <p>• ISO 27001 (Info Security)</p>
                    <p>• ISO 50001 (Energy)</p>
                    <p>• FSSC 22000</p>
                    <p>• HACCP</p>
                </div>
            </div>
            <Link to="/services" className="mt-8 text-orange-600 font-bold hover:text-orange-700 inline-flex items-center">
              View Certifications <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Inspection Pillar */}
          <div className="bg-gray-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FFC107] to-[#FD7E14] rounded-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
               <InspectionIcon />
            </div>
            <h3 className="text-2xl font-bold text-[#0F1A3E] mb-6 border-b pb-4 border-gray-200">Inspection Services</h3>
            <div className="space-y-4 flex-grow">
                <p className="font-semibold text-gray-700">Core Services:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Pre-shipment inspections</li>
                  <li>• Factory audits</li>
                  <li>• Compliance verification</li>
                  <li>• Supplier evaluation</li>
                </ul>
            </div>
            <Link to="/services" className="mt-8 text-orange-600 font-bold hover:text-orange-700 inline-flex items-center">
              View Inspections <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Training Pillar */}
          <div className="bg-gray-50 rounded-2xl p-10 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FD7E14] to-[#DC3545] rounded-xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-300">
               <TrainingIcon />
            </div>
            <h3 className="text-2xl font-bold text-[#0F1A3E] mb-6 border-b pb-4 border-gray-200">Training Services</h3>
            <div className="space-y-4 flex-grow">
                <p className="font-semibold text-gray-700">Programs:</p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• ISO Standard Lead Auditor Training</li>
                  <li>• Internal Auditor Training</li>
                  <li>• Awareness Training</li>
                  <li>• Implementation Workshops</li>
                </ul>
            </div>
            <Link to="/services" className="mt-8 text-orange-600 font-bold hover:text-orange-700 inline-flex items-center">
              View Courses <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;