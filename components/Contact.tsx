import React, { useState, useEffect, FormEvent } from "react";
import AIContactModal from './AIContactModal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    standard: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isAIChatModalOpen, setIsAIChatModalOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [ctaText, setCtaText] = useState('Get Free Consultation');

  // Simple A/B Test for CTA Text
  useEffect(() => {
    const variants = [
      'Get Free Consultation', 
      'Get Free Quote', 
      'Book Free Consultation'
    ];
    // Select a random variant on mount
    const variant = variants[Math.floor(Math.random() * variants.length)];
    setCtaText(variant);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'email') setEmailError('');
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || isSubmitting) return;
    
    if (!isValidEmail(formData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setIsAIChatModalOpen(true);
  };

  const handleConfirmSubmit = async () => {
    setIsAIChatModalOpen(false);
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate success/error for demonstration
    const isSuccess = Math.random() > 0.1; // 90% success rate

    if (isSuccess) {
      setSubmissionStatus('success');
      setFormData({ name: '', email: '', phone: '', standard: '' });
    } else {
      setSubmissionStatus('error');
    }

    setIsSubmitting(false);

    // Hide the status message after 5 seconds
    setTimeout(() => setSubmissionStatus('idle'), 5000);
  };

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E] mb-4">
                Get a Free Consultation
                </h2>
                <p className="text-lg text-gray-600">
                Simple, transparent process. No obligation.
                </p>
            </div>

            <div className="rounded-[28px] bg-white shadow-xl border border-[#E4E7F1] overflow-hidden flex flex-col md:flex-row">
              
              {/* Contact Info Side */}
              <div className="md:w-5/12 bg-[#0F1A3E] text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
                  {/* Gradient blob */}
                  <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-[#FFC107] to-[#DC3545] opacity-20 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                      <div className="space-y-6">
                          <div>
                              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                              <a href="tel:+27102107715" className="text-lg font-semibold hover:text-[#FFC107] transition-colors">+27 10 210 7715</a>
                          </div>
                          <div>
                              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                              <a href="mailto:info@oshea.co.za" className="text-lg font-semibold hover:text-[#FFC107] transition-colors">info@oshea.co.za</a>
                          </div>
                          <div>
                              <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                              <p className="leading-relaxed text-gray-300">
                                  Unit RG0-002<br />
                                  Roland Garros Building<br />
                                  The Campus, Bryanston
                              </p>
                          </div>
                      </div>
                  </div>
                  
                  <div className="relative z-10 mt-12">
                      <div className="h-1 w-20 bg-gradient-to-r from-[#FFC107] to-[#DC3545] rounded-full" />
                  </div>
              </div>

              {/* Form Side */}
              <div className="md:w-7/12 p-8 md:p-12">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#0F1A3E] focus:border-transparent transition-all outline-none"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                            className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:bg-white focus:ring-2 focus:ring-[#0F1A3E] focus:border-transparent transition-all outline-none ${emailError ? 'border-red-500' : 'border-gray-200'}`}
                        />
                        {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
                        </div>
                        <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+27..."
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#0F1A3E] focus:border-transparent transition-all outline-none"
                        />
                        </div>
                    </div>

                    <div>
                      <label htmlFor="standard" className="block text-sm font-medium text-gray-700 mb-1">Which standard do you need?</label>
                      <select
                        name="standard"
                        id="standard"
                        value={formData.standard}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-[#0F1A3E] focus:border-transparent transition-all outline-none"
                      >
                        <option value="">Select a standard (Optional)</option>
                        <option value="ISO 9001">ISO 9001 (Quality)</option>
                        <option value="ISO 14001">ISO 14001 (Environment)</option>
                        <option value="ISO 45001">ISO 45001 (Safety)</option>
                        <option value="FSSC 22000">FSSC 22000 (Food Safety)</option>
                        <option value="ISO 27001">ISO 27001 (Info Security)</option>
                        <option value="Training">Training</option>
                        <option value="Not sure">Not sure yet</option>
                      </select>
                    </div>
                    
                    <div className="pt-2">
                       <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545] text-[#0F1A3E] font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                       >
                          {isSubmitting ? 'Sending...' : ctaText}
                       </button>
                    </div>

                    {/* Urgency / Trust Text - Updated */}
                    <div className="text-center pt-2 border-t border-gray-100 mt-4">
                        <p className="text-sm text-[#0F1A3E] font-medium mb-1">
                            ⏱️ Next available slot: Friday 2pm
                        </p>
                        <p className="text-xs text-gray-500">
                            We'll contact you within 2 hours during business hours.
                        </p>
                    </div>
                    
                    <div className="h-6 text-center">
                        {submissionStatus === 'success' && (
                            <p className="text-sm text-green-600 font-medium">Message sent! We'll be in touch shortly.</p>
                        )}
                        {submissionStatus === 'error' && (
                            <p className="text-sm text-red-600 font-medium">Something went wrong. Please try again.</p>
                        )}
                    </div>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AIContactModal
        isOpen={isAIChatModalOpen}
        onClose={() => setIsAIChatModalOpen(false)}
        onConfirmSubmit={handleConfirmSubmit}
        initialMessage={`Inquiry from ${formData.name} about ${formData.standard || 'services'}`}
      />
    </>
  );
};

export default Contact;