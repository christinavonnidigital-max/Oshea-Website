
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const FeaturedCaseStudy: FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <span className="inline-block h-1 w-12 bg-orange-500"></span>
                <span className="text-sm font-bold tracking-widest text-gray-500 uppercase">Success Stories</span>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content Side */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0F1A3E] leading-tight mb-6">
                        How a logistics firm won a <span className="text-orange-500">R45M contract</span> with ISO certification.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        A growing cross-border fleet needed ISO 9001 and ISO 45001 fast to qualify for mining tenders. We built a practical system that drivers could actually use, not just paperwork.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-10">
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-1">4</div>
                            <p className="font-bold text-[#0F1A3E] text-sm">Months to Certify</p>
                            <p className="text-xs text-gray-500">From gap analysis to certificate</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-1">35%</div>
                            <p className="font-bold text-[#0F1A3E] text-sm">Fewer Incidents</p>
                            <p className="text-xs text-gray-500">Reduced insurance premiums</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                         <Link 
                            to="/industries/logistics"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#0F1A3E] text-white font-bold hover:bg-[#1a2b5f] transition-colors"
                        >
                            Read Full Case Study
                        </Link>
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative">
                    <div className="absolute inset-0 bg-[#0F1A3E] rounded-br-[80px] rounded-tl-[80px] transform rotate-3 translate-x-4 translate-y-4 opacity-10"></div>
                    <div className="relative rounded-br-[80px] rounded-tl-[80px] overflow-hidden shadow-2xl aspect-[4/3]">
                        <img 
                            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=75&w=800&auto=format&fit=crop" 
                            alt="Logistics trucks" 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/80 to-transparent flex items-end p-8">
                            <div className="border-l-4 border-orange-500 pl-4">
                                <p className="italic text-white text-sm md:text-base mb-2">"The certification paid for itself with the first contract."</p>
                                <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">— Operations Director</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudy;
