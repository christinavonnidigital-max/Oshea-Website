import React from "react";
import { Link } from "react-router-dom";
import CheckIcon from "./icons/CheckIcon";

const reasons = [
  {
    title: "Accredited & Recognized",
    text: "Our certifications are accepted globally.",
  },
  {
    title: "Expert Team",
    text: "Auditors, inspectors, and trainers with decades of experience.",
  },
  {
    title: "Client-Centric Approach",
    text: "Tailored solutions for your business needs.",
  },
  {
    title: "Global Reach",
    text: "Services delivered locally and internationally.",
  },
  {
    title: "Commitment to Integrity",
    text: "Impartial, transparent, and ethical practice.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-600 text-xs font-bold tracking-wide uppercase mb-4">
              Our Value Proposition
            </span>
            <h2 className="text-4xl font-bold text-[#0F1A3E] mb-6">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Partnering for excellence and sustainable growth.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#FFC107] to-[#DC3545] flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    <CheckIcon /> 
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0F1A3E] text-lg mb-1">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#0F1A3E] text-white font-bold hover:bg-[#1a2b5f] transition-colors shadow-lg hover:shadow-xl"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
             <div className="absolute -inset-4 bg-gradient-to-tr from-[#FFC107] via-[#FD7E14] to-[#DC3545] rounded-[40px] transform rotate-3 opacity-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=75&w=800&auto=format&fit=crop" 
               alt="Professional Team Meeting" 
               className="relative rounded-[32px] shadow-2xl object-cover h-[600px] w-full"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;