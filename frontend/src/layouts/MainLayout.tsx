import Navbar from '@/components/layouts/Navbar';
import React from 'react';

import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {


  return (
    <div>
      <Navbar />
      <main className="pb-20">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
