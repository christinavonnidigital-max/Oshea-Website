import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";
import PostLayout from "../../components/PostLayout";

const ISO27001Guide: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>ISO 27001: What African Tech Companies Must Know | O’Shea SA</title>
        <meta
          name="description"
          content="A practical overview of ISO 27001 for Sub-Saharan Africa tech teams — scope, risks, controls, and audit preparation."
        />
        <link rel="canonical" href="https://oshea.co.za/insights/iso-27001-guide" />
      </Helmet>

      <PostLayout
        title="ISO 27001: What African Tech Companies Must Know"
        description="A practical overview for fast-growing teams — scope, risk assessment, Annex A controls, and audit readiness."
        date="2025-11-15"
        readingMinutes={6}
      >
        <p>
          ISO 27001 helps organizations protect information assets with a structured
          Information Security Management System (ISMS). For African tech firms scaling
          across regions and cloud providers, it’s the most credible framework to build
          trust with customers and regulators.
        </p>
        <h2>1) Define Scope & Context</h2>
        <p>
          Start by defining the systems, teams, and locations in scope. Align business
          objectives with security goals and identify key stakeholders. Understanding your 
          organization's context—including internal and external issues—is the foundational 
          step for a successful ISMS.
        </p>
        <h2>2) Risk Assessment & Treatment</h2>
        <p>
          Use a repeatable method to identify, evaluate, and treat risks. You don't need to 
          eliminate every risk, but you must understand them. Map controls to
          your highest-impact risks and document your Statement of Applicability (SoA).
        </p>
        <h2>3) Annex A Controls in Practice</h2>
        <p>
          The standard outlines a comprehensive set of controls. Key areas often include:
        </p>
        <ul>
          <li><strong>Access control and identity management:</strong> Ensuring only the right people have access to critical data.</li>
          <li><strong>Asset inventory and classification:</strong> Knowing what you have and how sensitive it is.</li>
          <li><strong>Operations security:</strong> Including robust backup strategies and logging.</li>
          <li><strong>Supplier management:</strong> Securing your supply chain and third-party dependencies.</li>
          <li><strong>Incident response:</strong> Having a tested plan for when things go wrong.</li>
        </ul>
        <h2>4) Audit Preparation</h2>
        <p>
          The final step before certification is proving your compliance. Train your teams, 
          run internal audits, and close nonconformities before the external certification audit.
        </p>
        <p className="mt-6 font-semibold text-brand-blue">
          Need guidance? O’Shea SA delivers ISO 27001 certification and training under
          TÜV NORD CERT GmbH accreditation — with local insight across Sub-Saharan Africa.
        </p>
      </PostLayout>
    </Layout>
  );
};

export default ISO27001Guide;