import React from "react";
import { Link } from "react-router-dom";

const industries = [
  {
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 9001, ISO 14001, ISO 45001",
    path: "/contact"
  },
  {
    name: "Construction & Engineering",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 9001, ISO 45001",
    path: "/contact"
  },
  {
    name: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=75&w=600&auto=format&fit=crop",
    standards: "FSSC 22000, HACCP, ISO 22000",
    path: "/fssc-22000"
  },
  {
    name: "Energy & Utilities",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 9001, ISO 50001, ISO 14001",
    path: "/contact"
  },
  {
    name: "Information Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 27001, ISO 20000",
    path: "/contact"
  },
  {
    name: "Healthcare & Pharmaceuticals",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 9001, ISO 13485",
    path: "/contact"
  },
  {
    name: "Logistics & Supply Chain",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 9001, ISO 45001, ISO 28000",
    path: "/industries/logistics"
  },
  {
    name: "Mining",
    image: "https://images.unsplash.com/photo-1579547945413-497e1b99dac0?q=75&w=600&auto=format&fit=crop",
    standards: "ISO 14001, ISO 45001, ISO 9001",
    path: "/contact"
  },
];

const IndustryCard: React.FC<{ industry: typeof industries[0] }> = ({ industry }) => (
  <Link
    to={industry.path}
    className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer block"
  >
    {/* Background Image with Zoom Effect */}
    <img
      src={industry.image}
      alt={industry.name}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1A3E] via-[#0F1A3E]/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
      <h3 className="text-xl font-bold text-white mb-2 leading-tight">{industry.name}</h3>
      
      {/* Animated Line */}
      <div className="h-1 w-12 bg-orange-500 rounded-full mb-4 transition-all duration-300 group-hover:w-20" />
      
      {/* Revealed Text */}
      <div className="h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100 group-hover:mb-2">
        <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold mb-1">
          Key Standards
        </p>
        <p className="text-sm text-orange-300 font-medium">
          {industry.standards}
        </p>
      </div>
    </div>
  </Link>
);

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-semibold tracking-wide bg-orange-100 text-orange-600 mb-4">
            Diverse Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F1A3E]">
            Industries we serve
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We understand the unique challenges and regulatory requirements of your sector.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;