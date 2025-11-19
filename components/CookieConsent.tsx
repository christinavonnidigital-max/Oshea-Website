import { useState, useEffect, type FC } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent: FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already made a choice
    const consent = localStorage.getItem('cookie_consent');
    if (consent === null) {
      // If no choice has been made, show the banner
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (consent: boolean) => {
    // Store the user's choice and hide the banner
    localStorage.setItem('cookie_consent', String(consent));
    setIsVisible(false);
    // Here you would typically initialize analytics, etc. if consent is true
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      className="fixed z-50 bottom-0 left-0 w-full sm:w-auto sm:bottom-4 sm:left-4 sm:max-w-sm"
    >
      <div className="bg-white border-t sm:border border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:shadow-xl sm:rounded-xl p-6 animate-fade-in-up">
        <h2 id="cookie-consent-title" className="font-bold text-[#0F1A3E] mb-2 text-sm">We use cookies</h2>
        <p className="text-xs text-gray-600 mb-4 leading-relaxed">
          We use cookies to improve your experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies. 
          <Link to="/cookie-policy" className="ml-1 text-orange-600 hover:underline">Read Policy</Link>.
        </p>
        
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent(true)}
            className="flex-1 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0F1A3E] hover:bg-[#1a2b5f] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F1A3E]"
          >
            Accept
          </button>
          <button
            onClick={() => handleConsent(false)}
            className="flex-1 px-4 py-2 rounded-lg text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;