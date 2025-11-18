import type { FC } from 'react';
import Services from '../components/Services';
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
    </>
  );
};

export default ServicesPage;