
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-[#0F1A3E] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">O'Shea SA</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">"Your Excellence in Execution."</p>
          <div className="mt-8">
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="swoopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#FFC107' }} />
              <stop offset="50%" style={{ stopColor: '#FD7E14' }} />
              <stop offset="100%" style={{ stopColor: '#DC3545' }} />
            </linearGradient>
          </defs>
          <path fill="url(#swoopGradient)" fillOpacity="1" d="M0,224L48,229.3C96,235,192,245,288,250.7C384,256,480,256,576,229.3C672,203,768,149,864,138.7C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#FFFFFF" fillOpacity="1" d="M0,256L48,245.3C96,235,192,213,288,202.7C384,192,480,192,576,197.3C672,203,768,213,864,208C960,203,1056,181,1152,176C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;