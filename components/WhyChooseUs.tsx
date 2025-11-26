import React from "react";
const points = [
  { t: "Accredited & Recognized", d: "Certificates issued under TÜV NORD CERT GmbH accreditations." },
  { t: "Expert Auditors", d: "Decades of auditing, inspection, and training experience." },
  { t: "Client-Centric", d: "Tailored programs aligned to your sector and risks." },
  { t: "Regional Reach", d: "Delivery across Sub-Saharan Africa with global credibility." },
  { t: "Integrity", d: "Independent, impartial, and transparent processes." },
];
const WhyChooseUs: React.FC = () => (
  <section className="bg-blue-50 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 text-center">Why Choose O’Shea SA</h2>
      <div className="grid md:grid-cols-5 gap-6 mt-10">
        {points.map(p => (
          <div key={p.t} className="bg-white rounded-xl p-6 border text-center">
            <h3 className="font-semibold text-gray-900">{p.t}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default WhyChooseUs;