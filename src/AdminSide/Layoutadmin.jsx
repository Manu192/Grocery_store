import React from 'react';
import Sidebar from './Sidebar';
import AdminHeader from './AdminHeader';
import { Outlet } from 'react-router-dom';

function Layoutadmin() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-green-50 via-white to-lime-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <AdminHeader />

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto bg-gray-100 rounded-tl-3xl shadow-inner">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layoutadmin;
