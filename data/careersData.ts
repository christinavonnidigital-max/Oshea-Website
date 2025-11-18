export interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  description: string;
}

export const careersData: JobOpening[] = [
  {
    id: 'lead-auditor-9001',
    title: 'Lead Auditor - ISO 9001',
    location: 'Bryanston, South Africa',
    type: 'Full-time',
    description: 'We are seeking an experienced Lead Auditor for ISO 9001 (Quality Management Systems). The ideal candidate will have a strong background in conducting audits, excellent communication skills, and a deep understanding of quality management principles. You will be responsible for planning and executing audits for our clients across various industries.',
  },
  {
    id: 'technical-expert-fssc',
    title: 'Technical Expert - FSSC 22000',
    location: 'Remote / Sub Sahara Africa',
    type: 'Contract',
    description: 'Join our team as a Technical Expert specializing in FSSC 22000 (Food Safety). This role involves providing in-depth technical expertise during inspections and certifications for our food and beverage clients. A strong background in food science, safety protocols, and HACCP is required.',
  },
  {
    id: 'training-coordinator',
    title: 'Training Coordinator',
    location: 'Bryanston, South Africa',
    type: 'Full-time',
    description: 'O\'Shea SA is looking for a motivated Training Coordinator to manage our portfolio of professional training courses. You will be responsible for scheduling, marketing, and overseeing the delivery of our ISO standards and lead auditor training programs. Excellent organizational and interpersonal skills are essential.',
  },
];