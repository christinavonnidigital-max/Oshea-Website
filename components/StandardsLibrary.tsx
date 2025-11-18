import { useState } from 'react';
import type { FC } from 'react';
import { standardsData, type StandardDetail } from '../data/standardsData';
import { Link } from 'react-router-dom';

const StandardCard: FC<{ 
  standard: StandardDetail; 
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ standard, isExpanded, onToggle }) => (
  <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
    <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500" />
    
    {/* Header - always visible */}
    <div className="p-6 cursor-pointer" onClick={onToggle}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#0F1A3E] mb-1">{standard.code}</h3>
          <p className="text-lg font-semibold text-gray-700 mb-2">{standard.name}</p>
          <p className="text-orange-600 font-medium mb-3">{standard.tagline}</p>
          <p className="text-gray-700 leading-relaxed">{standard.description}</p>
        </div>
        <button 
          className="ml-4 flex-shrink-0 text-3xl font-light text-orange-500 hover:text-orange-600 transition-colors focus:outline-none"
          aria-label={isExpanded ? "Show less" : "Show more"}
        >
          {isExpanded ? '−' : '+'}
        </button>
      </div>

      {/* Industries tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {standard.industries.map((industry, idx) => (
          <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
            {industry}
          </span>
        ))}
      </div>
    </div>

    {/* Expanded content */}
    {isExpanded && (
      <div className="px-6 pb-6 space-y-6 border-t border-gray-100 pt-6">
        
        {/* Who needs it */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Who needs this</h4>
          <ul className="space-y-2">
            {standard.whoNeedsIt.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-500 mt-1 flex-shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key requirements */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Key requirements</h4>
          <ul className="space-y-2">
            {standard.keyRequirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">What you get from certification</h4>
          <ul className="space-y-2">
            {standard.benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-700">
                <span className="text-blue-500 mt-1 flex-shrink-0">★</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges and approach */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Common challenges</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{standard.commonChallenges}</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Our approach</h4>
            <p className="text-sm text-gray-700 leading-relaxed">{standard.ourApproach}</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-2">Typical timeline</h4>
          <p className="text-gray-700">{standard.typicalTimeline}</p>
        </div>

        {/* CTA */}
        <div className="pt-4 border-t border-gray-200">
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
          >
            Get certified in {standard.code}
          </Link>
        </div>
      </div>
    )}
  </div>
);

const StandardsLibrary: FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
            Everything you need to know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Standards we certify
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Detailed breakdown of each standard - what it is, who needs it, what's required, and how we help you get certified.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {standardsData.map((standard, index) => (
            <StandardCard
              key={standard.code}
              standard={standard}
              isExpanded={expandedIndex === index}
              onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
            />
          ))}
        </div>

        <div className="mt-16 bg-[#0F1A3E] rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Not sure which standard you need?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Book a free consultation and we'll help you figure out which certifications make sense for your business goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E]"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StandardsLibrary;