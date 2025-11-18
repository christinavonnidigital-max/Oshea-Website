import type { FC } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import Breadcrumbs from '../components/Breadcrumbs';

const ServiceDetailPage: FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = servicesData.find(s => s.slug === serviceId);

  if (!service) {
    // Redirect to the main services page if the service is not found.
    return <Navigate to="/services" replace />;
  }
  
  const crumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          <Breadcrumbs crumbs={crumbs} currentPage={service.title} />

          <div className="flex items-center space-x-6 mb-8">
             <div className="flex-shrink-0 flex items-center justify-center h-24 w-24 rounded-full bg-orange-100">
                {service.icon}
             </div>
             <div>
                <p className="text-sm uppercase tracking-widest text-orange-500 font-semibold">Service Details</p>
                <h1 className="text-5xl font-bold text-[#0F1A3E]">{service.title}</h1>
             </div>
          </div>
          
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>{service.longDescription}</p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/services"
              className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to all services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;