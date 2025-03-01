import Navbar from '@/components/layouts/Navbar';
import React from 'react';

import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {


  return (
    <div>
      <header className="sticky top-0 z-[999]">
      <Navbar />
      </header>
      <main className="pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
