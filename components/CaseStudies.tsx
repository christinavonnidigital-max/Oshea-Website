import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  company: string;
  industry: string;
  location: string;
  challenge: string;
  solution: string;
  standards: string[];
  results: string[];
  timeline: string;
  quote?: string;
  quoteAuthor?: string;
}

const caseStudies: CaseStudy[] = [
  {
    company: "Regional logistics company",
    industry: "Transport & Logistics",
    location: "Gauteng, South Africa",
    challenge: "Growing fleet operation needed ISO 9001 and ISO 45001 to qualify for contracts with multinational mining companies. Had basic safety procedures but no formal management system. Needed certification fast to secure a major 3-year contract.",
    solution: "Completed integrated gap analysis across both standards in one week. Built quality and safety management systems that matched their actual operations - no theoretical nonsense. Conducted pre-audits for drivers and office staff. Managed both certification audits simultaneously.",
    standards: ["ISO 9001:2015", "ISO 45001:2018"],
    results: [
      "Certified in both standards within 4 months",
      "Won R45 million mining contract (certification was mandatory)",
      "Reduced incidents by 35% in first 6 months",
      "Now bidding on international cross-border routes"
    ],
    timeline: "4 months from contact to certificate",
    quote: "We thought we'd need 6-9 months. O'Shea understood our business and moved fast without cutting corners. The certification paid for itself with the first contract.",
    quoteAuthor: "Operations Director"
  },
  {
    company: "Food manufacturing plant",
    industry: "Food & Beverage",
    location: "KwaZulu-Natal, South Africa",
    challenge: "Mid-sized food processor supplying major retail chains. Retailers demanded FSSC 22000 certification to continue stocking their products. Previous consultant delivered templates that didn't match their production reality. Failed first audit badly.",
    solution: "Started from scratch with facility walkthrough and actual production observation. Rewrote HACCP plan based on real processes, not copy-paste. Trained production staff hands-on, not just classroom. Fixed infrastructure gaps (drainage, pest control). Mock audit caught remaining issues before official audit.",
    standards: ["FSSC 22000"],
    results: [
      "Passed certification audit with zero major non-conformances",
      "Retained all retail contracts worth R8 million annually",
      "Reduced product recalls from 4/year to zero",
      "Opened up export opportunities to SADC countries"
    ],
    timeline: "5 months including fixing previous consultant's mess"
  },
  {
    company: "Construction & engineering firm",
    industry: "Construction",
    location: "Western Cape, South Africa",
    challenge: "Mid-tier construction company wanted to bid on government infrastructure projects requiring ISO 9001, ISO 14001, and ISO 45001. Limited administrative capacity and no experience with management systems. Needed certification but couldn't afford to pull people off sites for months.",
    solution: "Designed streamlined system that site managers could actually use on tablets. Conducted training sessions at different sites to minimize downtime. Set up simple digital documentation using tools they already had. Scheduled audits around project timelines.",
    standards: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"],
    results: [
      "Achieved triple certification in 7 months",
      "Qualified for R120 million government tender (previously excluded)",
      "Improved project efficiency - fewer delays and rework",
      "Staff actually use the system (not just audit theater)"
    ],
    timeline: "7 months for all three standards",
    quote: "Most consultants wanted to build some massive bureaucratic system. O'Shea built something our site guys could use with one hand while holding a clipboard.",
    quoteAuthor: "Managing Director"
  },
  {
    company: "IT services provider",
    industry: "Information Technology",
    location: "Johannesburg, South Africa",
    challenge: "Growing software development and cloud services company needed ISO 27001 to win contracts with banks and financial institutions. Complex tech stack, remote teams across Africa, sensitive client data. Previous attempt stalled because generic consultant didn't understand their DevOps workflow.",
    solution: "Mapped information security controls to their existing CI/CD pipeline and cloud architecture. Implemented controls that enhanced security without slowing development. Integrated compliance into their sprint process. Prepared technical team for auditor questions about cloud infrastructure.",
    standards: ["ISO 27001:2013"],
    results: [
      "Certified in 4 months",
      "Secured contracts with 3 major banks worth R15 million",
      "Improved actual security posture (not just paperwork)",
      "Faster sales cycles - certification removes due diligence delays"
    ],
    timeline: "4 months",
    quote: "They understood our tech stack and didn't try to force us into outdated processes. The system we built actually made us more secure.",
    quoteAuthor: "CTO"
  }
];

const CaseStudyCard: FC<{ study: CaseStudy; index: number }> = ({ study, index }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500" />
    
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl font-bold text-orange-500">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <h3 className="text-xl font-bold text-[#0F1A3E]">{study.company}</h3>
              <p className="text-sm text-gray-600">{study.industry} • {study.location}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {study.standards.map((standard, idx) => (
            <span key={idx} className="inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-full">
              {standard}
            </span>
          ))}
        </div>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">The challenge</h4>
        <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">What we did</h4>
        <p className="text-gray-700 leading-relaxed">{study.solution}</p>
      </div>

      {/* Results */}
      <div className="mb-6">
        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Results</h4>
        <ul className="space-y-2">
          {study.results.map((result, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Quote */}
      {study.quote && (
        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-orange-500">
          <p className="text-gray-700 italic mb-2">"{study.quote}"</p>
          <p className="text-sm text-gray-600">— {study.quoteAuthor}</p>
        </div>
      )}

      {/* Timeline */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Timeline:</span> {study.timeline}
        </p>
      </div>
    </div>
  </div>
);

const CaseStudies: FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
            Real results, real businesses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Success stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Companies across South Africa and Sub-Saharan Africa using certification to win bigger contracts, 
            improve operations, and grow their business.
          </p>
        </div>

        <div className="grid gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want results like these? Let's talk about your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
          >
            Get your free consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;