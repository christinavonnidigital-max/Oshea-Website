import type { FC } from 'react';
import { Link } from 'react-router-dom';

const FinalCTA: FC = () => {
  return (
    <section className="py-24 bg-[#0F1A3E] text-white relative overflow-hidden">
       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]"></div>
       
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to get certified?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Free consultation. Fixed-price quote within 48 hours. 3-6 month timeline.
          </p>
          <Link to="/contact" className="inline-block px-10 py-5 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545] text-[#0F1A3E] font-bold text-xl shadow-2xl hover:scale-105 transition-transform">
            Book Free Consultation
          </Link>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>30-minute call</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Expert guidance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;