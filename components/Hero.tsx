import { type FC, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const heroFood = "https://images.unsplash.com/photo-15793540871-02100de5b49d?q=75&w=600&auto=format&fit=crop&fm=webp";
const heroDigital = "https://images.unsplash.com/photo-1555949963-ff980e621733?q=75&w=600&auto=format&fit=crop&fm=webp";
const heroIndustrial = "https://images.unsplash.com/photo-1581092446347-a85c4155db5e?q=75&w=600&auto=format&fit=crop&fm=webp";
const heroSustainability = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=75&w=600&auto=format&fit=crop&fm=webp";


type HeroCardProps = {
  image: string;
  label: string;
};

const HeroCard: FC<HeroCardProps> = ({ image, label }) => (
  <div className="relative rounded-[26px] overflow-hidden bg-white shadow-xl group">
    <img
      src={image}
      alt={label}
      className="w-full h-32 md:h-40 lg:h-44 object-cover group-hover:scale-105 transition-transform duration-300"
      loading="eager"
      decoding="sync"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div className="absolute bottom-3 left-4 right-4 text-xs md:text-sm font-semibold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
      {label}
    </div>
  </div>
);

const Hero: FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Start animation when 30% of the hero is visible
      }
    );

    const currentElement = heroRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gray-50">
      {/* Navy band with curved bottom like the brochure */}
      <div className="absolute inset-x-0 top-0 h-[480px] md:h-[520px] bg-[#0F1A3E] rounded-b-[80px] md:rounded-b-[120px]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-20 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left – text like the brochure */}
          <div className="text-white md:pr-8">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-[#FFC107] mb-3">
              Certification • Inspection • Training
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              O'Shea SA
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
              Your Excellence in Execution. A cooperation partner of TÜV NORD
              CERT GmbH, supporting organisations across Sub Sahara Africa.
            </p>

            {/* Pills: Certification / Inspection / Training */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/25 text-xs md:text-sm">
                Certification
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/25 text-xs md:text-sm">
                Inspection
              </span>
              <span className="px-4 py-2 rounded-full bg-white/10 border border-white/25 text-xs md:text-sm">
                Training
              </span>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className={`inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#DC3545] font-semibold text-[#0F1A3E] shadow-lg hover:scale-105 hover:shadow-xl transition-transform transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white ${isInView ? 'animate-pulse-subtle' : ''}`}
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Right – 2×2 image grid, staggered like the brochure tiles */}
          <div className="relative md:pl-4 lg:pl-8">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <HeroCard image={heroFood} label="Food safety & FSSC 22000" />
              <div className="translate-y-5">
                <HeroCard
                  image={heroDigital}
                  label="Digital transformation & ISO 27001"
                />
              </div>
              <div className="-translate-y-3">
                <HeroCard
                  image={heroIndustrial}
                  label="Industrial operations & ISO 45001"
                />
              </div>
              <HeroCard
                image={heroSustainability}
                label="Sustainability & ISO 14001"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;