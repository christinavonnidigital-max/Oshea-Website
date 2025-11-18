import type { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 -mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 pt-16">
          
          <div>
            <h2 className="text-4xl font-bold text-[#0F1A3E] text-center mb-12">About Us</h2>
            <div className="max-w-4xl mx-auto text-gray-700 space-y-8 text-lg">
                <p className="leading-relaxed">
                    <span className="text-5xl font-bold text-orange-500 float-left mr-2 mt-1">O</span>'Shea SA is a provider of Management Systems Certification, Inspection, Testing, and Training Services. We partner with organizations across industries to ensure compliance, enhance operational efficiency, and build trust with stakeholders.
                </p>
                <p className="leading-relaxed">
                    <span className="text-5xl font-bold text-orange-500 float-left mr-2 mt-1">W</span>ith a team of highly qualified auditors, inspectors, and technical experts, we deliver independent, impartial, and internationally recognized services that help businesses meet regulatory requirements, achieve global standards, and continuously improve performance across Sub Sahara Africa.
                </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-3xl font-bold text-[#0F1A3E] mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg">To be the most trusted partner in certification, inspection, testing, and training — enabling organizations to achieve excellence and sustainability.</p>
            </div>
             <div className="bg-white p-8 rounded-lg shadow-md">
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