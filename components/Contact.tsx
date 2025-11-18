import React, { useState, FormEvent } from "react";
import AIContactModal from './AIContactModal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isAIChatModalOpen, setIsAIChatModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || isSubmitting) return;
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
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmissionStatus('error');
    }

    setIsSubmitting(false);

    // Hide the status message after 5 seconds
    setTimeout(() => setSubmissionStatus('idle'), 5000);
  };

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
              Contact us
            </h2>
            <p className="mt-3 text-gray-600">
              Have a question or want to work together? Send us a message!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-[28px] bg-white shadow-lg border border-[#E4E7F1] overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]" />
              <div className="px-8 py-8 grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left Column: Address and Info */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1A3E] mb-4">
                    Contact Information
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    Unit RGO-002 Ground Floor<br />
                    Roland Garros Building<br />
                    The Campus<br />
                    57 Sloane Street, Bryanston<br />
                    South Africa
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      <span className="font-medium text-[#0F1A3E]">Phone:</span> +27 10 210 7715
                    </p>
                    <p>
                      <span className="font-medium text-[#0F1A3E]">Email:</span> info@oshea.co.za
                    </p>
                  </div>
                   <div className="mt-6">
                      <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center px-5 py-2.5 rounded-full border border-[#0F1A3E]/20 text-[#0F1A3E] text-sm hover:bg-[#0F1A3E]/5 transition-colors"
                      >
                          View on Google Maps
                      </a>
                  </div>
                </div>

                {/* Right Column: Contact Form */}
                <div>
                  <h3 className="text-lg font-semibold text-[#0F1A3E] mb-4">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="sr-only">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="sr-only">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        className="w-full px-4 py-2 bg-white text-gray-900 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      ></textarea>
                    </div>
                    <div className="flex items-start flex-col">
                       <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#0F1A3E] text-white text-sm font-semibold hover:bg-[#172552] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                       >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                       </button>
                      <div className="h-5 mt-2">
                        {submissionStatus === 'success' && (
                            <p className="text-sm text-green-600">Message sent successfully! We'll be in touch soon.</p>
                        )}
                        {submissionStatus === 'error' && (
                            <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AIContactModal
        isOpen={isAIChatModalOpen}
        onClose={() => setIsAIChatModalOpen(false)}
        onConfirmSubmit={handleConfirmSubmit}
        initialMessage={formData.message}
      />
    </>
  );
};

export default Contact;