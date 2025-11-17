
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const Hero: FC = () => {
  return (
    <div className="relative bg-[#0F1A3E] text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">O'Shea SA</h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300">"Your Excellence in Execution."</p>
          <div className="mt-8">
            <Link 
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-md shadow-lg hover:opacity-90 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;