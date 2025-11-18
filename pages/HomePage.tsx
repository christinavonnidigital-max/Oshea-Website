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

const HomePage: FC = () => {
  return (
    <>
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