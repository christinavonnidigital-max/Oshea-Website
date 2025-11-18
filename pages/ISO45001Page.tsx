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
        <h3 className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-orange-600' : 'text-[#0F1A3E]'}`}>
          {question}
        </h3>
        <span className={`flex-shrink-0 mt-1 p-1 rounded-full transition-all duration-300 ${isOpen ? 'rotate-180 bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-500'}`}>
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

const ISO45001Page: FC = () => {
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
        title="ISO 45001 Certification South Africa"
        description="Get ISO 45001 certified with O'Shea SA. Expert Occupational Health & Safety Management Systems certification to reduce incidents, ensure OHS Act compliance, and protect your workforce."
        keywords="ISO 45001, health and safety certification, OHS management, OHSAS 18001, workplace safety South Africa, safety consultant"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': 'ISO 45001 Certification',
          'serviceType': 'Occupational Health & Safety Management System Certification',
          'provider': {
            '@type': 'Organization',
            'name': "O'Shea SA",
            'url': 'https://www.oshea.co.za'
          },
          'description': 'Professional ISO 45001 certification services including gap analysis, safety system development, and auditing.',
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
            <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-orange-300 mb-4">
              Occupational Health & Safety Management
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ISO 45001 Certification South Africa
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Keep your people safe, stay compliant with OHS Act requirements, and reduce workplace incidents. 
              ISO 45001 certification proves you're managing health and safety systematically - not just reacting to accidents.
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
              <div className="text-3xl font-bold text-orange-500 mb-1">3-6</div>
              <div className="text-sm text-gray-600">Months to certify</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">35%</div>
              <div className="text-sm text-gray-600">Avg. incident reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">Lower</div>
              <div className="text-sm text-gray-600">Insurance premiums</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">OHS Act</div>
              <div className="text-sm text-gray-600">Compliance support</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ISO 45001 */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-6">
              What is ISO 45001?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                ISO 45001 is the international standard for occupational health and safety management systems. 
                It's about systematically managing workplace health and safety - identifying hazards, assessing risks, 
                and implementing controls to prevent injuries and illnesses.
              </p>
              <p>
                It replaced OHSAS 18001 in 2018 and is now the globally recognized standard for workplace safety. 
                Critical for high-risk industries like construction, manufacturing, mining, and transport where 
                accidents can have serious consequences.
              </p>
              <p>
                ISO 45001 isn't just about compliance with the OHS Act (though it helps with that). It's about 
                creating a safety culture where workers actively participate, hazards are identified before they 
                cause harm, and continuous improvement prevents future incidents.
              </p>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-lg text-gray-900 mb-2">ISO 45001 vs OHSAS 18001</h3>
              <p className="text-gray-700 mb-3">
                OHSAS 18001 was withdrawn in 2021. If you still have OHSAS certification, you need to transition 
                to ISO 45001. The core principles are similar, but ISO 45001 has stronger requirements around 
                worker participation, top management involvement, and risk-based thinking.
              </p>
              <p className="text-gray-700">
                <strong>Good news:</strong> If you had OHSAS 18001, transitioning to ISO 45001 is straightforward. 
                Most of your system will carry over - you'll just need to strengthen a few areas.
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
              Who needs ISO 45001 certification?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border-2 border-red-200">
                <h3 className="font-bold text-lg text-red-700 mb-4">High-risk industries (essential):</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1 flex-shrink-0">■</span>
                    <span>Construction and engineering firms (often mandatory for tenders)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1 flex-shrink-0">■</span>
                    <span>Manufacturing with machinery and hazardous processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1 flex-shrink-0">■</span>
                    <span>Mining operations (surface and underground)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1 flex-shrink-0">■</span>
                    <span>Transport and logistics companies (fleet safety)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1 flex-shrink-0">■</span>
                    <span>Energy sector operations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border-2 border-blue-200">
                <h3 className="font-bold text-lg text-blue-700 mb-4">You should strongly consider it if:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Your clients require certified suppliers (liability concerns)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>You're having too many workplace incidents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>Insurance premiums are killing you (certification can lower them)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>You want to reduce workers' comp claims and downtime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1 flex-shrink-0">→</span>
                    <span>You already have ISO 9001 (easy to integrate both)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Not just for "dangerous" work</h3>
              <p className="text-gray-700">
                Even office environments benefit from ISO 45001. Ergonomics, mental health, stress management, 
                emergency preparedness - all covered. Any organization with employees can use it to systematically 
                manage health and safety risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              What you get from ISO 45001 certification
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fewer workplace accidents</h3>
                <p className="text-sm text-gray-700">
                  Systematic hazard identification and risk controls mean fewer injuries and illnesses. 
                  Our clients typically see 20-40% reduction in incidents within the first year.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Lower insurance costs</h3>
                <p className="text-sm text-gray-700">
                  Better safety record = lower workers' comp and liability insurance premiums. 
                  Certification shows insurers you're serious about risk management.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Access to safety-conscious contracts</h3>
                <p className="text-sm text-gray-700">
                  Construction tenders, mining suppliers, corporate contractors - they all require ISO 45001. 
                  Without it, you can't even bid on major contracts.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-purple-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Better OHS Act compliance</h3>
                <p className="text-sm text-gray-700">
                  ISO 45001 covers most OHS Act requirements. You'll have the documentation and processes 
                  inspectors want to see. Makes compliance audits way less stressful.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-yellow-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Improved worker morale</h3>
                <p className="text-sm text-gray-700">
                  When people see management actually cares about safety (not just talks about it), 
                  morale improves. Worker participation is built into ISO 45001.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Reduced downtime</h3>
                <p className="text-sm text-gray-700">
                  Fewer incidents mean less production downtime, fewer investigations, and less disruption. 
                  Safety incidents are expensive - prevention is way cheaper.
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
              What ISO 45001 actually requires
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">1. Hazard identification and risk assessment</h3>
                <p className="text-gray-700 mb-3">
                  Systematically identify workplace hazards - physical, chemical, biological, psychosocial. 
                  Assess the risk level for each one. Prioritize what needs controlling first.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Routine and non-routine activities</li>
                  <li>• Emergency situations</li>
                  <li>• People (employees, contractors, visitors)</li>
                  <li>• Changes (new equipment, processes, materials)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">2. Safety objectives and targets</h3>
                <p className="text-gray-700 mb-3">
                  Set measurable safety objectives. Not vague goals like "improve safety" - specific targets 
                  like "reduce lost time injuries by 30%" or "achieve zero critical incidents."
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Measurable and time-bound</li>
                  <li>• Aligned with safety policy</li>
                  <li>• Regularly reviewed and updated</li>
                  <li>• Communicated to relevant workers</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">3. Worker participation and consultation</h3>
                <p className="text-gray-700 mb-3">
                  This is huge in ISO 45001. Workers must be involved in safety decisions, hazard identification, 
                  incident investigations. Not token involvement - actual participation with influence.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Safety committees or representatives</li>
                  <li>• Consultation on changes affecting safety</li>
                  <li>• Access to safety information</li>
                  <li>• Right to report hazards without retaliation</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-purple-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">4. Emergency preparedness and response</h3>
                <p className="text-gray-700 mb-3">
                  Plan for emergencies that could happen at your operations. Fire, chemical spills, medical emergencies, 
                  natural disasters. Have procedures, train people, do drills.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Emergency response procedures</li>
                  <li>• Evacuation plans</li>
                  <li>• First aid arrangements</li>
                  <li>• Communication during emergencies</li>
                  <li>• Regular drills and reviews</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">5. Incident investigation and corrective action</h3>
                <p className="text-gray-700 mb-3">
                  When incidents happen (and they will), investigate to find root causes. Not to blame people - 
                  to prevent it happening again. Document findings, implement corrective actions.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Incident reporting procedures</li>
                  <li>• Investigation methodology</li>
                  <li>• Root cause analysis</li>
                  <li>• Corrective and preventive actions</li>
                  <li>• Lessons learned and communication</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-orange-500">
                <h3 className="font-bold text-lg text-gray-900 mb-3">6. Performance monitoring and measurement</h3>
                <p className="text-gray-700 mb-3">
                  Track safety performance with leading indicators (safety observations, near misses) and 
                  lagging indicators (lost time injuries, severity rates). Regular audits and management reviews.
                </p>
                <ul className="text-sm text-gray-700 space-y-1 ml-4">
                  <li>• Safety KPIs and metrics</li>
                  <li>• Internal safety audits</li>
                  <li>• Management review meetings</li>
                  <li>• Legal compliance verification</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <p className="text-gray-800">
                <strong>Reality check:</strong> ISO 45001 requires actual safety management, not just paperwork. 
                You need real hazard controls, genuine worker participation, and measurable improvements. 
                If you're just trying to pass an audit without changing how you work, auditors will see through it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              Our approach to ISO 45001 certification
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We work with your safety officers and site managers, not just head office. Make safety procedures 
                practical for actual work conditions. Train workers so they understand why, not just what. 
                Help you use incident data to prevent future problems.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">We focus on real risk reduction</h3>
                  <p className="text-sm text-gray-700">
                    Not just documentation. We help you implement controls that actually prevent incidents. 
                    Engineering controls, safe work procedures, PPE - in the right hierarchy.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Worker involvement from day one</h3>
                  <p className="text-sm text-gray-700">
                    ISO 45001 requires genuine worker participation. We help you set up effective 
                    safety committees and consultation processes that workers actually engage with.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Site-specific procedures</h3>
                  <p className="text-sm text-gray-700">
                    We build safety systems around your actual operations - whether that's construction sites, 
                    factory floors, mines, or vehicle fleets. Not generic templates.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Pre-audit catches problems early</h3>
                  <p className="text-sm text-gray-700">
                    Our thorough pre-audit focuses on common failure points. We check your hazard register, 
                    risk assessments, emergency procedures - find gaps before the certification audit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center">
              How we get you ISO 45001 certified
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Safety system assessment (Week 1-2)",
                  desc: "Review your current safety procedures, incident history, and compliance status. Visit sites, talk to safety officers and workers. Identify what you have vs what ISO 45001 requires."
                },
                {
                  step: "2",
                  title: "Hazard identification & risk assessment (Week 2-4)",
                  desc: "Work with your team to identify all workplace hazards. Assess risks using a systematic methodology. Prioritize what needs controlling first based on severity and likelihood."
                },
                {
                  step: "3",
                  title: "Safety system development (Month 2-3)",
                  desc: "Build or upgrade your safety management system. Document safety policy, objectives, procedures. Set up worker participation mechanisms. Create emergency response plans."
                },
                {
                  step: "4",
                  title: "Implementation & training (Month 3-4)",
                  desc: "Roll out new or improved safety procedures. Train workers, supervisors, and management on their roles. Implement risk controls. Start tracking safety performance."
                },
                {
                  step: "5",
                  title: "Pre-audit review (Month 5)",
                  desc: "We conduct a thorough internal audit against ISO 45001 requirements. Check documentation, interview workers, inspect sites. Identify and fix any gaps before certification audit."
                },
                {
                  step: "6",
                  title: "Certification audit (Month 6)",
                  desc: "TÜV NORD auditors verify your safety management system. Site inspection, document review, worker interviews. Address any findings. Certificate issued, valid 3 years."
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-red-400 to-red-500 text-white flex items-center justify-center font-bold text-lg">
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
                <strong>Total timeline:</strong> 3-6 months depending on your current safety systems and 
                operational complexity. Can be faster if you already have solid safety procedures.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors"
              >
                Start ISO 45001 certification
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
              Common ISO 45001 challenges (and how we solve them)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Challenge: Getting frontline workers to follow safety procedures</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Safety procedures that look good on paper but nobody follows in practice. Workers see it as 
                  bureaucracy that slows them down.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  Our approach: We make safety procedures practical for actual work conditions. Involve workers 
                  in developing procedures so they're realistic. Training that explains why, not just lectures on what.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Challenge: Moving from reactive to proactive safety</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Most companies only act after incidents happen. ISO 45001 requires proactive hazard identification 
                  and risk management before anyone gets hurt.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  Our approach: Help you set up leading indicators (near miss reporting, safety observations) 
                  not just lagging indicators (injuries). Use incident data to prevent future problems.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Challenge: Managing safety across multiple sites</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Construction sites, remote operations, mobile workers - how do you implement consistent 
                  safety management when people are spread out?
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  Our approach: Design scalable safety systems with site-level flexibility. Use technology for 
                  incident reporting and hazard tracking. Train site supervisors on their safety responsibilities.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Challenge: Worker participation requirements</h3>
                <p className="text-gray-700 text-sm mb-3">
                  ISO 45001 requires genuine worker involvement in safety decisions. Many companies struggle to 
                  move beyond token consultation to real participation.
                </p>
                <p className="text-green-700 text-sm font-semibold">
                  Our approach: Help you set up effective safety committees with real authority. Create consultation 
                  processes workers actually engage with. Make sure worker feedback leads to visible changes.
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
              ISO 45001 FAQs
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can we get ISO 45001 and ISO 9001 at the same time?",
                  a: "Yes, and we recommend it if you need both. They share the same high-level structure (Annex SL), so there's significant overlap in documentation and processes. Integrated audits are faster and more cost-effective than doing them separately. Most of our construction and manufacturing clients get both together."
                },
                {
                  q: "We still have OHSAS 18001. Do we need to transition to ISO 45001?",
                  a: "OHSAS 18001 was withdrawn in 2021 - it's no longer valid. If you're still certified under OHSAS, you need to transition to ISO 45001. Good news: the core principles are similar, and most of your system will carry over. You'll mainly need to strengthen worker participation and risk-based thinking."
                },
                {
                  q: "Does ISO 45001 guarantee we won't have any more accidents?",
                  a: "No certification can guarantee zero incidents - that's not realistic. What ISO 45001 does is give you a systematic approach to identify hazards, control risks, and continuously improve. Our clients typically see 20-40% reduction in incidents, but the real value is in building a safety culture that prevents serious injuries."
                },
                {
                  q: "How does ISO 45001 relate to the OHS Act?",
                  a: "ISO 45001 is not a legal requirement in South Africa - the OHS Act is. But ISO 45001 covers most OHS Act requirements and gives you a framework to manage compliance. Think of it as going beyond minimum legal compliance to international best practice. Makes Department of Labour inspections much easier to handle."
                },
                {
                  q: "Our workers speak multiple languages. How does training work?",
                  a: "We train in the languages your workers speak. Safety procedures need to be understood, not just heard. We can do training in English, Afrikaans, Zulu, or whatever languages your workforce uses. Documents can also be translated for the key safety-critical procedures."
                },
                {
                  q: "What if we're a small company - is ISO 45001 overkill?",
                  a: "Size doesn't matter - risk does. If you have significant safety risks (working at heights, machinery, chemicals, driving), you need good safety management regardless of company size. ISO 45001 scales - we help small companies implement practical systems without bureaucratic overhead."
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
              Ready to improve workplace safety?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get ISO 45001 certified. Reduce incidents. Lower insurance costs. 
              Comply with OHS Act requirements. Build a genuine safety culture.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-2xl transition-shadow"
              >
                Book free safety consultation
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

export default ISO45001Page;