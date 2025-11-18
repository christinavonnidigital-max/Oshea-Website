import React, { type FC } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const FSSC22000Page: FC = () => {
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
        title="FSSC 22000 Certification South Africa"
        description="Get GFSI-recognized FSSC 22000 food safety certification with O'Shea SA. Expert guidance for manufacturers in South Africa and Sub-Saharan Africa. Secure retail contracts and export opportunities."
        keywords="FSSC 22000, food safety certification, GFSI, HACCP, South Africa, ISO 22000, Food Defense, Food Fraud, Food Manufacturing, Retailer Compliance"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'FSSC 22000 Certification',
          'serviceType': 'Food Safety Management System Certification',
          'provider': {
            '@type': 'Organization',
            'name': "O'Shea SA",
            'url': 'https://www.oshea.co.za'
          },
          'description': 'Comprehensive FSSC 22000 certification services including gap analysis, system development, training, and auditing for food manufacturers.',
          'areaServed': {
            '@type': 'Continent',
            'name': 'Africa'
          },
          'audience': {
            '@type': 'Audience',
            'audienceType': 'Food Manufacturers and Processors'
          }
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F1A3E] to-[#1a2b5f] text-white py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-orange-300 mb-4">
              Food Safety System Certification
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              FSSC 22000 Certification South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Get GFSI-recognized food safety certification. Supply major retailers. Export to international markets. 
              We know food manufacturing - from HACCP to food defense.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
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
              <div className="text-3xl font-bold text-orange-500 mb-1">5-8</div>
              <div className="text-sm text-gray-600">Months to certify</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">GFSI</div>
              <div className="text-sm text-gray-600">Globally recognized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">Major</div>
              <div className="text-sm text-gray-600">Retailer approved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">Export</div>
              <div className="text-sm text-gray-600">International ready</div>
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
                    Our FSSC 22000 services are backed by international accreditation, ensuring your certification is accepted by major retailers, food service companies, and global supply chain partners.
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

      {/* What is FSSC 22000 */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-6">
              What is FSSC 22000?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                FSSC 22000 is ISO 22000 plus additional food safety requirements. It's recognized by the Global Food 
                Safety Initiative (GFSI), which means major retailers accept it without requiring their own audits.
              </p>
              <p>
                In practical terms: if you want to supply Woolworths, Pick n Pay, Shoprite, or export to Europe, 
                they'll ask for GFSI-approved certification. FSSC 22000 is one of the most widely accepted schemes.
              </p>
              <p>
                It covers everything from HACCP and prerequisite programs to food defense (protecting against 
                intentional contamination) and food fraud prevention (adulteration, substitution).
              </p>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">FSSC 22000 vs ISO 22000</h3>
              <p className="text-gray-700 mb-3">
                ISO 22000 is a solid food safety standard, but it's not GFSI-recognized. Major retailers want 
                GFSI certification. FSSC 22000 builds on ISO 22000 with extra requirements that meet GFSI criteria.
              </p>
              <p className="text-gray-700">
                <strong>Bottom line:</strong> If you're supplying large retailers or exporting, go straight for FSSC 22000. 
                Don't do ISO 22000 first and then upgrade - it wastes time and money.
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
              Who needs FSSC 22000 certification?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-orange-200">
                <h3 className="font-bold text-lg text-orange-700 mb-4">You must have it for:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1 flex-shrink-0">■</span>
                    <span>Supplying major retail chains (Woolworths, Pick n Pay, Checkers, Spar)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1 flex-shrink-0">■</span>
                    <span>Exporting to Europe or North America (GFSI required)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1 flex-shrink-0">■</span>
                    <span>Supplying to large food manufacturers (Nestlé, Unilever, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-1 flex-shrink-0">■</span>
                    <span>Private label manufacturing for retailers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-4">Applies to these categories:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Food processing & manufacturing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Food ingredients production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Food packaging materials (direct contact)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Animal feed production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Dairy, meat, bakery, beverages, prepared foods</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-2 border-yellow-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Not for food service or retail</h3>
              <p className="text-gray-700">
                FSSC 22000 is for manufacturers and processors. If you run a restaurant, catering business, 
                or retail food store, you don't need FSSC. You might need HACCP or ISO 22000, but not FSSC 22000.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              What FSSC 22000 actually requires
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">1. Full ISO 22000 compliance</h3>
                <p className="text-gray-700 mb-3">This is the foundation - HACCP-based food safety management system.</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• HACCP plan for all products and processes</li>
                  <li>• Prerequisite programs (cleaning, pest control, maintenance)</li>
                  <li>• Traceability system (raw materials to finished product)</li>
                  <li>• Supplier approval and monitoring</li>
                  <li>• Product recall procedures</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">2. Additional prerequisite programs (PRPs)</h3>
                <p className="text-gray-700 mb-3">FSSC requires more detailed PRPs than basic ISO 22000.</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Product contamination control (physical, chemical, biological)</li>
                  <li>• Allergen management program</li>
                  <li>• Personnel hygiene and health requirements</li>
                  <li>• Water quality management</li>
                  <li>• Compressed air quality (if food contact)</li>
                  <li>• Waste and waste water management</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">3. Food defense plan</h3>
                <p className="text-gray-700 mb-3">Protection against intentional contamination or sabotage.</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Site security assessment and controls</li>
                  <li>• Access control to production areas</li>
                  <li>• Personnel security screening</li>
                  <li>• Storage security for ingredients and chemicals</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">4. Food fraud prevention</h3>
                <p className="text-gray-700 mb-3">Systems to identify and prevent adulteration, substitution, dilution.</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Vulnerability assessment for all ingredients</li>
                  <li>• Supplier verification and audits</li>
                  <li>• Testing and analysis programs</li>
                  <li>• Supply chain transparency</li>
                  <li>• Regular updates on fraud trends</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">5. Additional GFSI requirements</h3>
                <p className="text-gray-700 mb-3">Extra elements that make it GFSI-recognized.</p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Environmental monitoring (pathogen testing in production zones)</li>
                  <li>• Enhanced traceability (lot-to-lot tracking)</li>
                  <li>• Stronger management commitment requirements</li>
                  <li>• Annual unannounced audits after initial certification</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <p className="text-gray-800">
                <strong>Reality check:</strong> FSSC 22000 is more demanding than ISO 22000. The additional requirements 
                around food defense, fraud prevention, and environmental monitoring require new programs, not just documentation. 
                Budget 5-8 months and invest in proper implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              How we get you FSSC 22000 certified
            </h2>
            <div className="space-y-6">
              {[
                {
                  phase: "Month 1",
                  title: "Facility assessment & gap analysis",
                  desc: "We visit your facility, observe production, review existing food safety programs. Assess against FSSC requirements. Identify what's missing or needs strengthening."
                },
                {
                  phase: "Month 2-3",
                  title: "Prerequisite programs & HACCP",
                  desc: "Develop or upgrade PRPs (cleaning, pest control, allergen management, etc.). Complete HACCP study for all products. Set up food defense and fraud prevention programs."
                },
                {
                  phase: "Month 4-5",
                  title: "Environmental monitoring & testing",
                  desc: "Establish pathogen monitoring program for production zones. Set up testing schedules and procedures. Train staff on sampling and analysis."
                },
                {
                  phase: "Month 6",
                  title: "Documentation & training",
                  desc: "Finalize all procedures, work instructions, forms. Train production staff, quality team, management. Make sure everyone knows their role."
                },
                {
                  phase: "Month 7",
                  title: "Internal audit & pre-audit",
                  desc: "Run internal audit across all requirements. We conduct thorough pre-audit focusing on common failure points. Fix any gaps before certification audit."
                },
                {
                  phase: "Month 8",
                  title: "Certification audit & certificate",
                  desc: "FSSC certification body conducts 2-4 day audit (depends on facility size). Address any minor findings. Certificate issued, valid 3 years with annual surveillance."
                }
              ].map((item) => (
                <div key={item.phase} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 px-4 py-2 bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-full font-bold text-sm">
                    {item.phase}
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
                <strong>Total timeline:</strong> 5-8 months depending on your current state. 
                If you already have ISO 22000, we can fast-track the additional requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors"
              >
                Start FSSC 22000 certification
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Common FSSC 22000 challenges (and how we solve them)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">❌ Challenge: Environmental monitoring</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Many facilities don't have pathogen testing programs. Setting up Zone 1-4 monitoring, sampling procedures, 
                  and lab relationships is new territory.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  ✓ Our approach: We help you design practical sampling plans, connect you with accredited labs, 
                  and train staff on proper swabbing technique. Start simple, scale up.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">❌ Challenge: Food defense</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Intentional contamination seems theoretical until auditors ask about site security, 
                  visitor controls, and chemical storage access.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  ✓ Our approach: Risk-based assessment of your facility. Focus on realistic threats. 
                  Practical controls that don't require fortress-level security.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">❌ Challenge: Food fraud prevention</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Identifying fraud vulnerabilities in ingredients and supply chains requires industry knowledge 
                  and threat intelligence most facilities don't have.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  ✓ Our approach: We use databases of known fraud trends. Help you assess supplier risk. 
                  Set up verification testing that's cost-effective.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">❌ Challenge: Annual unannounced audits</h3>
                <p className="text-gray-700 text-sm mb-3">
                  After initial certification, one surveillance audit per year is unannounced. 
                  You can't just prepare the week before.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  ✓ Our approach: Build systems you actually use every day, not audit theater. 
                  Regular check-ins to maintain standards. Internal audits to stay ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              FSSC 22000 FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: "Can I start with ISO 22000 and upgrade to FSSC later?",
                  a: "You can, but it's not efficient. If major retailers or export markets are your goal, go straight for FSSC 22000. The additional requirements (food defense, fraud prevention, enhanced PRPs) aren't simple add-ons - they need proper implementation. Don't pay for two separate certifications."
                },
                {
                  q: "How much does FSSC 22000 cost?",
                  a: "For small to medium food processors: R80k-R200k including consultant fees and certification body fees. Larger facilities with multiple production lines: R200k-R400k+. Depends on facility size, product complexity, and current state of food safety systems."
                },
                {
                  q: "We already have HACCP. Do we still need FSSC?",
                  a: "If you're supplying major retailers, yes. HACCP is part of FSSC 22000, but FSSC is way more comprehensive. Think of HACCP as one chapter in the FSSC book. Major retailers require GFSI certification, and HACCP alone doesn't meet that."
                },
                {
                  q: "What's the difference between FSSC 22000 and BRC or IFS?",
                  a: "All three are GFSI-recognized, so retailers accept them. FSSC 22000 is based on ISO 22000 (international standard). BRC is popular in UK markets. IFS is big in Europe. For South African manufacturers, FSSC 22000 is usually the best choice - ISO-based, globally recognized, and what most SA retailers prefer."
                },
                {
                  q: "Do small manufacturers need FSSC 22000?",
                  a: "Depends on your customers. If you're selling direct to consumers or small retailers, probably not - HACCP or ISO 22000 might be enough. But if you want to supply Woolworths, Pick n Pay, or any major chain, they'll require GFSI certification like FSSC 22000."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
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
              Ready to supply major retailers?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get GFSI-recognized FSSC 22000 certification. Unlock retail contracts. 
              Export internationally. 5-8 month timeline with expert support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Start FSSC 22000 certification
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

export default FSSC22000Page;