
import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import WebsiteIcon from './icons/WebsiteIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact-page" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0F1A3E]">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600">We'd love to hear from you. Reach out to us through any of the channels below.</p>
        </div>
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">Our Address</h3>
              <address className="text-gray-700 leading-relaxed not-italic">
                Unit RG0-002 Ground Floor<br/>
                Roland Garros Building<br/>
                The Campus<br/>
                57 Sloane Street, Bryanston<br/>
                South Africa
              </address>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0F1A3E] mb-4">Get in Touch</h3>
               <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <PhoneIcon /><a href="tel:+27102107715" className="ml-3 hover:text-orange-500 transition-colors">+27 10 210 7715</a>
                </li>
                <li className="flex items-center">
                  <EmailIcon /><a href="mailto:info@oshea.co.za" className="ml-3 hover:text-orange-500 transition-colors">info@oshea.co.za</a>
                </li>
                 <li className="flex items-center">
                  <WebsiteIcon /><a href="http://www.oshea.co.za" target="_blank" rel="noopener noreferrer" className="ml-3 hover:text-orange-500 transition-colors">www.oshea.co.za</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;