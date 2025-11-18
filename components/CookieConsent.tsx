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
      aria-describedby="cookie-consent-description"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          <h2 id="cookie-consent-title" className="font-bold text-base text-[#0F1A3E]">Our Use of Cookies</h2>
          <p id="cookie-consent-description" className="mt-1">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our{' '}
            <Link to="/cookie-policy" className="font-semibold text-orange-600 hover:underline">
              Cookie Policy
            </Link>.
          </p>
        </div>
        <div className="flex-shrink-0 flex items-center gap-4">
          <button
            onClick={() => handleConsent(false)}
            className="px-5 py-2 rounded-full text-sm font-semibold text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
          >
            Decline
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#0F1A3E] hover:bg-opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0F1A3E]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
