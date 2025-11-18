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

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F1A3E]">Specialized Certification Programs</h2>
            <p className="mt-4 text-lg text-gray-600">Dedicated pathways for key international standards.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
             {/* ISO 9001 Card */}
             <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">ISO 9001</h3>
                <p className="text-gray-600 mb-6 text-sm">The global standard for Quality Management Systems. Essential for tenders and operational excellence.</p>
                <Link to="/iso-9001" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center group text-sm">
                   Learn more <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
             </div>
             {/* ISO 14001 Card */}
             <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">ISO 14001</h3>
                <p className="text-gray-600 mb-6 text-sm">Environmental Management Systems. Manage your impact, reduce waste, and meet ESG requirements.</p>
                <Link to="/iso-14001" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center group text-sm">
                   Learn more <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
             </div>
             {/* ISO 45001 Card */}
             <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">ISO 45001</h3>
                <p className="text-gray-600 mb-6 text-sm">Occupational Health & Safety Management. Reduce workplace incidents and ensure OHS Act compliance.</p>
                <Link to="/iso-45001" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center group text-sm">
                   Learn more <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
             </div>
             {/* FSSC 22000 Card */}
             <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-[#0F1A3E] mb-3">FSSC 22000</h3>
                <p className="text-gray-600 mb-6 text-sm">GFSI-recognized food safety certification. A must for food manufacturers supplying major retailers.</p>
                <Link to="/fssc-22000" className="text-orange-600 font-semibold hover:text-orange-700 flex items-center group text-sm">
                   Learn more <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
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