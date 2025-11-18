import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const ISO9001Page: FC = () => {
  const scrollToProcess = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('process');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <Seo
        title="ISO 9001 Certification South Africa"
        description="Achieve ISO 9001 certification with O'Shea SA. Expert support for Quality Management Systems (QMS) in South Africa. Win tenders, improve efficiency, and gain global recognition."
        keywords="ISO 9001, Quality Management System, QMS Certification, ISO Consultant South Africa, Business Process Improvement, ISO Audit, Quality Assurance, Tenders, O'Shea SA"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'ISO 9001 Certification',
          'serviceType': 'Quality Management System Certification',
          'provider': {
            '@type': 'Organization',
            'name': "O'Shea SA",
            'url': 'https://www.oshea.co.za'
          },
          'description': 'Professional ISO 9001 certification services including gap analysis, QMS implementation, staff training, and pre-audit support.',
          'areaServed': {
            '@type': 'Continent',
            'name': 'Africa'
          },
          'audience': {
            '@type': 'Audience',
            'audienceType': 'Businesses seeking quality improvement and tender compliance'
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0F1A3E] to-[#1a2b5f] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-orange-300 mb-4">
              Quality Management Systems
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ISO 9001 Certification South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get certified in 3-6 months. Win government tenders. Prove quality to major clients. 
              We'll build a system that actually works for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Get free quote
              </Link>
              <a
                href="#process"
                onClick={scrollToProcess}
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
              >
                How it works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">3-6</div>
              <div className="text-sm text-gray-600">Months to certify</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">95%</div>
              <div className="text-sm text-gray-600">First-time pass rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">Global</div>
              <div className="text-sm text-gray-600">Recognition via TÜV NORD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#0F1A3E] mb-3">Global Recognition</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Our ISO 9001 certification services are backed by international accreditation, ensuring your certificate is accepted by government bodies, global corporations, and industry regulators.
                </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/DAkkS-Logo.svg/320px-DAkkS-Logo.svg.png" 
                    alt="DAkkS - Deutsche Akkreditierungsstelle" 
                    className="h-12 md:h-16 object-contain" 
                    loading="lazy"
                />
                <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/International_Accreditation_Forum_logo.svg/320px-International_Accreditation_Forum_logo.svg.png" 
                    alt="IAF - International Accreditation Forum" 
                    className="h-12 md:h-16 object-contain" 
                    loading="lazy"
                />
                <img 
                    src="https://upload.wikimedia.org/wikipedia/el/thumb/d/d7/ESYD_LOGO.svg/320px-ESYD_LOGO.svg.png" 
                    alt="ESYD Accreditation" 
                    className="h-12 md:h-16 object-contain" 
                    loading="lazy"
                />
            </div>
        </div>
      </section>

      {/* What is ISO 9001 */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-6">
              What is ISO 9001?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                ISO 9001 is the international standard for quality management systems. In plain English: 
                it's proof that you have reliable systems in place to consistently deliver quality products 
                or services to your customers.
              </p>
              <p>
                It's not about being perfect. It's about being consistent, measuring your performance, 
                and continuously improving. When something goes wrong, you have procedures to fix it and 
                prevent it from happening again.
              </p>
              <p>
                ISO 9001 is industry-neutral - manufacturers, construction companies, logistics firms, 
                IT services, professional services, everyone can use it. Over 1 million organizations 
                worldwide are certified.
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
              Do you need ISO 9001 certification?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-green-700 mb-4">You definitely need it if:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Government tenders require ISO 9001 certification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Your clients (especially large corporations) are asking for it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>You supply to OEMs or major manufacturers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>You're exporting and international buyers want proof of quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>You're losing bids to certified competitors</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-blue-700 mb-4">You should consider it if:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>You're growing fast and need better systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Quality problems are costing you money (rework, complaints)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>Operations depend too much on specific people</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>You want to target larger corporate clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">→</span>
                    <span>You're preparing for sale or investment (certification adds value)</span>
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
              What you actually get from ISO 9001
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Access to bigger contracts</h3>
                <p className="text-sm text-gray-700">
                  Government tenders and corporate RFPs often require ISO 9001. Without it, you can't even bid. 
                  With it, you're in the game for contracts worth millions.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fewer quality problems</h3>
                <p className="text-sm text-gray-700">
                  Documented processes mean less variation. Internal audits catch issues early. 
                  Corrective actions prevent repeat mistakes. Result: fewer defects, less rework, happier customers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">More efficient operations</h3>
                <p className="text-sm text-gray-700">
                  Clear procedures mean people know what to do. Process documentation makes training easier. 
                  Measuring performance shows where to improve. Efficiency goes up, costs go down.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Competitive advantage</h3>
                <p className="text-sm text-gray-700">
                  When your competitor isn't certified and you are, you win. Simple as that. 
                  Especially in government and corporate procurement.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Better supplier management</h3>
                <p className="text-sm text-gray-700">
                  ISO 9001 includes supplier evaluation and monitoring. You'll catch problems before 
                  they become crises. Your supply chain becomes more reliable.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Foundation for other standards</h3>
                <p className="text-sm text-gray-700">
                  Once you have ISO 9001, adding ISO 14001 (environmental) or ISO 45001 (safety) is easier. 
                  They share the same structure. Integrated audits save time and money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-6">
              What does ISO 9001 actually require?
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Context & Leadership (Clauses 4-5)</h3>
                <p className="text-gray-700 mb-2">Understand your organization, stakeholders, and set quality objectives. Management needs to be involved - can't delegate this to someone junior.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Planning (Clause 6)</h3>
                <p className="text-gray-700 mb-2">Identify risks and opportunities. Plan how you'll meet quality objectives. Set measurable targets.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Support (Clause 7)</h3>
                <p className="text-gray-700 mb-2">Resources, competent people, appropriate infrastructure. Documented information (procedures, work instructions). Communication processes.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Operations (Clause 8)</h3>
                <p className="text-gray-700 mb-2">This is the heart of it - how you deliver products/services. Planning, customer requirements, design (if applicable), supplier control, production, delivery.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Performance Evaluation (Clause 9)</h3>
                <p className="text-gray-700 mb-2">Monitor and measure performance. Customer satisfaction. Internal audits. Management review meetings.</p>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">Improvement (Clause 10)</h3>
                <p className="text-gray-700 mb-2">Handle nonconformities. Corrective action when things go wrong. Continuous improvement mindset.</p>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <p className="text-gray-800">
                <strong>Reality check:</strong> This sounds like a lot, but most businesses are already doing 
                80% of it. The gap is usually in documentation and formalization, not in actual practice. 
                We help you document what you're already doing well, then fill the gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              How we get you ISO 9001 certified
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Free consultation (1-2 hours)",
                  desc: "We understand your business, why you need ISO 9001, and whether it makes sense. Ballpark timeline and cost."
                },
                {
                  step: "2",
                  title: "Gap analysis (2-5 days)",
                  desc: "We assess what you have vs what ISO 9001 requires. Detailed report showing gaps. Fixed-price quote for closing them."
                },
                {
                  step: "3",
                  title: "System development (6-12 weeks)",
                  desc: "We build your quality management system - documentation, procedures, training. Based on how you actually work, not textbook theory."
                },
                {
                  step: "4",
                  title: "Pre-audit (1-3 days)",
                  desc: "We audit you before TÜV NORD does. Catch and fix issues. This is why our clients pass the first time."
                },
                {
                  step: "5",
                  title: "Certification audit (2-5 days)",
                  desc: "TÜV NORD auditors verify compliance. We support you throughout. Minor findings can be addressed quickly."
                },
                {
                  step: "6",
                  title: "Certificate issued (2-4 weeks)",
                  desc: "You get your ISO 9001 certificate, valid for 3 years. Globally recognized through TÜV NORD accreditation."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                <strong>Total timeline:</strong> 3-6 months from initial contact to certified. 
                Faster if your systems are already solid.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors"
              >
                Start your ISO 9001 journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              ISO 9001 FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I implement ISO 9001 myself without a consultant?",
                  a: "Technically yes, but most companies that try solo end up hiring help after failing the first audit. The standard is complex, and auditors have specific expectations. A consultant saves you time, money, and frustration. Think of us as insurance against wasting 6 months."
                },
                {
                  q: "How long does the certificate last?",
                  a: "Three years. But you'll have annual surveillance audits (lighter than the initial audit) to maintain it. After three years, you go through recertification, which is basically a full audit again."
                },
                {
                  q: "Can we get ISO 9001 and ISO 14001 at the same time?",
                  a: "Yes, and we recommend it if you need both. Integrated audits are faster and cheaper than doing them separately. Both standards share the same structure (Annex SL), so there's significant overlap."
                },
                {
                  q: "What if we fail the certification audit?",
                  a: "There's no real 'fail' - you get minor or major non-conformances that need fixing. Minor issues can be cleared up in 2-4 weeks. Major issues might need another audit in 3-6 months. Good news: our thorough pre-audits mean this rarely happens to our clients."
                },
                {
                  q: "Do we need ISO 9001 to bid on government tenders?",
                  a: "Many government tenders require ISO 9001, especially in construction, manufacturing, and professional services. Check the tender requirements - if it says 'ISO 9001 certified suppliers only,' you need it."
                },
                {
                  q: "Can we lose our certification?",
                  a: "Yes, if you don't maintain the system or fail surveillance audits. Or if you don't pay annual fees. But if you're actually using the system (not just for show), you won't have problems. We provide ongoing support to keep you compliant."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
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
              Ready to get ISO 9001 certified?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Free consultation. Fixed-price quote within 48 hours. 3-6 month timeline. 
              95% first-time pass rate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
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

export default ISO9001Page;