import React from 'react';

const standards = [
  { code: "ISO 9001", name: "Quality Management" },
  { code: "ISO 14001", name: "Environmental Management" },
  { code: "ISO 45001", name: "Occupational Health & Safety" },
  { code: "ISO 27001", name: "Information Security" },
  { code: "ISO 22000", name: "Food Safety Management" },
  { code: "ISO 50001", name: "Energy Management" }
];

const Certifications: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Accredited Standards & Certifications
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {standards.map((std, idx) => (
            <div key={idx} className="group p-6 rounded-lg border border-gray-200 hover:border-brand-blue hover:bg-brand-light/10 transition-colors cursor-default">
              <div className="text-2xl font-bold text-brand-blue mb-2">{std.code}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{std.name}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-50 rounded-xl inline-block">
          <p className="text-gray-600">
            All certifications are issued in cooperation with <strong className="text-gray-900">TÜV NORD CERT GmbH</strong>, ensuring international recognition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;