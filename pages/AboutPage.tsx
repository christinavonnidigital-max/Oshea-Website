import type { FC } from 'react';
import About from '../components/About';
import Seo from '../components/Seo';

const AboutPage: FC = () => {
  // The section IDs are kept for any internal anchor links that might be used.
  return (
    <>
      <Seo
        title="About O'Shea SA"
        description="Learn about O'Shea SA, our mission, vision, and our commitment to being the most trusted partner in certification, inspection, testing, and training in Sub Sahara Africa."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          'mainEntity': {
            '@type': 'Organization',
            'name': "O'Shea SA",
          },
          'name': 'About O\'Shea SA',
          'description': "O'Shea SA is a provider of Management Systems Certification, Inspection, Testing, and Training Services.",
          'url': 'https://www.oshea.co.za/about', // This should be the final canonical URL
        }}
      />
      <About />
    </>
  );
};

export default AboutPage;