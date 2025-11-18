import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const LogisticsPage: FC = () => {
  return (
    <div className="bg-white">
      <Seo
        title="ISO Certification for Logistics & Transport"
        description="Specialized ISO 9001 and ISO 45001 certification for logistics companies. Win mining contracts, improve fleet safety, and ensure cross-border compliance with O'Shea SA."
        keywords="Logistics ISO certification, ISO 9001 logistics, ISO 45001 transport, mining contracts logistics, cross-border transport compliance, fleet safety certification"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F1A3E] to-[#1a2b5f] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-orange-300 mb-4">
              ISO Certification for Transport & Logistics
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Win Mining & Corporate Contracts
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get ISO 9001 + 45001 certified. Qualify for tenders requiring certification. 
              Prove quality and safety to major clients. We understand cross-border ops, fleet management, and SADC compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Get certified
              </Link>
              <a
                href="#case-study"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                See logistics success story
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
              <div className="text-3xl font-bold text-orange-500 mb-1">4</div>
              <div className="text-sm text-gray-600">Months to certify (typical)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">30%</div>
              <div className="text-sm text-gray-600">Save with integrated audits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">R45M</div>
              <div className="text-sm text-gray-600">Contract won by client</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">SADC</div>
              <div className="text-sm text-gray-600">Full regional coverage</div>
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
                    Your certificates are issued under international accreditation, ensuring acceptance by mining houses, governments, and multinational corporations across Africa and beyond.
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

      {/* Why Logistics Companies Need Certification */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Why logistics companies get ISO certified
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-200">
                <div className="text-3xl mb-3">🏗️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mining contracts require it</h3>
                <p className="text-gray-700 mb-3">
                  Major mining companies won't even consider you without ISO 9001 and ISO 45001. 
                  It's a hard requirement for most tenders over R10 million.
                </p>
                <p className="text-sm text-orange-700 font-semibold">
                  One client won a R45M contract immediately after certification.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
                <div className="text-3xl mb-3">🏢</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Corporate clients demand it</h3>
                <p className="text-gray-700 mb-3">
                  Large manufacturers, retailers, and construction companies require certified transport suppliers. 
                  It's about liability - they need proof you have systems in place.
                </p>
                <p className="text-sm text-blue-700 font-semibold">
                  ISO 9001 for quality, ISO 45001 for safety.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-200">
                <div className="text-3xl mb-3">🚛</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">International routes need compliance</h3>
                <p className="text-gray-700 mb-3">
                  Cross-border operations into Botswana, Namibia, Zimbabwe, Zambia - international clients want 
                  certified partners. ISO certification is recognized across SADC.
                </p>
                <p className="text-sm text-green-700 font-semibold">
                  Opens doors to cross-border contracts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-3xl mb-3">📉</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reduce incidents & insurance costs</h3>
                <p className="text-gray-700 mb-3">
                  ISO 45001 systematically improves safety. Fewer accidents mean lower workers' comp, 
                  reduced insurance premiums, less downtime. Usually pays for itself.
                </p>
                <p className="text-sm text-purple-700 font-semibold">
                  One client cut incidents by 35% in 6 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Which Standards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Which ISO standards do logistics companies need?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">ISO 9001</h3>
                    <p className="text-sm text-gray-600">Quality Management</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Proves you have reliable systems for fleet management, scheduling, tracking, customer service, 
                  and delivery. Shows you consistently meet customer requirements.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">Covers:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Fleet maintenance procedures</li>
                    <li>• Driver training & competence</li>
                    <li>• Load planning & scheduling</li>
                    <li>• Customer communication</li>
                    <li>• Vehicle inspection processes</li>
                    <li>• Supplier management (fuel, parts)</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">Timeline:</span>
                  <span className="text-gray-700">3-5 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <span className="font-semibold text-gray-900">Investment:</span>
                  <span className="text-gray-700">R30k-R80k (depends on fleet size)</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">ISO 45001</h3>
                    <p className="text-sm text-gray-600">Health & Safety</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  Systematically manages driver safety, vehicle safety, loading/unloading hazards, and emergency 
                  response. Critical for high-risk transport operations.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">Covers:</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Driver fatigue management</li>
                    <li>• Vehicle safety checks</li>
                    <li>• Loading/unloading procedures</li>
                    <li>• Incident investigation</li>
                    <li>• Emergency response plans</li>
                    <li>• PPE requirements</li>
                  </ul>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-900">Timeline:</span>
                  <span className="text-gray-700">3-5 months</span>
                </div>
                <div className="flex items-center gap-2 text-sm mt-2">
                  <span className="font-semibold text-gray-900">Investment:</span>
                  <span className="text-gray-700">R30k-R80k (depends on operations)</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">💡 Smart move: Get both together</h3>
              <p className="text-gray-700 mb-2">
                ISO 9001 and 45001 share the same structure. We can do an integrated audit - one process for both standards.
              </p>
              <p className="text-gray-700">
                <strong>Saves you 30% in time and cost</strong> compared to doing them separately. Plus most mining/corporate 
                clients want both anyway.
              </p>
            </div>

            <div className="mt-6 bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">🌍 Optional: ISO 14001 (Environmental)</h3>
              <p className="text-gray-700">
                If you're targeting ESG-conscious clients or handling hazardous materials, add ISO 14001. Covers emissions, 
                fuel management, waste disposal. Can also be integrated with 9001 and 45001.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
                Real client, real results
              </span>
              <h2 className="text-3xl font-bold text-[#0F1A3E]">
                How a Gauteng logistics company won a R45M contract
              </h2>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-xl border-2 border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-1">7</div>
                  <div className="text-sm text-gray-600">Truck fleet size</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-1">4</div>
                  <div className="text-sm text-gray-600">Months to certify</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-1">2</div>
                  <div className="text-sm text-gray-600">Standards (9001 + 45001)</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">The challenge</h3>
                  <p className="text-gray-700">
                    Growing cross-border operation needed ISO 9001 and ISO 45001 to qualify for contracts with multinational 
                    mining companies. Had basic safety procedures but no formal management system. Needed certification fast to 
                    secure a major 3-year contract worth R45 million - certification was mandatory to even bid.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">What we did</h3>
                  <p className="text-gray-700">
                    Completed integrated gap analysis across both standards in one week. Built quality and safety systems that 
                    matched their actual fleet operations - no theoretical nonsense. Focused on practical procedures drivers could 
                    actually follow. Conducted hands-on training for drivers and office staff. Pre-audits at depot and on routes. 
                    Managed both certification audits simultaneously.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Results</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Certified in both standards within 4 months</strong> - fast enough to bid on the contract</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Won R45 million mining contract</strong> - certification was a hard requirement</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Reduced incidents by 35% in first 6 months</strong> - better safety procedures actually worked</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span><strong>Now bidding on international cross-border routes</strong> - certification opened new markets</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-l-4 border-orange-500">
                  <p className="text-gray-700 italic mb-2">
                    "We thought we'd need 6-9 months. O'Shea understood our business and moved fast without cutting corners. 
                    The certification paid for itself with the first contract."
                  </p>
                  <p className="text-sm text-gray-600">— Operations Director, Regional Logistics Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process for Logistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              How we certify logistics operations
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Understand your operations (Week 1)",
                  desc: "We visit your depot, ride along on routes, talk to drivers and dispatchers. Understand your fleet size, routes (local/cross-border), cargo types, client requirements."
                },
                {
                  title: "Gap analysis (Week 1-2)",
                  desc: "Assess current procedures vs ISO 9001/45001 requirements. Focus on fleet maintenance, driver safety, loading procedures, incident management, customer communication."
                },
                {
                  title: "Build practical systems (Months 2-3)",
                  desc: "Document procedures that match how you actually operate. Vehicle inspection checklists drivers can use. Load planning forms that make sense. Safety procedures for different cargo types. Training that sticks."
                },
                {
                  title: "Pre-audit (Month 4)",
                  desc: "We audit like TÜV NORD will - depot inspection, document review, driver interviews, ride-along observations. Catch and fix issues before the real audit."
                },
                {
                  title: "Certification audit (Month 4)",
                  desc: "TÜV NORD auditors verify everything. We're there to support. Usually 2-3 days depending on fleet size. Minor findings addressed quickly."
                },
                {
                  title: "Certificate & ongoing support",
                  desc: "You get both certificates, valid 3 years. Annual surveillance audits (lighter check-ins). We help you maintain systems and prepare for future audits."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-6">
                <strong>Total timeline:</strong> 4-5 months typical for logistics operations. 
                Can be faster if you already have solid maintenance and safety procedures.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors"
              >
                Start certification process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Questions logistics companies ask
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "We operate across SADC borders. Does certification cover all countries?",
                  a: "Yes. ISO certification through TÜV NORD is internationally recognized. Your certificate is valid everywhere. We understand SADC regulations and cross-border compliance requirements - we'll make sure your systems cover multi-country operations."
                },
                {
                  q: "Our drivers are on the road constantly. How do you train them?",
                  a: "We schedule training at your depot when drivers are available. Short, practical sessions - not full-day lectures. Hands-on with actual checklists and procedures they'll use. We can also do training at different times to catch different shifts."
                },
                {
                  q: "What if we're still growing our fleet?",
                  a: "Not a problem. We design systems that scale. Whether you have 5 trucks now and plan for 20, or have 50 and want to hit 100 - the management system adapts. That's the point of ISO 9001, it handles growth."
                },
                {
                  q: "Do we need different certification for hazmat transport?",
                  a: "No separate ISO standard for hazmat specifically, but ISO 45001 covers hazardous materials handling. We'll ensure your safety procedures address chemical transport, spillage response, driver training for dangerous goods. May also recommend ISO 14001 if environmental impact is significant."
                },
                {
                  q: "We already have some safety procedures from our insurance. Can we use those?",
                  a: "Absolutely. We build on what you have. If your insurance requires certain procedures and they're solid, we incorporate them into the ISO system. No point reinventing the wheel - we just need to make sure everything meets ISO 45001 requirements."
                },
                {
                  q: "What's the actual ROI on certification?",
                  a: "Hard numbers: One client won R45M contract immediately. Another reduced incidents 35%, cutting insurance costs. But even softer benefits matter - faster tender responses, more professional image, better driver retention. Most logistics clients tell us it pays for itself within a year through new contracts."
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
              Ready to qualify for bigger contracts?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get ISO 9001 + 45001 certified. Win mining and corporate tenders. 
              Prove quality and safety to major clients. 4-5 month timeline.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Get free logistics quote
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-semibold border border-white/20 hover:bg-white/20 transition-colors"
              >
                View all industries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsPage;