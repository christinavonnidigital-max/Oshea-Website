
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import Process from '../components/Process';
import StandardsLibrary from '../components/StandardsLibrary';
import Seo from '../components/Seo';
import { servicesData } from '../data/servicesData';

const ServicesPage: FC = () => {
  // Dynamically generate description and keywords from service data.
  const serviceTitles = servicesData.map(s => s.title).join(', ');
  const dynamicDescription = `Explore O'Shea SA's professional services, including ${serviceTitles}. We provide accredited, value-driven solutions to help your organization achieve excellence.`;
  const dynamicKeywords = servicesData.map(s => s.title).concat(['ISO certification', 'auditing', 'compliance', 'management systems', "O'Shea SA"]).join(', ');

  return (
    <>
      <Seo
        title="Our Services"
        description={dynamicDescription}
        keywords={dynamicKeywords}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'name': "O'Shea SA Services",
          'itemListElement': servicesData.map((service, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
              '@type': 'Service',
              'name': service.title,
              'description': service.shortDescription,
              'url': `https://www.oshea.co.za/#/services/${service.slug}`, // This should be the final canonical URL
            },
          })),
        }}
      />
      
      <Services />

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">Most Popular Certification Programs</h2>
            <p className="mt-4 text-lg text-gray-600">Dedicated pathways for key international standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
             {/* ISO 9001 Card - Primary */}
             <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4">
                   <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-3">TOP DEMAND</span>
                   <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">ISO 9001</h3>
                   <p className="text-gray-700 mb-6 text-sm flex-grow">The global standard for Quality Management. Essential for government tenders and operational excellence.</p>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">3-6 mo</span>
                            <span className="text-xs text-gray-500">Timeline</span>
                        </div>
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">R80k+</span>
                            <span className="text-xs text-gray-500">Investment</span>
                        </div>
                    </div>
                    <Link to="/iso-9001" className="block w-full py-3 text-center rounded-lg bg-[#0F1A3E] text-white font-bold text-sm hover:bg-[#1a2b5f] transition-colors">
                       View Details
                    </Link>
                </div>
             </div>

             {/* ISO 14001 Card - Primary */}
             <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4">
                   <span className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-bold rounded-full mb-3">ESG ESSENTIAL</span>
                   <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">ISO 14001</h3>
                   <p className="text-gray-700 mb-6 text-sm flex-grow">Environmental Management Systems. Manage your impact, reduce waste, and meet ESG requirements.</p>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">3-5 mo</span>
                            <span className="text-xs text-gray-500">Timeline</span>
                        </div>
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">R80k+</span>
                            <span className="text-xs text-gray-500">Investment</span>
                        </div>
                    </div>
                    <Link to="/iso-14001" className="block w-full py-3 text-center rounded-lg bg-[#0F1A3E] text-white font-bold text-sm hover:bg-[#1a2b5f] transition-colors">
                       View Details
                    </Link>
                </div>
             </div>

             {/* ISO 45001 Card - Primary */}
             <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4">
                   <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full mb-3">SAFETY FIRST</span>
                   <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">ISO 45001</h3>
                   <p className="text-gray-700 mb-6 text-sm flex-grow">Occupational Health & Safety. Reduce workplace incidents, lower insurance costs, and ensure compliance.</p>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">3-6 mo</span>
                            <span className="text-xs text-gray-500">Timeline</span>
                        </div>
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">R80k+</span>
                            <span className="text-xs text-gray-500">Investment</span>
                        </div>
                    </div>
                    <Link to="/iso-45001" className="block w-full py-3 text-center rounded-lg bg-[#0F1A3E] text-white font-bold text-sm hover:bg-[#1a2b5f] transition-colors">
                       View Details
                    </Link>
                </div>
             </div>

             {/* FSSC 22000 Card - Primary */}
             <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                <div className="mb-4">
                   <span className="inline-block px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full mb-3">RETAIL READY</span>
                   <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">FSSC 22000</h3>
                   <p className="text-gray-700 mb-6 text-sm flex-grow">GFSI-recognized food safety. A requirement for supplying major retailers like Woolworths and Pick n Pay.</p>
                </div>
                <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-6 text-sm">
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">5-8 mo</span>
                            <span className="text-xs text-gray-500">Timeline</span>
                        </div>
                        <div>
                            <span className="block font-bold text-[#0F1A3E]">R95k+</span>
                            <span className="text-xs text-gray-500">Investment</span>
                        </div>
                    </div>
                    <Link to="/fssc-22000" className="block w-full py-3 text-center rounded-lg bg-[#0F1A3E] text-white font-bold text-sm hover:bg-[#1a2b5f] transition-colors">
                       View Details
                    </Link>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      <StandardsLibrary />

      <Process />
    </>
  );
};

export default ServicesPage;
