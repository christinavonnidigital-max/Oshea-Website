import type { FC } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Footprint from '../components/Footprint';
import Accreditations from '../components/Accreditations';
import WhyOshea from '../components/WhyOshea';
import Seo from '../components/Seo';

const HomePage: FC = () => {
  return (
    <>
      <Seo
        title="Your Excellence in Execution"
        description="O'Shea SA provides leading Management Systems Certification, Inspection, Testing, and Training Services as a cooperation partner of TÜV NORD across Sub Sahara Africa."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          'name': "O'Shea SA",
          'url': 'https://www.oshea.co.za', // This should be the final canonical URL
          'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+27-10-210-7715',
            'contactType': 'customer service',
            'email': 'info@oshea.co.za',
          },
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Unit RG0-002 Ground Floor, Roland Garros Building, The Campus, 57 Sloane Street',
            'addressLocality': 'Bryanston',
            'addressCountry': 'ZA',
          },
        }}
      />
      <Hero />
      <About />
      <WhyOshea />
      <Services />
      <Accreditations />
      <Industries />
      <Footprint />
      <WhyChooseUs />
      <Team />
    </>
  );
};

export default HomePage;