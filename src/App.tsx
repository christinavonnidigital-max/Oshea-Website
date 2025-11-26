import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage';
import Team from './components/Team'; 
import PageHero from './components/PageHero';
import Industries from './components/Industries';

// Blog Posts
import ISO27001Guide from './pages/posts/iso-27001-guide';
import ISO22000Basics from './pages/posts/iso-22000-haccp-basics';

// Simple wrapper for Team Page
const TeamPageWrapper = () => (
  <Layout>
    <PageHero title="Our Leadership" subtitle="Meet the experts driving compliance excellence." />
    <Team />
  </Layout>
);

// Simple wrapper for Industries Page
const IndustriesPageWrapper = () => (
  <Layout>
    <PageHero 
      title="Expertise Across Critical Industries" 
      subtitle="From manufacturing to IT, we support compliance in over 10 sectors."
      backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
    />
    <Industries />
  </Layout>
);

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/industries" element={<IndustriesPageWrapper />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPageWrapper />} />
      <Route path="/contact" element={<ContactPage />} />
      
      {/* Insights & Blog Routes */}
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/iso-27001-guide" element={<ISO27001Guide />} />
      <Route path="/insights/iso-22000-haccp-basics" element={<ISO22000Basics />} />
    </Routes>
  );
};

export default App;