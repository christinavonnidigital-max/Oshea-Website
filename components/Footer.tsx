import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-gray-700 pt-12 pb-6">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
      <div className="space-y-4">
        <Logo compact className="mb-3" />
        <p className="text-sm">Your Excellence in Execution.<br />Cooperation Partner of TÜV NORD CERT GmbH</p>
      </div>
      <div className="text-sm space-y-2">
        <h4 className="font-semibold text-gray-900">Contact</h4>
        <p>Unit RG0-002, The Campus, 57 Sloane St, Bryanston, South Africa</p>
        <p>Email: <a className="text-blue-700 hover:underline" href="mailto:info@oshea.co.za">info@oshea.co.za</a></p>
        <p>Phone: +27 10 210 7715</p>
      </div>
      <div className="text-sm space-y-2">
        <h4 className="font-semibold text-gray-900">Quick Links</h4>
        <ul className="space-y-1">
          <li><a href="/services" className="hover:text-blue-700">Services</a></li>
          <li><a href="/industries" className="hover:text-blue-700">Industries</a></li>
          <li><a href="/about" className="hover:text-blue-700">About</a></li>
          <li><a href="/team" className="hover:text-blue-700">Team</a></li>
          <li><a href="/contact" className="hover:text-blue-700">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 mt-10">
      © {new Date().getFullYear()} O'Shea SA. All rights reserved.
    </div>
  </footer>
);
export default Footer;
