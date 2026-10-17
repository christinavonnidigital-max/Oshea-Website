import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  const linkClass = "text-slate-600 hover:text-slate-900 transition-colors";
  const activeLinkClass = "text-primary-700 font-semibold";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur shadow-sm"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          event.preventDefault();
          setOpen(false);
          menuButton.current?.focus();
        }
      }}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Logo />

        {/* Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-medium lg:flex">
          <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Services</NavLink>
          <NavLink to="/industries" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Industries</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>About</NavLink>
          <NavLink to="/team" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Team</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Insights</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>Contact</NavLink>

          <Link
            to="/contact"
            className="rounded-full bg-brand-warm px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#E84E00] active:translate-y-px"
          >
            Talk to an expert
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          ref={menuButton}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 20 20"
            className="h-5 w-5"
            stroke="currentColor"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M3 5h14M3 10h14M3 15h14"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
        <div id="mobile-navigation" hidden={!open} className="lg:hidden border-t border-slate-200 bg-white p-4 absolute w-full max-h-[calc(100dvh-80px)] overflow-y-auto shadow-lg">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-4 text-sm font-medium">
            <NavLink to="/" onClick={() => setOpen(false)} className="text-slate-900">Home</NavLink>
            <NavLink to="/services" onClick={() => setOpen(false)} className="text-slate-600">Services</NavLink>
            <NavLink to="/industries" onClick={() => setOpen(false)} className="text-slate-600">Industries</NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="text-slate-600">About</NavLink>
            <NavLink to="/team" onClick={() => setOpen(false)} className="text-slate-600">Team</NavLink>
            <NavLink to="/insights" onClick={() => setOpen(false)} className="text-slate-600">Insights</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="text-slate-600">Contact</NavLink>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-brand-warm px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#E84E00] active:translate-y-px"
            >
              Talk to an expert
            </Link>
          </nav>
        </div>
    </header>
  );
};

export default Header;
