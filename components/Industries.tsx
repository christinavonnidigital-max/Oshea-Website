
import React from 'react';

const industries = [
  'Manufacturing',
  'Construction & Engineering',
  'Food & Beverage',
  'Energy & Utilities',
  'Information Technology',
  'Healthcare & Pharmaceuticals',
  'Logistics & Supply Chain',
  'Mining',
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Industries We Serve</h2>
          <p className="mt-4 text-lg text-gray-600">Partnering with organizations across a diverse range of sectors.</p>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {industries.map((industry, index) => (
            <div key={industry} className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md shadow">
              <p className="text-white font-semibold text-lg">{industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;