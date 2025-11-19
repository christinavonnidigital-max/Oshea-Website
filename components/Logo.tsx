import React from "react";
import { NavLink } from "react-router-dom";

interface LogoProps {
  variant?: 'default' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'default' }) => {
  const isLight = variant === 'light';
  
  return (
    <NavLink to="/" className="inline-block leading-tight select-none group">
      <div className="flex items-center gap-2">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFC107] to-[#FD7E14]">
          O&apos;Shea
        </div>
        <div className={`text-[10px] md:text-xs border-l pl-2 ml-2 leading-tight ${isLight ? 'text-gray-300 border-gray-600' : 'text-gray-600 border-gray-300'}`}>
          A <span className={`${isLight ? 'text-white' : 'text-[#0046AD]'} font-bold block md:inline`}>TÜV NORD</span> PARTNER
        </div>
      </div>
    </NavLink>
  );
};

export default Logo;