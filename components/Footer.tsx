import type { FC } from 'react';
import { Link } from 'react-router-dom';
import PhoneIcon from './icons/PhoneIcon';
import EmailIcon from './icons/EmailIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import Logo from './Logo';

const Footer: FC = () => {
  return (
    <footer className="bg-[#0F1A3E] text-white">
      {/* Top Gradient Line */}
      <div className="w-full h-2 bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Column 1: O'Shea SA (South Africa) */}
          <div>
            <div className="mb-8">
                <Logo variant="light" />
            </div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm border-b border-white/20 pb-2 inline-block">South Africa</h4>
            
            <address className="not-italic text-gray-300 text-sm leading-7 mb-6">
                 O'Shea SA<br/>
                 Unit RG0-002<br/>
                 Roland Garros Building<br/>
                 The Campus<br/>
                 57 Sloane Street<br/>
                 Bryanston, South Africa
            </address>

            <div className="space-y-3 text-sm">
                 <div className="flex items-center group">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-[#FD7E14] transition-colors">
                     <PhoneIcon />
                   </div>
                   <a href="tel:+27102107715" className="text-gray-300 hover:text-white transition-colors">+27 10 210 7715</a>
                 </div>
                 <div className="flex items-center group">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-[#FD7E14] transition-colors">
                     <EmailIcon />
                   </div>
                   <a href="mailto:info@oshea.co.za" className="text-gray-300 hover:text-white transition-colors">info@oshea.co.za</a>
                 </div>
            </div>
          </div>

          {/* Column 2: TÜV NORD (Germany) */}
          <div>
            <div className="mb-8 h-10 flex items-center">
                <h3 className="text-2xl font-bold tracking-tight">TÜV NORD GROUP</h3>
            </div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm border-b border-white/20 pb-2 inline-block">Germany</h4>
            
            <address className="not-italic text-gray-300 text-sm leading-7 mb-6">
                 Am TÜV 1<br/>
                 30519 Hannover<br/>
                 Germany
            </address>

            <div className="space-y-3 text-sm">
                 <div className="flex items-center group">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-[#FD7E14] transition-colors">
                     <PhoneIcon />
                   </div>
                   <span className="text-gray-300">+49 511 998-0</span>
                 </div>
                 <div className="flex items-center group">
                   <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-[#FD7E14] transition-colors">
                     <EmailIcon />
                   </div>
                   <span className="text-gray-300">info@tuev-nord.de</span>
                 </div>
            </div>
          </div>

          {/* Column 3: Quick Links & Social */}
          <div className="lg:pl-8">
             <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
             <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/services" className="hover:text-[#FD7E14] transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-[#FD7E14] transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-[#FD7E14] transition-colors">Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-[#FD7E14] transition-colors">Privacy Policy</Link></li>
             </ul>
             
             <div className="mt-10">
                <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm">Connect</h4>
                <div className="flex space-x-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                        <LinkedInIcon />
                    </a>
                </div>
             </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
            <p>&copy; {new Date().getFullYear()} O'Shea SA. A cooperation partner of TÜV NORD CERT GmbH. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;