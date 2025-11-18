import type { FC } from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import WebsiteIcon from './icons/WebsiteIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import TwitterIcon from './icons/TwitterIcon';

const Footer: FC = () => {
  return (
    <footer className="bg-[#0F1A3E] text-white">
      <div className="w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold mb-4">O'Shea SA</h3>
            <p className="text-gray-400">Unit RG0-002 Ground Floor<br/>Roland Garros Building<br/>The Campus<br/>57 Sloane Street, Bryanston<br/>South Africa</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-center md:justify-start">
                <PhoneIcon />
                <a href="tel:+27102107715" className="ml-2 hover:text-white transition-colors">+27 10 210 7715</a>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <EmailIcon />
                <a href="mailto:info@oshea.co.za" className="ml-2 hover:text-white transition-colors">info@oshea.co.za</a>
              </li>
               <li className="flex items-center justify-center md:justify-start">
                <WebsiteIcon />
                <a href="http://www.oshea.co.za" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-white transition-colors">www.oshea.co.za</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E] focus-visible:ring-white">
                    <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E] focus-visible:ring-white">
                    <TwitterIcon />
                </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Partner</h3>
            <p className="text-gray-400 mb-2">A Cooperation Partner Of</p>
            <div className="flex justify-center md:justify-start">
                <p className="text-3xl font-extrabold text-blue-400">TÜV NORD</p>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
            <span>&copy; {new Date().getFullYear()} O'Shea SA. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;