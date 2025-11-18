import React from "react";

const reasons = [
  {
    title: "Accredited & recognised",
    text: "Certificates issued under TÜV NORD accreditations with global acceptance.",
  },
  {
    title: "Expert team",
    text: "Auditors, inspectors and trainers with deep industry experience.",
  },
  {
    title: "Client centric approach",
    text: "Solutions tailored to your business, not just the standard.",
  },
  {
    title: "Global reach",
    text: "Services delivered locally with an international network behind us.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Why choose us
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for excellence, compliance and sustainable
            performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl shadow-sm border border-[#E4E7F1] px-6 py-6 flex gap-4"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1A3E]/5">
                <span className="text-lg text-[#1DBF73]">✔</span>
              </div>
              <div>
                <h3 className="font-semibold text-[#0F1A3E] mb-1">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-600">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;