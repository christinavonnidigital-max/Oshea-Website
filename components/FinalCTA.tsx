
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const FinalCTA: FC = () => {
  return (
    <section className="py-20 bg-[#0F1A3E] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FFC107] rounded-full opacity-10 blur-3xl"></div>
             <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to get started?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Join 100+ South African companies who trust O'Shea SA for their certification needs. 
                    Fast, practical, and internationally recognized.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545] text-[#0F1A3E] font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
                    >
                        Book Free Consultation
                    </Link>
                    <a
                        href="tel:+27102107715"
                        className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-center"
                    >
                        Call +27 10 210 7715
                    </a>
                </div>

                <p className="mt-8 text-sm text-gray-400">
                    No obligation • Fixed price quotes • 24h Response
                </p>
            </div>
        </div>
    </section>
  );
};

export default FinalCTA;
