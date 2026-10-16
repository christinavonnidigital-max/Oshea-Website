import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <a href="#main-content" onClick={(event) => { event.preventDefault(); document.getElementById('main-content')?.focus(); document.getElementById('main-content')?.scrollIntoView(); }} className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:text-primary-700">Skip to content</a>
    <Header />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </>
);
export default Layout;
