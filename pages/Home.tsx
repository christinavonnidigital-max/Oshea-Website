import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Accreditations from "../components/Accreditations";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Team from "../components/Team";
import ContactCTA from "../components/ContactCTA";
import Testimonials from "../components/Testimonials";
import Footprint from "../components/Footprint";

const SITE_URL = "https://www.oshea.co.za";

const Home: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>O'Shea SA | ISO Certification, Inspection & Training in Sub-Saharan Africa</title>
        <meta
          name="description"
          content="Accredited ISO certification, inspection, and training across Sub-Saharan Africa. Trusted cooperation partner of TÜV NORD CERT GmbH."
        />
        <meta property="og:title" content="O'Shea SA | ISO Certification, Inspection & Training" />
        <meta
          property="og:description"
          content="Independent ISO certification and compliance services with regional expertise across Sub-Saharan Africa."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
      </Helmet>
      <Hero />
      <Accreditations />
      <Services />
      <Industries />
      <Footprint />
      <Testimonials />
      <Team />
      <ContactCTA />
    </Layout>
  );
};

export default Home;
