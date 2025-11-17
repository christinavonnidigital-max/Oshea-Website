
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AIFeature from './AIFeature';

const Layout: FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AIFeature />
    </div>
  );
};

export default Layout;