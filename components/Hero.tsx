
import { type FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Hero: FC = () => {
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gray-50 overflow-hidden">
      {/* Navy band with curved bottom matching brochure */}
      <div className="absolute inset-x-0 top-0 h-[920px] lg:h-[980px] bg-[#0F1A3E] rounded-br-[120px] z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            {/* Service Pills */}
            <div className="flex flex-wrap gap-3 text-xs md:text-sm font-bold tracking-wide uppercase animate-fade-in-up">
               {['Certification', 'Inspection', 'Training'].map((pill) => (
                 <span key={pill} className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                   {pill}
                 </span>
               ))}
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Your Excellence <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545]">
                  in Execution
                </span>
              </h1>
              
              {/* Value Prop / Subheadline - Enhanced for Conversion */}
              <div className="border-l-4 border-[#FD7E14] pl-6 py-2">
                  <p className="text-2xl md:text-3xl font-semibold text-white leading-tight mb-3">
                    Get ISO certified in 3-6 months.
                  </p>
                  <p className="text-lg text-gray-300 font-light leading-relaxed max-w-lg">
                    Win tenders. Prove quality. Grow your business with a TÜV NORD cooperation partner.
                  </p>
              </div>
            </div>

            {/* CTAs - Simplified */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545] text-[#0F1A3E] font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-center"
              >
                View Standards
              </Link>
            </div>

            {/* Social Proof / Stats - Simplified & High Impact */}
            <div className="pt-8 flex flex-wrap items-center gap-8 md:gap-12 text-sm font-medium text-gray-400 border-t border-white/10 mt-8">
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">95%</span>
                    First-time Pass
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">3-6mo</span>
                    Avg. Timeline
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white mb-1">100+</span>
                    Certified Clients
                </div>
            </div>
          </div>

          {/* Right Image Grid - Staggered 4 images representing key sectors (Brochure Style) */}
          <div className="relative hidden lg:block">
             {/* Decorative blob/gradient behind images */}
             <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-[#FFC107] via-[#FD7E14] to-[#DC3545] opacity-20 rounded-full blur-3xl pointer-events-none" />
             
             <div className="grid grid-cols-2 gap-4 relative z-10">
               {/* Column 1 - Shifted down */}
               <div className="space-y-4 pt-12">
                 <div className="h-48 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 border-4 border-white/10 group relative">
                    <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=75&w=600&auto=format&fit=crop" alt="Food Safety" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                      <span className="text-white font-bold text-sm tracking-wide">Food Safety</span>
                    </div>
                 </div>
                 <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 border-4 border-white/10 group relative">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop" alt="Manufacturing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                      <span className="text-white font-bold text-sm tracking-wide">Manufacturing</span>
                    </div>
                 </div>
               </div>
               
               {/* Column 2 */}
               <div className="space-y-4">
                 <div className="h-64 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 border-4 border-white/10 group relative">
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=600&auto=format&fit=crop" alt="Digital Standards" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                      <span className="text-white font-bold text-sm tracking-wide">Standards & Digital</span>
                    </div>
                 </div>
                 <div className="h-48 rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 border-4 border-white/10 group relative">
                    <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=75&w=600&auto=format&fit=crop" alt="Environment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E]/90 to-transparent flex items-end p-4">
                      <span className="text-white font-bold text-sm tracking-wide">Environment</span>
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
