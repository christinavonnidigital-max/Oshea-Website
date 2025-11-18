// FIX: Import React because JSX is not supported in .ts files, so React.createElement must be used.
import React, { type ReactNode } from 'react';
import CertificationIcon from '../components/icons/CertificationIcon';
import InspectionIcon from '../components/icons/InspectionIcon';
import TrainingIcon from '../components/icons/TrainingIcon';

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: ReactNode;
}

export const servicesData: Service[] = [
  {
    slug: 'certification',
    title: 'Certification',
    shortDescription: 'We provide accredited certification services for a wide range of international standards, ensuring your systems meet global benchmarks.',
    longDescription: "Our certification services cover a vast array of international standards including ISO 9001 (Quality Management), ISO 14001 (Environmental Management), ISO 45001 (Occupational Health & Safety), and many more. We guide you through the entire process, from initial assessment to final certification, ensuring your organization achieves and maintains compliance with global best practices. Our accredited certificates are recognized worldwide, providing your stakeholders with the highest level of confidence.",
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
    icon: React.createElement(CertificationIcon)
  },
  {
    slug: 'inspection',
    title: 'Inspection',
    shortDescription: 'Our independent inspections verify product, process, and system compliance with industry regulations and customer requirements.',
    longDescription: "O'Shea SA offers comprehensive, independent third-party inspection services to verify that your products, processes, and systems meet the required quality and safety standards. Our expert inspectors utilize the latest technologies and methodologies to conduct thorough evaluations, helping you mitigate risks, ensure regulatory compliance, and maintain the integrity of your supply chain. We provide detailed reports to support your quality assurance efforts.",
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
    icon: React.createElement(InspectionIcon)
  },
  {
    slug: 'training',
    title: 'Training',
    shortDescription: 'We offer standard and customized training programs to empower your workforce with the skills to maintain compliance and drive improvement.',
    longDescription: "Empower your team with the knowledge and skills they need to excel. We offer a wide range of training courses, from introductory sessions on ISO standards to advanced lead auditor training. Our programs can be delivered in-person or virtually, and can be customized to meet the specific needs of your organization. Our experienced trainers are experts in their fields, providing practical insights that your team can apply immediately to drive continuous improvement.",
    // FIX: Replaced JSX with React.createElement to be compatible with a .ts file.
    icon: React.createElement(TrainingIcon)
  },
];
