import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import { enquiryLink } from '../data/enquiries';

const services = [
  {
    id: 'certification',
    title: 'Management systems certification',
    description: 'Plan an independent assessment of your management system against a recognised ISO standard. Start with your standard, sites and certification objectives.',
    heading: 'Standards and schemes to discuss',
    details: [
      ['ISO 9001', 'Quality management systems'],
      ['ISO 14001', 'Environmental management systems'],
      ['ISO 45001', 'Occupational health and safety management systems'],
      ['ISO 22000', 'Food safety management systems'],
      ['ISO/IEC 27001', 'Information security management systems'],
      ['ISO 50001', 'Energy management systems'],
      ['FSSC 22000', 'Food safety certification scheme'],
      ['HACCP', 'Hazard analysis and critical control points'],
      ['IFS Food', 'Food safety and quality assessment scheme'],
      ['IATF 16949', 'Automotive quality management systems'],
    ],
    process: 'Confirm the scope and applicable certification scheme, agree the audit programme, complete the assessment and address findings. Certification is subject to an independent review and decision; ongoing surveillance follows the scheme requirements.',
    preparation: 'Tell us your industry, number of sites, employee count, target standard and whether this is initial certification, a transfer or renewal.',
    action: 'Enquire about certification',
  },
  {
    id: 'inspection',
    title: 'Inspection & audits',
    description: 'Understand compliance risks with an assessment based on agreed criteria. We confirm the inspection or audit scope before work starts.',
    heading: 'Assessment needs',
    details: [
      ['Pre-shipment inspections', 'Discuss checks of products against agreed specifications before shipment.'],
      ['Regulatory compliance verification', 'Assess evidence against the regulations and requirements agreed for your project.'],
      ['Factory audits', 'Review manufacturing processes and systems against defined criteria.'],
    ],
    process: 'Define the criteria and locations, agree access and timing, carry out the assessment and review the findings. Any follow-up work is agreed separately.',
    preparation: 'Include the site location, applicable standard or specification, required inspection type, project stage and preferred dates. We will confirm whether the requested scope can be delivered.',
    action: 'Enquire about an inspection',
  },
  {
    id: 'training',
    title: 'Training & awareness',
    description: 'Build practical understanding of management systems and audit requirements. Discuss a programme suited to your team and its responsibilities.',
    heading: 'Training topics',
    details: [
      ['Standards awareness', 'Understand the purpose and requirements of your chosen management system standard.'],
      ['Internal auditor training', 'Discuss audit planning, evidence gathering, reporting and follow-up.'],
      ['ISO standard lead auditor training', 'Discuss the chosen standard, entry requirements, course assessment and any recognition required.'],
    ],
    process: 'Agree the learning objectives, audience and delivery arrangements, then confirm the programme, dates and any assessment requirements in the quotation.',
    preparation: 'Share the topic, participant count and experience level, location, preferred dates and whether you need on-site or remote delivery. Available formats and any course recognition will be confirmed before booking.',
    action: 'Enquire about training',
  },
];

const ServicesPage: React.FC = () => (
  <Layout>
    <Helmet>
      <title>ISO Certification, Inspection & Training | O'Shea SA Services</title>
      <meta name="description" content="Explore management systems and food safety certification, pre-shipment inspections, factory audits, and auditor training with O'Shea SA." />
      <meta property="og:title" content="ISO Certification, Inspection & Training | O'Shea SA" />
      <meta property="og:description" content="Understand the standards, assessment process and information needed to request a service quotation." />
      <meta property="og:image" content="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80" />
      <link rel="canonical" href="https://www.oshea.co.za/services" />
    </Helmet>
    <PageHero title="Our Services" subtitle="Find the right certification, inspection or training service for your organisation." compact />
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold text-slate-900">Choose your service</h2>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">Explore the requirements below, then send a service-specific enquiry. We confirm availability, scope, delivery arrangements and fees before you commit.</p>
        <nav aria-label="Service sections" className="mt-6 flex flex-wrap gap-3">
          {services.map((service) => <Link key={service.id} to={`/services#${service.id}`} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-primary-700 hover:bg-blue-50">{service.title}</Link>)}
        </nav>
      </div>
    </section>
    <div className="bg-slate-50 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl divide-y divide-slate-200">
        {services.map((service) => (
          <section id={service.id} key={service.id} aria-labelledby={`${service.id}-title`} className="scroll-mt-24 grid gap-8 py-12 lg:grid-cols-5 lg:gap-12 lg:py-16">
            <div className="lg:col-span-2">
              <h2 id={`${service.id}-title`} className="text-3xl font-bold tracking-tight text-slate-900">{service.title}</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{service.description}</p>
              <Link to={enquiryLink(service.id)} className="mt-6 inline-flex rounded-full bg-primary-700 px-6 py-3 font-semibold text-white hover:bg-primary-800">{service.action}</Link>
            </div>
            <div className="space-y-7 lg:col-span-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{service.heading}</h3>
                <dl className={`mt-4 ${service.id === 'certification' ? 'grid gap-4 sm:grid-cols-2' : 'space-y-4'}`}>
                  {service.details.map(([title, detail]) => <div key={title} className="border-l-2 border-brand-accent pl-4"><dt className="font-semibold text-slate-900">{title}</dt><dd className="mt-1 text-slate-600 leading-relaxed">{detail}</dd></div>)}
                </dl>
              </div>
              <div><h3 className="text-lg font-bold text-slate-900">How it works</h3><p className="mt-2 text-slate-600 leading-relaxed">{service.process}</p></div>
              <div><h3 className="text-lg font-bold text-slate-900">What to include in your enquiry</h3><p className="mt-2 text-slate-600 leading-relaxed">{service.preparation}</p></div>
            </div>
          </section>
        ))}
      </div>
    </div>
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">Certification body and accreditation scope</h2>
        <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">O'Shea SA works in cooperation with TÜV NORD CERT GmbH. The certification body, applicable accreditation and covered activities must be confirmed for your specific standard and scope. Inspection and training services do not automatically carry the same accreditation as management systems certification.</p>
        <Link to={enquiryLink('certification')} className="mt-4 inline-block font-semibold text-primary-700 underline underline-offset-4">Request the applicable accreditation certificate and scope</Link>
      </div>
    </section>
    <section className="bg-brand-dark px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-6xl flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><h2 className="text-2xl font-bold">Unsure where to start?</h2><p className="mt-2 text-slate-300">Tell us your objective and we will help identify the next step.</p></div>
        <Link to={enquiryLink('general')} className="inline-flex self-start whitespace-nowrap rounded-full bg-brand-accent px-6 py-3 font-semibold text-slate-950">Talk to an expert</Link>
      </div>
    </section>
  </Layout>
);

export default ServicesPage;
