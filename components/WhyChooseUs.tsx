import React from "react";
import { Link } from "react-router-dom";

const reasons = [
  {
    title: "We're local with global credentials",
    text: "Based in Bryanston, certified through TÜV NORD Germany. You get international recognition without dealing with overseas consultants who don't understand South African business realities. We know SADC cross-border operations, load shedding workarounds, and local compliance requirements.",
  },
  {
    title: "We build systems you'll actually use",
    text: "Too many consultants deliver theoretical perfection that looks great on paper but dies in practice. We build quality systems around how your business actually operates - documentation your team will use, not binders that gather dust. Our pre-audits catch issues before the real thing.",
  },
  {
    title: "Fast turnaround, first-time pass rate",
    text: "Most clients go from contact to certificate in 3-6 months. We don't drag it out because we're paid by the hour. Our thorough pre-audits mean you rarely get major non-conformances. Failed audits waste time and money - we make sure you pass the first time.",
  },
  {
    title: "One partner for multiple standards",
    text: "Need ISO 9001, 14001, and 45001? We do integrated audits - saves you 30% compared to certifying separately. One relationship, one process, certificates that work together. Add new standards later without starting from scratch.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
            What makes us different
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Why work with O'Shea SA
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            We're not just another certification body. Here's what actually sets us apart.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-[#E4E7F1] px-6 py-6 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500">
                  <span className="text-lg font-bold text-white">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F1A3E] mb-2 text-lg">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{reason.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Bottom line: We get you certified faster, make sure you pass the first time, and build systems that actually improve your business - not just tick boxes for auditors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
          >
            See if we're a good fit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;