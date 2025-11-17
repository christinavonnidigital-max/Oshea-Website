
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Industries from './components/Industries';
import WhyChooseUs from './components/WhyChooseUs';
import AIFeature from './components/AIFeature';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Industries />
        <WhyChooseUs />
        <AIFeature />
      </main>
      <Footer />
    </div>
  );
}

export default App;
