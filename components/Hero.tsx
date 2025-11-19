import { type FC } from "react";
import { Link } from "react-router-dom";

const Hero: FC = () => {
  return (
    <section className="relative bg-[#0F1A3E] text-white pt-32 pb-48 overflow-hidden">
      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white rounded-tl-[120px] z-10"></div>
      
      <div className="relative container mx-auto px-4 lg:px-8 pt-4 lg:pt-12 z-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in-up">
            
            {/* Service Pills */}
            <div className="flex flex-wrap gap-3">
              {['CERTIFICATION', 'INSPECTION', 'TRAINING'].map(item => (
                <span key={item} className="px-5 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm text-sm font-bold tracking-wide">
                  {item}
                </span>
              ))}
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Your Excellence<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]">
                  in Execution
                </span>
              </h1>
              
              <div className="space-y-4 border-l-4 border-[#FD7E14] pl-6">
                <p className="text-2xl lg:text-3xl font-semibold text-white">
                  Get ISO certified in 3-6 months.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Win tenders. Prove quality. Grow your business with internationally recognized certifications.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545] text-[#0F1A3E] font-bold text-lg shadow-xl hover:scale-105 transition-transform text-center">
                Get Free Consultation
              </Link>
              <Link to="/services" className="px-8 py-4 rounded-full bg-white/10 border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/20 backdrop-blur-sm transition-colors text-center">
                View Standards
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-white mb-1">95%</div>
                <div className="text-sm text-gray-400">First-time Pass</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">3-6mo</div>
                <div className="text-sm text-gray-400">Avg. Timeline</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-gray-400">Certified Clients</div>
              </div>
            </div>

            {/* TÜV NORD Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm mt-4">
                <svg className="w-6 h-6 text-[#FFC107] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div className="text-sm">
                <span className="text-white/70 block sm:inline">Cooperation Partner of </span>
                <span className="font-bold text-white">TÜV NORD</span>
                </div>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4 max-w-lg ml-auto">
              <div className="space-y-4">
                <div className="h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group relative">
                  <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=600&auto=format&fit=crop" alt="Food Safety" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#FFC107] rounded-full mb-2">
                        <span className="text-xs font-bold text-[#0F1A3E]">FSSC 22000</span>
                      </div>
                      <div className="text-white font-bold text-sm">Food Safety</div>
                    </div>
                  </div>
                </div>
                
                <div className="h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group relative">
                  <img src="https://images.unsplash.com/photo-1581092446347-a85c4155db5e?q=80&w=600&auto=format&fit=crop" alt="Manufacturing" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#DC3545] rounded-full mb-2">
                        <span className="text-xs font-bold text-white">ISO 45001</span>
                      </div>
                      <div className="text-white font-bold text-sm">Manufacturing</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-12">
                <div className="h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group relative">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop" alt="Digital Standards" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#7C3AED] rounded-full mb-2">
                        <span className="text-xs font-bold text-white">ISO 27001</span>
                      </div>
                      <div className="text-white font-bold text-sm">Digital Security</div>
                    </div>
                  </div>
                </div>
                
                <div className="h-56 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group relative">
                  <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" alt="Environment" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                    <div>
                      <div className="inline-block px-3 py-1 bg-[#10B981] rounded-full mb-2">
                        <span className="text-xs font-bold text-white">ISO 14001</span>
                      </div>
                      <div className="text-white font-bold text-sm">Environment</div>
                    </div>
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

export default Hero;