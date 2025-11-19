
import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Header is transparent only on Home page when not scrolled.
  // Otherwise it is white (solid).
  const isTransparent = isHomePage && !isScrolled;

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isTransparent ? 'bg-transparent py-6' : 'bg-white shadow-md py-3'
  }`;

  // Text colors for navigation
  const activeLinkStyle = isTransparent 
    ? 'text-white font-bold after:content-[""] after:block after:w-full after:h-0.5 after:bg-orange-500' 
    : 'text-orange-600 font-bold';
    
  const inactiveLinkStyle = isTransparent
    ? 'text-white/90 hover:text-white'
    : 'text-gray-600 hover:text-orange-600';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
             <Logo variant={isTransparent ? 'light' : 'dark'} />
          </div>
          
          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${
                      isActive ? activeLinkStyle : inactiveLinkStyle
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <Link
                to="/contact"
                className={`px-6 py-2.5 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:-translate-y-0.5 ${
                    isTransparent 
                    ? 'bg-white text-[#0F1A3E] hover:bg-gray-100' 
                    : 'bg-[#0F1A3E] text-white hover:bg-[#1a2b5f]'
                }`}
            >
                Get Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${isTransparent ? 'text-white' : 'text-gray-600'}`}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-gray-100 absolute top-full left-0 right-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-gray-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4">
                <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center px-6 py-3 rounded-full bg-[#0F1A3E] text-white font-bold hover:bg-[#1a2b5f]"
                >
                    Get Free Quote
                </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
