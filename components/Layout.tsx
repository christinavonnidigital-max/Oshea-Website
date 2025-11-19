import React, { lazy, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import BackToTop from "./BackToTop";

// Lazy load the AI Feature to improve initial page load performance
const AIFeature = lazy(() => import("./AIFeature"));

const Layout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-[#F5F6FB] text-gray-800 flex flex-col">
      <Header />
      {/* 
        If homepage, the header overlays the hero, so no top padding is needed on main 
        (the Hero component will add its own padding).
        If other page, header is sticky/fixed white, so we need padding to push content down.
      */}
      <main className={`flex-1 ${isHomePage ? '' : 'pt-24'} pb-12`}>
        <Outlet />
      </main>
      <Footer />
      
      <Suspense fallback={null}>
        <AIFeature />
      </Suspense>
      
      <BackToTop />
      <CookieConsent />
    </div>
  );
};

export default Layout;