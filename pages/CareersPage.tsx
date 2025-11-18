import { useState, useRef, type FC } from 'react';
import { careersData } from '../data/careersData';
import JobListing from '../components/JobListing';
import ApplicationForm from '../components/ApplicationForm';
import Seo from '../components/Seo';

const CareersPage: FC = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedJobId, setSelectedJobId] = useState<string | undefined>();

  const handleApplyClick = (jobId: string) => {
    setSelectedJobId(jobId);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const jobOptions = careersData.map(({ id, title }) => ({ id, title }));

  return (
    <>
      <Seo
        title="Careers at O'Shea SA"
        description="Join our team of experts at O'Shea SA. Explore current job openings and help us drive excellence in certification, inspection, and training across Sub Sahara Africa."
        keywords="careers, jobs, O'Shea SA, auditor jobs, ISO careers, certification jobs"
        structuredData={careersData.map(job => ({
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          'title': job.title,
          'description': job.description,
          'hiringOrganization': {
            '@type': 'Organization',
            'name': "O'Shea SA",
            'sameAs': 'https://www.oshea.co.za', // Should be canonical URL
          },
          'jobLocation': {
            '@type': 'Place',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Bryanston',
              'addressRegion': 'Gauteng',
              'addressCountry': 'ZA',
            },
          },
          'baseSalary': {
            '@type': 'MonetaryAmount',
            'currency': 'ZAR',
            'value': {
              '@type': 'QuantitativeValue',
              'value': 'Competitive', // It's better to be specific if possible
              'unitText': 'YEAR',
            },
          },
          'employmentType': 'FULL_TIME',
          'datePosted': new Date().toISOString().split('T')[0], // Use a more accurate date if available
        }))}
      />
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-[#0F1A3E]">Join Our Team</h1>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              At O'Shea SA, we are passionate about excellence, integrity, and partnership. We are looking for talented individuals to join our mission of delivering world-class certification, inspection, and training services. If you are driven by quality and eager to make an impact, explore our open positions below.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F1A3E] mb-8 text-center sm:text-left">Current Openings</h2>
            {careersData.length > 0 ? (
              <div className="space-y-6">
                {careersData.map(job => (
                  <JobListing key={job.id} job={job} onApply={handleApplyClick} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600 bg-gray-50 p-8 rounded-lg">
                There are currently no open positions. Please check back later!
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div ref={formRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ApplicationForm selectedJobId={selectedJobId} jobOptions={jobOptions} />
        </div>
      </div>
    </>
  );
};

export default CareersPage;