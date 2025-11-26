import React, { useState, useRef } from "react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error immediately when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // If valid, submit the form programmatically to trigger formsubmit.io
      formRef.current?.submit();
    }
  };

  return (
    <section className="bg-gray-50 py-24 px-6" id="contact">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="text-brand-blue font-bold tracking-wider uppercase text-xs">Get in Touch</span>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
          Let’s Talk Certification
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          Reach out to our team for audits, training inquiries, or partner opportunities across Sub‑Saharan Africa.
        </p>
      </div>

      <form
        ref={formRef}
        action="https://formsubmit.io/send/info@oshea.co.za"
        method="POST"
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl shadow-lg space-y-6 border border-gray-100"
      >
        {/* Spam protection & Redirection */}
        <input type="hidden" name="_formsubmit_id" />
        {/* Optional: <input type="hidden" name="_redirect" value="https://oshea.co.za/thanks" /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-400 focus:ring-2 focus:ring-brand-blue"
              } focus:border-transparent outline-none transition bg-white text-gray-900 placeholder-gray-500`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600 font-medium">{errors.name}</p>}
          </div>
          <div>
             <label className="block text-sm font-bold text-gray-700 mb-2">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@company.com"
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-400 focus:ring-2 focus:ring-brand-blue"
              } focus:border-transparent outline-none transition bg-white text-gray-900 placeholder-gray-500`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-600 font-medium">{errors.email}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd."
            className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition bg-white text-gray-900 placeholder-gray-500"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Message <span className="text-red-500">*</span></label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            rows={5}
            className={`w-full px-4 py-3 rounded-lg border ${
              errors.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-400 focus:ring-2 focus:ring-brand-blue"
            } focus:border-transparent outline-none transition bg-white text-gray-900 placeholder-gray-500`}
          ></textarea>
          {errors.message && <p className="mt-1 text-xs text-red-600 font-medium">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-brand-blue text-white font-bold px-6 py-4 rounded-lg hover:bg-brand-dark transition shadow-md hover:shadow-lg uppercase tracking-wide text-sm"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;