import React from "react";
const standards = ["ISO 9001","ISO 14001","ISO 45001","ISO 22000","ISO 27001","ISO 50001","IATF 16949","HACCP","FSSC 22000","IFS Food","eIDAS"];
const Standards: React.FC = () => (
  <section className="bg-gray-50 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Standards We Support</h2>
      <p className="text-gray-600 text-center mt-3">Accredited certification and guidance across leading international standards.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {standards.map(s => (
          <div key={s} className="bg-white rounded-lg border text-center px-4 py-3 text-sm font-medium text-gray-800">{s}</div>
        ))}
      </div>
    </div>
  </section>
);
export default Standards;