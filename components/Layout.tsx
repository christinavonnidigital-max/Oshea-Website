import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AIFeature from "./AIFeature";
import CookieConsent from "./CookieConsent";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F6FB] text-gray-800 flex flex-col">
      <Header />
      <main className="flex-1 pt-4 pb-12">
        <Outlet />
      </main>
      <Footer />
      <AIFeature />
      <CookieConsent />
    </div>
  );
};

export default Layout;