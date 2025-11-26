import React from 'react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=75" 
}) => {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-20"
          loading="lazy"
          decoding="async"
          width="1400"
          height="900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 to-brand-dark/90 mix-blend-multiply" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHero;
