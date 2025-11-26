import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import PostLayout from "../../components/PostLayout";

const ISO22000Basics: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>ISO 22000 & HACCP: Food Safety Basics for Operators | O’Shea SA</title>
        <meta
          name="description"
          content="Core concepts of ISO 22000 and HACCP for food & beverage manufacturers — hazards, PRPs, and documentation."
        />
        <link rel="canonical" href="https://oshea.co.za/insights/iso-22000-haccp-basics" />
      </Helmet>

      <PostLayout
        title="ISO 22000 & HACCP: Food Safety Basics for Operators"
        description="Understand hazards, prerequisite programs, and validation steps to prepare for certification."
        date="2025-11-10"
        readingMinutes={5}
      >
        <p>
          ISO 22000 integrates food safety management with HACCP principles. The focus is
          preventing hazards from farm to fork through structured controls and competence.
          For operators in the food and beverage sector, this standard is the benchmark for 
          safety and quality.
        </p>
        <h2>HACCP in a Nutshell</h2>
        <p>
          Hazard Analysis and Critical Control Points (HACCP) is at the heart of ISO 22000. 
          It involves a systematic approach:
        </p>
        <ul>
          <li><strong>Hazard analysis:</strong> Identifying biological, chemical, physical, and allergen risks.</li>
          <li><strong>Critical Control Points (CCPs):</strong> pinpointing steps where control is essential to prevent or eliminate a hazard.</li>
          <li><strong>Monitoring & Correction:</strong> Establishing limits and defining what to do when limits are breached.</li>
        </ul>
        <h2>Prerequisite Programs (PRPs)</h2>
        <p>
          Before HACCP can be effective, basic conditions and activities must be in place. 
          These include pest control, sanitation, personal hygiene, and supplier approval processes.
        </p>
        <h2>Documentation That Matters</h2>
        <p>
          Clear procedures, training records, and traceability are essential. It's not just about 
          doing the right thing; it's about proving it. Internal audits keep the system effective 
          and are a mandatory requirement ahead of certification.
        </p>
        <p className="mt-6 font-semibold text-brand-blue">
          O’Shea SA supports ISO 22000 certification and workforce training to build a
          strong food safety culture in your facility.
        </p>
      </PostLayout>
    </Layout>
  );
};

export default ISO22000Basics;