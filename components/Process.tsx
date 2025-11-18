import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Initial consultation",
    duration: "1-2 hours",
    description: "We start with a conversation about your business, what you need certified, and why. No sales pitch - just figuring out if certification makes sense for you and which standards fit your goals.",
    deliverables: ["Clear recommendation on which standard(s) to pursue", "Ballpark timeline and cost estimate", "Next steps if you want to proceed"]
  },
  {
    number: "02",
    title: "Gap analysis",
    duration: "2-5 days",
    description: "We assess what you currently have vs what the standard requires. This involves reviewing your existing processes, documentation, and systems. Think of it as a health check before the real audit.",
    deliverables: ["Detailed gap report showing what's missing", "Priority action list", "Customized implementation plan", "Fixed price quote"]
  },
  {
    number: "03",
    title: "Documentation & implementation",
    duration: "6-12 weeks",
    description: "This is where the work happens. We help you build or update your quality manual, procedures, work instructions - whatever the standard requires. We don't just hand you templates; we make sure everything fits how you actually work.",
    deliverables: ["Complete management system documentation", "Staff training on new processes", "Internal audit procedures", "Evidence of implementation"]
  },
  {
    number: "04",
    title: "Pre-audit review",
    duration: "1-3 days",
    description: "Before the official certification audit, we do a dry run. We audit you the same way TÜV NORD will, catch any issues, and give you time to fix them. This step is why our clients rarely fail their certification audits.",
    deliverables: ["Pre-audit findings report", "List of any non-conformances to address", "Recommendations for quick fixes", "Confirmation of audit readiness"]
  },
  {
    number: "05",
    title: "Certification audit",
    duration: "2-5 days",
    description: "TÜV NORD auditors come in and verify everything against the standard. We'll be there to support you through the process. If minor issues come up, you'll have time to address them before the certificate is issued.",
    deliverables: ["Official audit report", "List of any findings (if applicable)", "Corrective action timeline (if needed)"]
  },
  {
    number: "06",
    title: "Certificate issued",
    duration: "2-4 weeks after audit",
    description: "Once all findings are closed, TÜV NORD issues your certificate. It's valid for three years and recognized globally. You can now promote your certification, use the logo, and prove compliance to clients.",
    deliverables: ["Official ISO certificate", "Permission to use certification marks", "Digital certificate for verification", "Celebration (on you)"]
  },
  {
    number: "07",
    title: "Ongoing support",
    duration: "Annual surveillance audits",
    description: "Certification isn't a one-and-done thing. You'll have annual surveillance audits to maintain your certificate. We help you prepare, stay compliant between audits, and handle recertification every three years.",
    deliverables: ["Annual surveillance audit support", "Updates on standard changes", "Continuous improvement recommendations", "Recertification planning (year 3)"]
  }
];

const ProcessStepCard: FC<{ step: ProcessStep; isLast: boolean }> = ({ step, isLast }) => (
  <div className="relative">
    <div className="flex gap-6 md:gap-8">
      {/* Number circle */}
      <div className="flex-shrink-0">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center font-bold text-lg shadow-lg relative z-10">
          {step.number}
        </div>
        {!isLast && (
          <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-orange-200 to-gray-200 -ml-px h-full" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-3 mb-2">
          <h3 className="text-2xl font-bold text-[#0F1A3E]">{step.title}</h3>
          <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-md self-start sm:self-auto">{step.duration}</span>
        </div>
        
        <p className="text-gray-700 mb-4 leading-relaxed">
          {step.description}
        </p>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm font-semibold text-gray-900 mb-2">What you get:</p>
          <ul className="space-y-1">
            {step.deliverables.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const Process: FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
            Clear process, no surprises
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            How certification works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            From first call to certified - here's exactly what happens and when. 
            Most clients go from start to certificate in 3-6 months.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessStepCard 
              key={step.number} 
              step={step} 
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 bg-[#0F1A3E] rounded-2xl p-8 md:p-12 text-center text-white max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Book a free consultation and we'll map out exactly what certification looks like for your business - timeline, costs, everything.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-semibold hover:shadow-xl transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E]"
          >
            Schedule consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Process;