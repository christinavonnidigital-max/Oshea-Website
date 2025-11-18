import React from "react";
import { NavLink } from "react-router-dom";

interface LogoProps {
  variant?: 'dark' | 'light'; // 'dark' means dark text (for light bg), 'light' means light text (for dark bg)
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-[#111827]';
  const partnerColor = variant === 'light' ? 'text-blue-200' : 'text-[#4B3BFF]';
  const tuvColor = variant === 'light' ? 'text-white' : 'text-[#0046AD]';

  return (
    <NavLink to="/" className="inline-block leading-tight select-none">
      {/* O'Shea gradient text */}
      <div className="text-3xl md:text-4xl font-semibold tracking-tight bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] bg-clip-text text-transparent">
        O&apos;Shea
      </div>

      {/* Thin gradient line */}
      <div className="mt-1 h-[2px] w-full bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#0046AD]" />

      {/* A TÜV NORD Partner line */}
      <div className="mt-1 text-[11px] md:text-xs tracking-[0.18em] uppercase">
        <span className={textColor}>A </span>
        <span className={`font-extrabold ${tuvColor}`}>TÜV&nbsp;NORD</span>
        <span className={partnerColor}> Partner</span>
      </div>
    </NavLink>
  );
};

export default Logo;