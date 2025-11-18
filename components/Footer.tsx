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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Contact & Address */}
          <div>
            <h3 className="text-2xl font-bold mb-4">O'Shea SA</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Unit RG0-002 Ground Floor<br/>
              Roland Garros Building<br/>
              The Campus<br/>
              57 Sloane Street, Bryanston<br/>
              South Africa
            </p>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li className="flex items-center">
                <PhoneIcon />
                <a href="tel:+27102107715" className="ml-2 hover:text-white transition-colors text-sm">+27 10 210 7715</a>
              </li>
              <li className="flex items-center">
                <EmailIcon />
                <a href="mailto:info@oshea.co.za" className="ml-2 hover:text-white transition-colors text-sm">info@oshea.co.za</a>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E] focus-visible:ring-white">
                    <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A3E] focus-visible:ring-white">
                    <TwitterIcon />
                </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
             <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/iso-9001" className="hover:text-white transition-colors text-orange-400 font-medium">ISO 9001 Certification</Link></li>
              <li><Link to="/iso-14001" className="hover:text-white transition-colors text-orange-400 font-medium">ISO 14001 Certification</Link></li>
              <li><Link to="/iso-45001" className="hover:text-white transition-colors text-orange-400 font-medium">ISO 45001 Certification</Link></li>
              <li><Link to="/fssc-22000" className="hover:text-white transition-colors font-medium">FSSC 22000 Certification</Link></li>
              <li><Link to="/services/certification" className="hover:text-white transition-colors">Certification</Link></li>
              <li><Link to="/services/inspection" className="hover:text-white transition-colors">Inspection</Link></li>
              <li><Link to="/services/training" className="hover:text-white transition-colors">Training</Link></li>
             </ul>
          </div>

          {/* Column 3: Company (Quick Links) */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/industries" className="hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Partner */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Partner</h3>
            <p className="text-gray-400 mb-2">A Cooperation Partner Of</p>
            <div className="flex justify-start">
                <p className="text-3xl font-extrabold text-blue-400">TÜV NORD</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-4 gap-y-2">
            <span>&copy; {new Date().getFullYear()} O'Shea SA. All Rights Reserved.</span>
            <div className="flex items-center gap-x-4">
              <span className="hidden sm:inline text-gray-600">|</span>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;