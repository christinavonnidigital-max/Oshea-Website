import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServiceCard: FC<{ title: string; description: string; icon: ReactNode; slug: string }> = ({ title, description, icon, slug }) => (
  <article className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 text-center flex flex-col items-center h-full w-full">
    <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-orange-100 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">{title}</h3>
    <p className="text-gray-600 flex-grow mb-6">{description}</p>
    <Link
      to={`/services/${slug}`}
      className="mt-auto inline-block bg-[#0F1A3E] text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-500 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
      aria-label={`More info about ${title}`}
    >
      More Info
    </Link>
  </article>
);

const Services: FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Delivering value-driven and internationally recognized services.</p>
        </div>
        <ul className="grid md:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => (
            <li key={service.title} className="flex">
              <ServiceCard 
                title={service.title} 
                description={service.shortDescription} 
                icon={service.icon} 
                slug={service.slug} 
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;