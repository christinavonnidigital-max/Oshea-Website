import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InsightsPage from './pages/InsightsPage'; // New Import
import Team from './components/Team'; 
import PageHero from './components/PageHero';
import Industries from './components/Industries';
import InsightDetailPage from './pages/InsightDetailPage';
import PolicyPage from './pages/PolicyPage';

const SITE_URL = "https://www.oshea.co.za";

// Simple wrapper for Team Page
const TeamPageWrapper = () => (
  <Layout>
    <Helmet>
      <title>Leadership Team | O'Shea SA</title>
      <meta
        name="description"
        content="Meet the leadership team guiding O'Shea SA's certification, inspection, and training services."
      />
      <meta property="og:title" content="Leadership Team | O'Shea SA" />
      <meta
        property="og:description"
        content="Learn about the experts behind our ISO certification and compliance services."
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
      />
      <link rel="canonical" href={`${SITE_URL}/team`} />
    </Helmet>
    <PageHero title="Our Leadership" subtitle="Meet the experts driving compliance excellence." />
    <Team />
  </Layout>
);

// Simple wrapper for Industries Page
const IndustriesPageWrapper = () => (
  <Layout>
    <Helmet>
      <title>Industries We Serve | O'Shea SA</title>
      <meta
        name="description"
        content="ISO certification, inspection, and training expertise across manufacturing, energy, construction, and more."
      />
      <meta property="og:title" content="Industries We Serve | O'Shea SA" />
      <meta
        property="og:description"
        content="Support for compliance in key industries across Sub-Saharan Africa."
      />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
      />
      <link rel="canonical" href={`${SITE_URL}/industries`} />
    </Helmet>
    <PageHero 
      title="Expertise Across Critical Industries" 
      subtitle="Compliance support for manufacturing, mining, energy, construction and more."
      backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=75"
    />
    <Industries />
  </Layout>
);

const App: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/industries" element={<IndustriesPageWrapper />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team" element={<TeamPageWrapper />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PolicyPage kind="privacy" />} />
      <Route path="/terms" element={<PolicyPage kind="terms" />} />
      <Route path="/insights" element={<InsightsPage />} /> {/* New Route */}
      <Route path="/insights/:slug" element={<InsightDetailPage />} />
    </Routes>
  );
};

export default App;
