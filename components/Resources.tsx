import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface Resource {
  title: string;
  description: string;
  type: 'PDF' | 'Checklist' | 'Guide';
  size?: string;
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    title: "O'Shea SA Services Brochure",
    description: "Complete overview of our certification, inspection, and training services. Standards we cover, industries we serve, and our TÜV NORD partnership details.",
    type: "PDF",
    size: "2.4 MB",
    downloadUrl: "#"
  },
  {
    title: "ISO 9001 Readiness Checklist",
    description: "Self-assessment tool to see where you stand before starting certification. Covers all key requirements - processes, documentation, management review, internal audits.",
    type: "Checklist",
    downloadUrl: "#"
  },
  {
    title: "FSSC 22000 Implementation Guide",
    description: "Step-by-step guide for food manufacturers pursuing FSSC certification. Prerequisite programs, HACCP development, food defense, and common audit findings.",
    type: "Guide",
    downloadUrl: "#"
  },
  {
    title: "ISO 27001 Gap Analysis Template",
    description: "Assess your information security controls against ISO 27001 requirements. Covers all Annex A controls with guidance on evidence needed for certification.",
    type: "Checklist",
    downloadUrl: "#"
  },
  {
    title: "Multi-Standard Integration Guide",
    description: "How to implement ISO 9001, 14001, and 45001 together efficiently. Shared requirements, integrated documentation, and cost-saving strategies.",
    type: "Guide",
    downloadUrl: "#"
  },
  {
    title: "Certification Cost Estimator",
    description: "Interactive tool to estimate certification costs based on your company size, industry, and standards needed. Includes implementation, audit, and annual surveillance fees.",
    type: "PDF",
    size: "850 KB",
    downloadUrl: "#"
  },
  {
    title: "Internal Audit Program Template",
    description: "Ready-to-use template for establishing internal audit programs. Audit schedules, checklists, reporting forms, and corrective action tracking.",
    type: "Guide",
    downloadUrl: "#"
  },
  {
    title: "Certificate Verification Guide",
    description: "How to verify the authenticity of ISO certificates - checking accreditation marks, validating certificate numbers, and spotting fake certificates.",
    type: "Guide",
    downloadUrl: "#"
  }
];

const typeColors = {
  'PDF': 'bg-red-100 text-red-700',
  'Checklist': 'bg-green-100 text-green-700',
  'Guide': 'bg-blue-100 text-blue-700'
};

const ResourceCard: FC<{ resource: Resource }> = ({ resource }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow group">
    <div className="flex items-start justify-between mb-3">
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors[resource.type]}`}>
        {resource.type}
      </span>
      {resource.size && (
        <span className="text-xs text-gray-500">{resource.size}</span>
      )}
    </div>
    
    <h3 className="text-lg font-bold text-[#0F1A3E] mb-2 group-hover:text-orange-600 transition-colors">
      {resource.title}
    </h3>
    
    <p className="text-sm text-gray-600 leading-relaxed mb-4">
      {resource.description}
    </p>
    
    <button
      onClick={() => {
        // In production, this would trigger actual download
        alert('Download functionality will be connected to actual files. This is a demo.');
      }}
      className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md px-2 py-1"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download
    </button>
  </div>
);

const Resources: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
            Free resources to help you get started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Downloads & resources
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Guides, checklists, and templates to help you understand certification requirements and prepare for audits. 
            All free, no email signup required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border-2 border-orange-200 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">
            Need personalized guidance?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            These resources are helpful, but every business is different. Get a free consultation where we assess your specific situation and recommend the best path forward.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
          >
            Book free consultation
          </Link>
        </div>

        {/* Certificate verification section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-[#0F1A3E] rounded-2xl p-8 text-white text-center">
            <h3 className="text-xl font-bold mb-3">Verify a certificate</h3>
            <p className="text-gray-300 mb-6">
              Check if an ISO certificate is legitimate by searching the TÜV NORD certificate database.
            </p>
            <a
              href="https://www.tuev-nord.de/en/company/certification/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0F1A3E] font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Verify certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;