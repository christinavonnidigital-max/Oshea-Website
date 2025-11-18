import type { FC } from 'react';

const CookiePolicyPage: FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0F1A3E] mb-8">Cookie Policy</h1>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>
              This Cookie Policy explains what cookies are and how we use them. You should read this policy to understand what cookies are, how we use them, the types of cookies we use, the information we collect using cookies, how that information is used, and how to control your cookie preferences.
            </p>
            <h2 className="text-3xl font-bold text-[#0F1A3E] mt-10">Policy Content Coming Soon</h2>
            <p>
              We are currently finalizing our comprehensive Cookie Policy. Please check back later for full details.
            </p>
            <p>
              Our full policy will cover topics such as:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>What Are Cookies?</li>
              <li>How We Use Cookies</li>
              <li>Types of Cookies We Use</li>
              <li>How to Manage Your Cookie Preferences</li>
            </ul>
            <p>
              For further information on how we use, store, and keep your personal data secure, see our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
