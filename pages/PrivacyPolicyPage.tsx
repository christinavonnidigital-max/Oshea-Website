import type { FC } from 'react';

const PrivacyPolicyPage: FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-[#0F1A3E] mb-8">Privacy Policy</h1>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            <p>
              Welcome to O'Shea SA. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <h2 className="text-3xl font-bold text-[#0F1A3E] mt-10">Policy Content Coming Soon</h2>
            <p>
              We are currently finalizing our comprehensive Privacy Policy. Please check back later for full details on how we handle your data.
            </p>
            <p>
              Our full policy will cover topics such as:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Information We Collect</li>
              <li>How We Use Your Information</li>
              <li>Sharing Your Information</li>
              <li>Your Data Protection Rights</li>
              <li>Cookie Policy</li>
              <li>Contact Information</li>
            </ul>
            <p>
              Thank you for your patience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;