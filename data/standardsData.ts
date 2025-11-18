// FIX: Import React because JSX is not supported in .ts files, so React.createElement must be used.
import React, { type ReactNode } from 'react';
import CertificationIcon from '../components/icons/CertificationIcon';
import InspectionIcon from '../components/icons/InspectionIcon';
import TrainingIcon from '../components/icons/TrainingIcon';

export interface StandardDetail {
  code: string;
  name: string;
  tagline: string;
  description: string;
  whoNeedsIt: string[];
  keyRequirements: string[];
  benefits: string[];
  typicalTimeline: string;
  industries: string[];
  commonChallenges: string;
  ourApproach: string;
}

export const standardsData: StandardDetail[] = [
  {
    code: "ISO 9001",
    name: "Quality Management Systems",
    tagline: "Prove you deliver consistent quality",
    description: "ISO 9001 is the gold standard for quality management. It's about having systems in place to consistently deliver products or services that meet customer requirements and keep improving over time. Not about paperwork - about actually running a tight ship.",
    whoNeedsIt: [
      "Companies bidding on government tenders (often mandatory)",
      "Suppliers to large corporations and OEMs",
      "Export businesses proving quality to international buyers",
      "Growing companies that need structure as they scale",
      "Anyone who wants to reduce errors and waste"
    ],
    keyRequirements: [
      "Documented quality policy and objectives",
      "Process mapping for your key operations",
      "Customer satisfaction monitoring",
      "Internal audits and management reviews",
      "Corrective action procedures when things go wrong",
      "Records that prove you're doing what you say"
    ],
    benefits: [
      "Access to tenders requiring ISO 9001 (often worth millions)",
      "Fewer defects and customer complaints",
      "More efficient operations - less rework and waste",
      "Better supplier management",
      "Competitive advantage over non-certified competitors",
      "Foundation for adding other ISO standards later"
    ],
    typicalTimeline: "3-6 months depending on company size and existing systems",
    industries: ["Manufacturing", "Construction", "Logistics", "IT Services", "Professional Services"],
    commonChallenges: "Companies often struggle with documentation - they're doing things right but can't prove it. Or they build systems that look good on paper but nobody actually uses.",
    ourApproach: "We build quality systems around how you actually work, not theoretical best practices from a textbook. Documentation that your team will actually use, not binders gathering dust. Pre-audits to make sure you pass first time."
  },
  {
    code: "ISO 14001",
    name: "Environmental Management Systems",
    tagline: "Manage your environmental impact",
    description: "ISO 14001 proves you're managing your environmental responsibilities - waste, emissions, energy use, whatever impacts your business has. More companies are requiring it from suppliers as ESG becomes non-negotiable.",
    whoNeedsIt: [
      "Manufacturers with emissions or waste streams",
      "Mining and extraction operations",
      "Construction companies on large projects",
      "Transport and logistics with vehicle fleets",
      "Any company with environmental compliance requirements",
      "Businesses targeting environmentally conscious clients"
    ],
    keyRequirements: [
      "Identify your environmental impacts and legal requirements",
      "Set measurable environmental objectives",
      "Implement controls to minimize negative impacts",
      "Emergency preparedness for environmental incidents",
      "Monitor and measure environmental performance",
      "Regular reviews and continuous improvement"
    ],
    benefits: [
      "Meet ESG requirements for tenders and contracts",
      "Reduce waste and energy costs (often pays for itself)",
      "Better compliance with environmental regulations",
      "Improved reputation with eco-conscious clients",
      "Foundation for carbon footprint reduction programs",
      "Integrates easily with ISO 9001 or ISO 45001"
    ],
    typicalTimeline: "3-5 months, faster if you already have ISO 9001",
    industries: ["Manufacturing", "Mining", "Construction", "Logistics", "Energy & Utilities"],
    commonChallenges: "Keeping up with changing environmental regulations and proving compliance. Companies often don't know their actual environmental impacts until they measure them.",
    ourApproach: "Start with a proper environmental aspects assessment - what actually matters for your business. Build practical controls that work in your operations. Help you spot cost-saving opportunities (waste reduction usually saves money)."
  },
  {
    code: "ISO 45001",
    name: "Occupational Health & Safety Management",
    tagline: "Keep your people safe, stay compliant",
    description: "ISO 45001 is about systematically managing workplace health and safety. It's replaced OHSAS 18001. Critical for high-risk industries and increasingly required by clients who don't want liability issues with their suppliers.",
    whoNeedsIt: [
      "Construction and engineering firms (often mandatory)",
      "Manufacturing with machinery and hazardous processes",
      "Mining operations",
      "Transport and logistics companies",
      "Anyone with significant safety risks",
      "Companies wanting to reduce insurance premiums"
    ],
    keyRequirements: [
      "Hazard identification and risk assessment",
      "Safety objectives and incident reduction targets",
      "Worker participation in safety decisions",
      "Emergency preparedness and response procedures",
      "Incident investigation and corrective actions",
      "Regular safety audits and management reviews"
    ],
    benefits: [
      "Fewer workplace accidents and injuries",
      "Lower workers' comp and insurance costs",
      "Access to contracts requiring safety certification",
      "Better compliance with OHS Act and regulations",
      "Improved worker morale and productivity",
      "Reduced downtime from incidents"
    ],
    typicalTimeline: "3-6 months depending on complexity of operations",
    industries: ["Construction", "Manufacturing", "Mining", "Logistics", "Energy"],
    commonChallenges: "Getting frontline workers to actually follow safety procedures. Moving from reactive (fixing problems after incidents) to proactive (preventing them). Managing safety across multiple sites.",
    ourApproach: "Work with your safety officers and site managers, not just head office. Make safety procedures practical for actual work conditions. Train workers so they understand why, not just what. Help you use incident data to prevent future problems."
  },
  {
    code: "ISO 22000",
    name: "Food Safety Management Systems",
    tagline: "Comprehensive food safety management",
    description: "ISO 22000 combines HACCP principles with management system requirements. It's for any organization in the food chain - from farm to fork. More flexible than FSSC 22000 but may not satisfy all retail requirements.",
    whoNeedsIt: [
      "Food processors and manufacturers",
      "Food packaging companies",
      "Ingredient suppliers",
      "Food storage and distribution",
      "Catering and hospitality businesses",
      "Animal feed producers"
    ],
    keyRequirements: [
      "HACCP plan covering all critical control points",
      "Prerequisite programs (cleaning, pest control, etc.)",
      "Traceability throughout your operations",
      "Supplier and raw material controls",
      "Product recall procedures",
      "Regular validation and verification activities"
    ],
    benefits: [
      "Meet retailer and customer food safety requirements",
      "Reduce food safety incidents and recalls",
      "Better supplier quality control",
      "Improved traceability if problems occur",
      "Foundation for export certification",
      "Potential step toward FSSC 22000 if needed later"
    ],
    typicalTimeline: "4-6 months depending on facility complexity",
    industries: ["Food & Beverage Manufacturing", "Food Packaging", "Food Distribution"],
    commonChallenges: "Maintaining hygiene standards in production. Getting prerequisite programs properly implemented. Staff turnover means constant retraining. Balancing food safety with production efficiency.",
    ourApproach: "Start with facility assessment and HACCP study based on actual products and processes. Design prerequisite programs that work in your facility conditions. Hands-on training for production staff. Mock audit focusing on common failure points."
  },
  {
    code: "ISO 27001",
    name: "Information Security Management",
    tagline: "Protect data, win enterprise clients",
    description: "ISO 27001 is the international standard for managing information security. Essential if you handle sensitive data or want to sell to large enterprises, government, or financial institutions. Increasingly non-negotiable in IT services.",
    whoNeedsIt: [
      "IT service providers and cloud companies",
      "Software development firms",
      "Companies handling payment card data",
      "Healthcare providers with patient data",
      "Any business with significant cyber risk",
      "Organizations subject to POPIA and data protection laws"
    ],
    keyRequirements: [
      "Comprehensive risk assessment of information assets",
      "Selection and implementation of security controls",
      "Access control and user management",
      "Incident response and breach procedures",
      "Business continuity and disaster recovery",
      "Regular security testing and reviews"
    ],
    benefits: [
      "Win contracts with banks, government, enterprises (often mandatory)",
      "Better protection against data breaches and cyber attacks",
      "POPIA compliance framework",
      "Competitive advantage in security-conscious markets",
      "Reduced cyber insurance premiums",
      "Customer confidence in your data handling"
    ],
    typicalTimeline: "4-6 months depending on IT complexity",
    industries: ["IT Services", "Software Development", "Financial Services", "Healthcare", "Telecommunications"],
    commonChallenges: "Balancing security with usability. Keeping controls updated as threats evolve. Managing security across cloud environments and remote workers. Getting buy-in from developers who see security as slowing them down.",
    ourApproach: "Map controls to your actual tech stack - cloud, on-prem, whatever you use. Integrate security into existing workflows (DevSecOps). Risk-based approach - focus on what actually matters for your business. Technical auditors who understand your architecture."
  },
  {
    code: "ISO 50001",
    name: "Energy Management Systems",
    tagline: "Cut energy costs, prove sustainability",
    description: "ISO 50001 helps you systematically manage and reduce energy consumption. With load shedding and rising electricity costs in South Africa, this standard can deliver real cost savings while meeting sustainability requirements.",
    whoNeedsIt: [
      "Energy-intensive manufacturers",
      "Large commercial buildings and facilities",
      "Companies with ESG commitments",
      "Organizations facing carbon tax or emissions trading",
      "Any business wanting to reduce energy costs",
      "Export businesses with energy efficiency requirements"
    ],
    keyRequirements: [
      "Energy review and baseline establishment",
      "Energy performance indicators and targets",
      "Action plans for significant energy uses",
      "Procurement specifications for energy efficiency",
      "Design considerations for energy performance",
      "Monitoring, measurement, and analysis systems"
    ],
    benefits: [
      "Reduced energy costs (10-30% reduction typical)",
      "Better resilience during load shedding",
      "Meet sustainability and ESG requirements",
      "Compliance with carbon tax and reporting",
      "Improved operational efficiency",
      "Attractiveness to environmentally conscious investors"
    ],
    typicalTimeline: "4-6 months including energy review",
    industries: ["Manufacturing", "Mining", "Commercial Buildings", "Data Centers", "Hospitality"],
    commonChallenges: "Measuring energy use across complex operations. Justifying capital investment in energy efficiency. Maintaining performance without expensive infrastructure upgrades. Managing energy during load shedding.",
    ourApproach: "Thorough energy review to identify quick wins and long-term opportunities. Focus on no-cost and low-cost improvements first. Help you build business case for larger investments. Practical monitoring that doesn't require expensive new systems."
  },
  {
    code: "FSSC 22000",
    name: "Food Safety System Certification",
    tagline: "Retailer-approved food safety",
    description: "FSSC 22000 builds on ISO 22000 with additional sector-specific requirements. It's recognized by the Global Food Safety Initiative (GFSI), which means major retailers accept it. If you supply big retail chains, this is what they'll ask for.",
    whoNeedsIt: [
      "Food manufacturers supplying major retailers",
      "Ingredient suppliers to food manufacturers",
      "Food packaging material producers",
      "Companies exporting to GFSI-requiring markets",
      "Anyone in the food chain targeting large buyers"
    ],
    keyRequirements: [
      "Full ISO 22000 compliance plus sector-specific requirements",
      "Additional prerequisite programs beyond ISO 22000",
      "Food defense and food fraud prevention",
      "Allergen management program",
      "Environmental monitoring for pathogens",
      "Enhanced traceability and recall systems"
    ],
    benefits: [
      "Access to major retail chains (Woolworths, Pick n Pay, etc.)",
      "GFSI recognition for export markets",
      "Reduced audit burden (one certification covers multiple requirements)",
      "Stronger food safety culture and systems",
      "Better protection against recalls and contamination",
      "Competitive advantage over ISO 22000-only competitors"
    ],
    typicalTimeline: "5-8 months for full implementation",
    industries: ["Food & Beverage Manufacturing", "Food Ingredients", "Food Packaging"],
    commonChallenges: "Higher requirements than ISO 22000 - more documentation, more controls. Food defense and fraud prevention are new for many companies. Environmental monitoring programs require equipment and expertise. Maintaining certification between annual audits.",
    ourApproach: "Gap analysis against both ISO 22000 and FSSC requirements. Phased implementation starting with prerequisite programs. Support for environmental monitoring setup. Train your team on audit expectations specific to FSSC. Surveillance audit preparation included."
  },
  {
    code: "HACCP",
    name: "Hazard Analysis Critical Control Points",
    tagline: "Core food safety system",
    description: "HACCP is the foundation of food safety - identifying biological, chemical, and physical hazards and controlling them at critical points in production. It's built into ISO 22000 and FSSC 22000, but can be certified standalone for smaller operations.",
    whoNeedsIt: [
      "Small to mid-size food processors",
      "Restaurants and catering operations",
      "Food distributors and wholesalers",
      "Businesses not ready for full ISO 22000/FSSC",
      "Companies where customers specifically require HACCP",
      "Starting point before pursuing higher certifications"
    ],
    keyRequirements: [
      "Hazard analysis for all products and processes",
      "Critical control points identified and monitored",
      "Critical limits established for each CCP",
      "Monitoring procedures at each CCP",
      "Corrective actions when limits are exceeded",
      "Verification procedures and record keeping"
    ],
    benefits: [
      "Fundamental food safety system implementation",
      "Lower cost than full ISO 22000/FSSC certification",
      "Reduced food safety incidents",
      "Customer confidence in your products",
      "Foundation for future ISO 22000 upgrade",
      "Compliance with basic food safety regulations"
    ],
    typicalTimeline: "2-4 months for implementation and certification",
    industries: ["Food Processing", "Catering & Hospitality", "Food Wholesale"],
    commonChallenges: "Properly identifying critical control points (many companies get this wrong). Establishing meaningful critical limits. Consistent monitoring and record keeping. Staff understanding why HACCP matters, not just following steps.",
    ourApproach: "Product-by-product HACCP study with your team. Set realistic critical limits based on your actual processes and equipment. Simple monitoring sheets that production staff can actually use. Training that sticks - not just classroom lectures."
  },
  {
    code: "IATF 16949",
    name: "Automotive Quality Management",
    tagline: "Automotive industry quality standard",
    description: "IATF 16949 is ISO 9001 plus automotive-specific requirements. Mandatory for suppliers to major automotive OEMs. Extremely rigorous - focuses on zero defects, continuous improvement, and supply chain management.",
    whoNeedsIt: [
      "Direct automotive parts suppliers (Tier 1)",
      "Sub-suppliers to automotive industry (Tier 2+)",
      "Companies wanting to enter automotive supply chains",
      "Aftermarket parts manufacturers targeting OE quality",
      "Any manufacturer serving automotive clients"
    ],
    keyRequirements: [
      "Full ISO 9001 compliance plus automotive requirements",
      "Advanced Product Quality Planning (APQP)",
      "Production Part Approval Process (PPAP)",
      "Statistical process control and capability studies",
      "Measurement system analysis",
      "Failure Mode and Effects Analysis (FMEA)",
      "Extensive supply chain management"
    ],
    benefits: [
      "Access to automotive OEM supply chains",
      "Extremely robust quality systems",
      "Improved process capability and consistency",
      "Better supplier management and development",
      "Reduced warranty claims and returns",
      "Foundation for aerospace and other demanding industries"
    ],
    typicalTimeline: "6-12 months (requires ISO 9001 first, complex implementation)",
    industries: ["Automotive Manufacturing", "Automotive Components", "Sub-assembly Suppliers"],
    commonChallenges: "Very demanding standard - automotive industry doesn't tolerate defects. Extensive documentation and analysis required. Managing customer-specific requirements from different OEMs. Maintaining certification requires continuous improvement, not just compliance.",
    ourApproach: "Ensure ISO 9001 foundation is rock solid first. Phased implementation of automotive tools (APQP, FMEA, etc.). Training on statistical methods and process control. Help you understand and manage customer-specific requirements. Prepare for rigorous audit expectations."
  },
  {
    code: "IFS Food",
    name: "International Featured Standards - Food",
    tagline: "European retailer-approved food safety",
    description: "IFS Food is recognized by European retailers and is common for companies exporting to Europe. Similar to FSSC 22000 in rigor but with some different focus areas. Popular in dairy, meat, and prepared foods sectors.",
    whoNeedsIt: [
      "Food manufacturers exporting to Europe",
      "Suppliers to European retail chains",
      "Private label food producers",
      "Meat, dairy, and prepared food companies",
      "Businesses targeting European markets"
    ],
    keyRequirements: [
      "Full HACCP implementation",
      "Quality and food safety management system",
      "Resource management and planning",
      "Product realization and process control",
      "Measurements, analysis, improvements",
      "Food defense and product fraud mitigation"
    ],
    benefits: [
      "Access to European retail markets",
      "Alternative to FSSC 22000 for some buyers",
      "Strong food safety and quality systems",
      "Reduced audit burden for European customers",
      "Competitive advantage in export markets",
      "Rigorous standards that improve operations"
    ],
    typicalTimeline: "5-8 months for full implementation",
    industries: ["Food Manufacturing", "Dairy Processing", "Meat Processing"],
    commonChallenges: "High documentation requirements. Grading system (A, B, C, D) means you can be certified but with low score. European regulatory knowledge needed. Language barriers in dealing with European customers.",
    ourApproach: "Target A or B grade certification (C grade looks bad even if certified). European regulatory compliance support. Documentation that meets IFS expectations. Prepare for announced and unannounced audit options."
  }
];

// Helper function to get standard by code
export const getStandardByCode = (code: string): StandardDetail | undefined => {
  return standardsData.find(s => s.code === code);
};

// Helper function to get standards by industry
export const getStandardsByIndustry = (industry: string): StandardDetail[] => {
  return standardsData.filter(s => s.industries.includes(industry));
};