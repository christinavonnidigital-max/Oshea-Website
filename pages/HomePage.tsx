
import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Industries />
      <WhyChooseUs />
      <Team />
    </>
  );
};

export default HomePage;