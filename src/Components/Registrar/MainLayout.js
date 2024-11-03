// MainLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="flex max-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header className="fixed top-0 left-64 w-full z-10" /> {/* Fix Header */}
        <div className="flex-1 overflow-y-auto"> {/* Add margin for the fixed header */}
          <Outlet /> {/* Renders nested routes */}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
