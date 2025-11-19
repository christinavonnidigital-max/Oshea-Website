import type { FC } from 'react';

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
           <h2 className="text-4xl font-bold text-[#0F1A3E] mb-4">Your Excellence in Execution</h2>
           <div className="h-1 w-20 bg-gradient-to-r from-[#FFC107] to-[#DC3545] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#FFC107]">
            <h3 className="text-2xl font-bold text-[#FFC107] mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted partner in certification, inspection, 
              testing, and training — enabling organizations to achieve 
              excellence and sustainability.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#FD7E14]">
            <h3 className="text-2xl font-bold text-[#FD7E14] mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver reliable, value-driven, and internationally 
              recognized services that help our clients meet standards, 
              improve performance, and build stakeholder confidence.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#DC3545]">
            <h3 className="text-2xl font-bold text-[#DC3545] mb-4">Values</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-[#DC3545] mr-2 font-bold">•</span>
                <span><strong>Integrity</strong> – Uncompromising commitment to ethical practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC3545] mr-2 font-bold">•</span>
                <span><strong>Excellence</strong> – Delivering services that exceed expectations</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC3545] mr-2 font-bold">•</span>
                <span><strong>Innovation</strong> – Adapting to evolving industry needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#DC3545] mr-2 font-bold">•</span>
                <span><strong>Partnership</strong> – Building long-term relationships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;