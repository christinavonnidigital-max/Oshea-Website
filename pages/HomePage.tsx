import type { FC } from 'react';
import Hero from '../components/Hero';
import Recognition from '../components/Recognition';
import Accreditations from '../components/Accreditations';
import Services from '../components/Services';
import FinalCTA from '../components/FinalCTA';
import Seo from '../components/Seo';

const HomePage: FC = () => {
  return (
    <>
      <Seo
        title="Your Excellence in Execution"
        description="O'Shea SA provides leading Management Systems Certification, Inspection, Testing, and Training Services as a cooperation partner of TÜV NORD across Sub Sahara Africa."
      />
      
      {/* 1. Hero Section - Navy with curved bottom */}
      <Hero />

      {/* 2. Recognition Strip (White) */}
      <Recognition />

      {/* 3. Standards Section - Navy with curved top */}
      <Accreditations />

      {/* 4. Services Pathways (White/Gray) */}
      <Services />

      {/* 5. Final CTA - Navy */}
      <FinalCTA />
    </>
  );
};

export default HomePage;