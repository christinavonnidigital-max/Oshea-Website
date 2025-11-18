import type { FC } from 'react';
import { JobOpening } from '../data/careersData';

interface JobListingProps {
  job: JobOpening;
  onApply: (jobId: string) => void;
}

const JobListing: FC<JobListingProps> = ({ job, onApply }) => {
  return (
    <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 className="text-xl font-bold text-[#0F1A3E]">{job.title}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <span>{job.location}</span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 font-medium">
            {job.type}
          </span>
        </div>
      </div>
      <div className="flex-shrink-0 mt-4 sm:mt-0">
        <button
          onClick={() => onApply(job.id)}
          className="inline-block bg-[#0F1A3E] text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-500 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500"
        >
          Apply Now
        </button>
      </div>
    </article>
  );
};

export default JobListing;