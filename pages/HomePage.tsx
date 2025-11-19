
import type { FC } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Accreditations from '../components/Accreditations';
import FeaturedCaseStudy from '../components/FeaturedCaseStudy';
import FinalCTA from '../components/FinalCTA';
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
          'url': 'https://www.oshea.co.za',
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
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Standards & Trust Section (Brochure Page 2 style) */}
      <Accreditations />

      {/* 3. Services Pathways (Brochure Page 4 style - 3 pillars) */}
      <Services />

      {/* 4. Social Proof (Single Strong Case Study) */}
      <FeaturedCaseStudy />

      {/* 5. Final CTA */}
      <FinalCTA />
    </>
  );
};

export default HomePage;
