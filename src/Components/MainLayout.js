import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => (
  <div className="flex max-h-screen">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Header className="fixed top-0 left-64 z-10" />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  </div>
);

export default MainLayout;
