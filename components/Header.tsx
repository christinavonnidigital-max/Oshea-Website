import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
];

const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    isTransparent ? 'bg-transparent' : 'bg-white shadow-md'
  }`;

  // Text colors for navigation
  const activeLinkStyle = isTransparent 
    ? 'text-white font-bold bg-white/20 backdrop-blur-sm' 
    : 'text-orange-600 font-bold bg-orange-50';
    
  const inactiveLinkStyle = isTransparent
    ? 'text-white/90 hover:text-white hover:bg-white/10'
    : 'text-gray-600 hover:text-orange-600 hover:bg-gray-50';

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
             <Logo variant={isTransparent ? 'light' : 'dark'} />
          </div>
          <nav aria-label="Main navigation" className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all ${
                      isActive ? activeLinkStyle : inactiveLinkStyle
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;