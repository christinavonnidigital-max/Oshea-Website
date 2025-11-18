import { useState, useEffect, type FC, FormEvent, ChangeEvent } from 'react';

interface ApplicationFormProps {
  selectedJobId?: string;
  jobOptions: { id: string; title: string }[];
}

const ApplicationForm: FC<ApplicationFormProps> = ({ selectedJobId, jobOptions }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobId: selectedJobId || '',
    resume: null as File | null,
    coverLetter: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Update the form's selected job when the prop changes
    setFormData(prev => ({ ...prev, jobId: selectedJobId || '' }));
  }, [selectedJobId]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // Simulate API call for submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // For demonstration, we'll assume success
    setSubmissionStatus('success');
    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      jobId: '',
      resume: null,
      coverLetter: '',
    });
    // Clear file input
    const fileInput = document.getElementById('resume') as HTMLInputElement;
    if (fileInput) fileInput.value = '';

    // Hide success message after 5 seconds
    setTimeout(() => setSubmissionStatus('idle'), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0F1A3E]">Apply for a Position</h2>
        <p className="mt-3 text-gray-600">
          Complete the form below to submit your application.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500" />
          </div>
          <div>
            <label htmlFor="jobId" className="block text-sm font-medium text-gray-700 mb-1">Applying for</label>
            <select name="jobId" id="jobId" value={formData.jobId} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 bg-white text-gray-900">
              <option value="" disabled>Select a position</option>
              {jobOptions.map(job => (
                <option key={job.id} value={job.id}>{job.title}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">Resume/CV</label>
          <input type="file" name="resume" id="resume" onChange={handleFileChange} required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
          <p className="text-xs text-gray-500 mt-1">PDF, DOC, or DOCX accepted. Max size 5MB.</p>
        </div>
        <div>
          <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
          <textarea name="coverLetter" id="coverLetter" rows={4} value={formData.coverLetter} onChange={handleChange} className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#0F1A3E] text-white font-semibold hover:bg-[#172552] transition-colors disabled:bg-gray-400">
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </button>
          <div className="h-5">
            {submissionStatus === 'success' && <p className="text-green-600">Application submitted successfully!</p>}
            {submissionStatus === 'error' && <p className="text-red-600">An error occurred. Please try again.</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;