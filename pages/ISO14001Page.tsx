import React, { useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const FAQItem: FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-start focus:outline-none bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-green-600' : 'text-[#0F1A3E]'}`}>
          {question}
        </h3>
        <span className={`flex-shrink-0 mt-1 p-1 rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed border-t border-gray-50 bg-gray-50/50">
            <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  );
};

const ISO14001Page: FC = () => {
  const scrollToRequirements = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('requirements');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <Seo
        title="ISO 14001 Certification South Africa"
        description="Achieve ISO 14001 certification with O'Shea SA. Expert Environmental Management Systems (EMS) certification to reduce waste, ensure compliance, and meet ESG goals."
        keywords="ISO 14001, Environmental Management System, EMS Certification, Green Business, Sustainability, Waste Management, ESG Compliance, South Africa"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'ISO 14001 Certification',
          'serviceType': 'Environmental Management System Certification',
          'provider': {
            '@type': 'Organization',
            'name': "O'Shea SA",
            'url': 'https://www.oshea.co.za'
          },
          'description': 'Professional ISO 14001 certification services including environmental aspects assessment, legal compliance, and system implementation.',
          'areaServed': {
            '@type': 'Continent',
            'name': 'Africa'
          }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F1A3E] to-[#1a2b5f] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-green-300 mb-4">
              Environmental Management Systems
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ISO 14001 Certification South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Manage your environmental impact, meet ESG requirements, and reduce waste and energy costs. 
              ISO 14001 proves you're taking environmental responsibility seriously - not just greenwashing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Get certified
              </Link>
              <a
                href="#requirements"
                onClick={scrollToRequirements}
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
              >
                See requirements
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">3-5</div>
              <div className="text-sm text-gray-600">Months to certify</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">ESG</div>
              <div className="text-sm text-gray-600">Compliance support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">Lower</div>
              <div className="text-sm text-gray-600">Energy & waste costs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">Faster</div>
              <div className="text-sm text-gray-600">With ISO 9001</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISO 14001 */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-6">
              What is ISO 14001?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                ISO 14001 is the internationally recognized standard for Environmental Management Systems (EMS). 
                It provides a framework for organizations to design and implement an EMS, and continually improve 
                their environmental performance.
              </p>
              <p>
                It doesn't dictate specific environmental performance criteria (like "you must recycle 50% of waste"). 
                Instead, it requires you to identify your impacts, set your own targets for improvement, and have 
                robust systems to achieve them and stay compliant with laws.
              </p>
              <p>
                In a world increasingly focused on sustainability and ESG (Environmental, Social, and Governance), 
                ISO 14001 is the credibility badge that proves you are actually managing your environmental responsibilities, 
                not just talking about them.
              </p>
            </div>

            <div className="mt-8 bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">Integrated Management Systems</h3>
              <p className="text-gray-700 mb-3">
                ISO 14001 shares the same High Level Structure (Annex SL) as ISO 9001 (Quality) and ISO 45001 (Safety). 
                This means you can integrate all three into one efficient management system.
              </p>
              <p className="text-gray-700">
                <strong>Our tip:</strong> If you already have ISO 9001, adding ISO 14001 is much faster because 
                you already have the core management procedures in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs It */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Who needs ISO 14001 certification?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                <h3 className="font-bold text-lg text-green-700 mb-4">High-impact industries (essential):</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">■</span>
                    <span>Manufacturing & Industrial production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">■</span>
                    <span>Mining and extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">■</span>
                    <span>Chemical and pharmaceutical processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">■</span>
                    <span>Waste management and recycling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1 flex-shrink-0">■</span>
                    <span>Construction and infrastructure</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-4">Strategic advantage for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Suppliers to large corporates with ESG commitments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Logistics and transport companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Energy service providers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Exporters to Europe (stringent environmental rules)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Companies bidding on government tenders</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Benefits of ISO 14001
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost savings</h3>
                <p className="text-sm text-gray-700">
                  Reducing waste, energy consumption, and water usage directly impacts your bottom line. 
                  ISO 14001 helps you identify and capture these savings systematically.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Regulatory compliance</h3>
                <p className="text-sm text-gray-700">
                  Avoid fines and legal issues. We help you build a legal register and compliance evaluation 
                  process so you know exactly which environmental laws apply to you.
                </p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-teal-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">ESG Credibility</h3>
                <p className="text-sm text-gray-700">
                  Investors and clients are asking for ESG credentials. ISO 14001 is the global standard 
                  for the "E" in ESG. It gives you verifiable proof of your commitment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              What ISO 14001 requires
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">1. Environmental Aspects & Impacts</h3>
                <p className="text-gray-700 mb-3">
                  Identify how your business interacts with the environment (emissions, waste, resource use) 
                  and determine which ones are significant. This is the core of the system.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">2. Compliance Obligations</h3>
                <p className="text-gray-700 mb-3">
                  Know exactly which environmental laws and regulations apply to you (NEMA, Air Quality Act, 
                  Waste Act, local bylaws). Maintain a legal register and check compliance regularly.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-teal-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">3. Environmental Objectives</h3>
                <p className="text-gray-700 mb-3">
                  Set specific, measurable goals to improve. E.g., "Reduce electricity consumption by 10% in 2024" 
                  or "Divert 80% of waste from landfill." Have a plan to achieve them.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">4. Operational Planning & Control</h3>
                <p className="text-gray-700 mb-3">
                  Procedures to manage your significant impacts. Waste handling procedures, chemical storage 
                  controls, maintenance of emission control equipment.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">5. Emergency Preparedness</h3>
                <p className="text-gray-700 mb-3">
                  Plan for environmental emergencies like chemical spills, fires, or gas leaks. 
                  Train staff on how to respond to minimize environmental damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Our certification process
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Environmental Review (Week 1)",
                  desc: "We visit your site to identify your environmental aspects and impacts. Review your current compliance status and existing controls."
                },
                {
                  step: "2",
                  title: "System Design (Month 1-2)",
                  desc: "Develop the EMS framework. Create the legal register, aspects register, and environmental policy. Set objectives and targets."
                },
                {
                  step: "3",
                  title: "Implementation (Month 3)",
                  desc: "Roll out procedures. Train staff on waste segregation, spill response, and energy saving. Implement operational controls."
                },
                {
                  step: "4",
                  title: "Internal Audit & Pre-audit (Month 4)",
                  desc: "We conduct a full internal audit to check readiness. Identify and fix gaps before the certification body arrives."
                },
                {
                  step: "5",
                  title: "Certification Audit (Month 4-5)",
                  desc: "TÜV NORD auditors verify your system. Address any findings. Receive your internationally recognized ISO 14001 certificate."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              ISO 14001 FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Does ISO 14001 require us to be completely 'green'?",
                  a: "No. It requires you to have a system to manage and improve your environmental impact. You don't have to be carbon neutral overnight. It's about commitment to continuous improvement and compliance."
                },
                {
                  q: "How is this different from ISO 9001?",
                  a: "ISO 9001 focuses on customer satisfaction and product quality. ISO 14001 focuses on environmental protection and sustainability. They work great together and share the same management structure."
                },
                {
                  q: "Is ISO 14001 mandatory by law?",
                  a: "No, it's a voluntary standard. However, complying with environmental laws (NEMA, etc.) IS mandatory. ISO 14001 helps you ensure you are complying with those laws, reducing your legal risk."
                },
                {
                  q: "Can we integrate 14001 with 45001 (Safety)?",
                  a: "Absolutely. In fact, we highly recommend it. Safety and Environment often sit with the same 'SHE' or 'HSE' manager. Integrated audits save time and money."
                },
                {
                  q: "How long does the certificate last?",
                  a: "Three years, with annual surveillance audits to ensure you're still maintaining the system."
                }
              ].map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0F1A3E] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to prove your environmental commitment?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get ISO 14001 certified. Reduce costs. Mitigate risk. Win tenders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Book free consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                View all standards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ISO14001Page;