
import React from 'react';
import CertificationIcon from './icons/CertificationIcon';
import InspectionIcon from './icons/InspectionIcon';
import TrainingIcon from './icons/TrainingIcon';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center">
     <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-6">
        {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Certification',
      description: 'We provide accredited certification services for a wide range of international standards, ensuring your systems meet global benchmarks.',
      icon: <CertificationIcon />
    },
    {
      title: 'Inspection',
      description: 'Our independent inspections verify product, process, and system compliance with industry regulations and customer requirements.',
      icon: <InspectionIcon />
    },
    {
      title: 'Training',
      description: 'We offer standard and customized training programs to empower your workforce with the skills to maintain compliance and drive improvement.',
      icon: <TrainingIcon />
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Delivering value-driven and internationally recognized services.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;