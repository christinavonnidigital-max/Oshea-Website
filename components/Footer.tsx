import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer: React.FC = () => (
  <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* Brand Section */}
        <div className="space-y-4 lg:col-span-1">
          <Logo compact className="mb-3" />
          <p className="text-sm text-slate-600 leading-relaxed">
            Your Excellence in Execution.
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            Cooperation Partner of TÜV NORD CERT GmbH
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Contact</h4>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="leading-relaxed">Unit RG0-002, The Campus,<br />57 Sloane St, Bryanston,<br />South Africa</p>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a className="text-blue-700 hover:text-blue-800 transition-colors font-medium" href="mailto:info@oshea.co.za">
                info@oshea.co.za
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a className="text-slate-600 hover:text-slate-900 transition-colors" href="tel:+27102107715">
                +27 10 210 7715
              </a>
            </div>
          </div>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/services" className="text-slate-600 hover:text-blue-700 transition-colors">
                Management Systems Certification
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-slate-600 hover:text-blue-700 transition-colors">
                Inspection & Audits
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-slate-600 hover:text-blue-700 transition-colors">
                Training & Awareness
              </Link>
            </li>
            <li>
              <Link to="/industries" className="text-slate-600 hover:text-blue-700 transition-colors">
                Industries We Serve
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="text-slate-600 hover:text-blue-700 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" className="text-slate-600 hover:text-blue-700 transition-colors">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/insights" className="text-slate-600 hover:text-blue-700 transition-colors">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-slate-600 hover:text-blue-700 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} O'Shea SA. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-blue-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
