
import React from 'react';
import CheckIcon from './icons/CheckIcon';

const whyChooseUsPoints = [
    { title: "Accredited & Recognized", description: "Our certifications are accepted globally." },
    { title: "Expert Team", description: "Auditors, inspectors, and trainers with decades of experience." },
    { title: "Client-Centric Approach", description: "Tailored solutions for your business needs." },
    { title: "Global Reach", description: "Services delivered locally and internationally." },
    { title: "Commitment to Integrity", description: "Impartial, transparent, and ethical practice." }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Why Choose Us?</h2>
          <p className="mt-4 text-lg text-gray-600">Your trusted partner for excellence and sustainability.</p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUsPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 text-green-500 mt-1">
                       <CheckIcon />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-[#0F1A3E]">{point.title}</h4>
                        <p className="text-gray-600">{point.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
