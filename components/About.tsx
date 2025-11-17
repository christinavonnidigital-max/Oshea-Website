
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          <div>
            <h2 className="text-4xl font-bold text-[#0F1A3E] text-center mb-8">About Us</h2>
            <div className="max-w-4xl mx-auto text-center text-gray-700 space-y-4 text-lg">
                <p>
                    <span className="font-bold text-orange-500 text-xl">O'Shea SA</span> is a provider of Management Systems Certification, Inspection, Testing, and Training Services. We partner with organizations across industries to ensure compliance, enhance operational efficiency, and build trust with stakeholders.
                </p>
                <p>
                    <span className="font-bold text-orange-500 text-xl">With</span> a team of highly qualified auditors, inspectors, and technical experts, we deliver independent, impartial, and internationally recognized services that help businesses meet regulatory requirements, achieve global standards, and continuously improve performance across Sub Sahara Africa.
                </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-[#0F1A3E] mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">To be the most trusted partner in certification, inspection, testing, and training — enabling organizations to achieve excellence and sustainability.</p>
            </div>
             <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-[#0F1A3E] mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg">To deliver reliable, value-driven, and internationally recognized services that help our clients meet standards, improve performance, and build stakeholder confidence.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
