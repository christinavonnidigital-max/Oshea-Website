import React from "react";
import { Link } from "react-router-dom";

type LogoProps = {
  className?: string;
  ariaLabel?: string;
};

const Logo: React.FC<LogoProps> = ({
  className = "",
  ariaLabel = "O'Shea — A TÜV NORD Partner",
}) => {
  return (
    <Link
      to="/"
      aria-label={ariaLabel}
      className={`flex items-center gap-3 ${className}`}
    >
      <div className="leading-tight">
        <div className="text-2xl font-semibold tracking-tight sm:text-3xl bg-gradient-to-r from-[#FFC107] via-[#FD7E14] to-[#FF3B30] bg-clip-text text-transparent">
          O'Shea
        </div>
        <div className="text-[11px] font-semibold tracking-wide text-primary-700">
          A TÜV NORD Partner
        </div>
      </div>
    </Link>
  );
};

export default Logo;