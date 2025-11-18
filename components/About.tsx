import type { FC } from 'react';
import { Link } from 'react-router-dom';

const About: FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 -mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 pt-16">
          
          <div>
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
                About O'Shea SA
              </span>
              <h2 className="text-4xl font-bold text-[#0F1A3E] mb-4">
                Your excellence in execution
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                We're a South African certification body operating as a cooperation partner of TÜV NORD CERT GmbH. That means your certificates carry full international weight while being issued by people who understand how business actually works here.
              </p>

              <p>
                Based in Bryanston, we serve clients across Sub-Saharan Africa - from Johannesburg manufacturers to cross-border logistics operators in the SADC region. Mining companies in Zambia, food processors in Kenya, IT firms in Nigeria. If you need ISO certification and operate in Africa, we get your reality.
              </p>

              <p>
                Here's what we don't do: we don't sell you theoretical perfection from a consultant playbook. We don't build management systems that look impressive but nobody uses. We don't drag out the process to rack up billable hours.
              </p>

              <p>
                What we do: build quality systems around how your business actually operates. Get you certified in 3-6 months, not 12-18. Make sure you pass the first audit because our pre-audits catch issues early. Give you documentation your team will actually use instead of binders gathering dust.
              </p>

              <p>
                We know load shedding affects audit scheduling. We know SADC cross-border operations have unique compliance requirements. We know South African businesses operate differently than European textbook examples. We work with your reality, not against it.
              </p>

              <div className="bg-[#0F1A3E] rounded-2xl p-8 text-white mt-8">
                <p className="text-xl font-semibold mb-4">
                  Bottom line: We're here to get you certified, improve your operations, and help you win bigger contracts - not to create bureaucratic systems that slow you down.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E]"
                >
                  Let's talk about your certification
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-orange-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                  V
                </div>
                <h3 className="text-2xl font-bold text-[#0F1A3E]">Our vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be the most trusted certification partner in Sub-Saharan Africa - known for moving fast, building practical systems, and helping businesses actually use certification to grow.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">
                  M
                </div>
                <h3 className="text-2xl font-bold text-[#0F1A3E]">Our mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Deliver internationally recognized certification services that companies can actually implement, maintain, and benefit from - without the complexity and delays typical of certification processes.
              </p>
            </div>
          </div>

          {/* Core values */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-[#0F1A3E] mb-6 text-center">What drives us</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Results over process</h4>
                <p className="text-sm text-gray-600">Certification should improve your business, not just add paperwork.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Speed matters</h4>
                <p className="text-sm text-gray-600">Every month delayed is opportunity cost. We move fast without cutting corners.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Partnership approach</h4>
                <p className="text-sm text-gray-600">We're not vendors - we're invested in your success and long-term relationship.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Practical expertise</h4>
                <p className="text-sm text-gray-600">We've seen it all across industries. We know what works in real operations.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;