
import React from 'react';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import WebsiteIcon from './icons/WebsiteIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0F1A3E] text-white">
      <div className="w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">O'Shea SA</h3>
            <p className="text-gray-400">Unit RG0-002 Ground Floor<br/>Roland Garros Building<br/>The Campus<br/>57 Sloane Street, Bryanston<br/>South Africa</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon /><span className="ml-2">+27 10 210 7715</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <EmailIcon /><span className="ml-2">info@oshea.co.za</span>
              </li>
               <li className="flex items-center justify-center md:justify-start">
                <WebsiteIcon /><span className="ml-2">www.oshea.co.za</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Partner</h3>
            <p className="text-gray-400 mb-2">A Cooperation Partner Of</p>
            <div className="flex justify-center md:justify-start">
                <p className="text-3xl font-extrabold text-blue-400">TÜV NORD</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} O'Shea SA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
