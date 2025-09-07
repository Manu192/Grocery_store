import React from 'react';
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";

const AdminSidebarMenu = [
  { id: 'dashboard', label: 'Dashboard', path: '/admin/dashboard', icon: <LuLayoutDashboard /> },
  { id: 'products', label: 'Products', path: '/admin/products', icon: <FaShoppingBasket /> },
  { id: 'orders', label: 'Orders', path: '/admin/orders', icon: <MdAddShoppingCart /> }
];

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="mt-6 flex flex-col gap-2">
      {AdminSidebarMenu.map(menuItem => {
        const isActive = location.pathname === menuItem.path;

        return (
          <div
            key={menuItem.id}
            onClick={() => navigate(menuItem.path)}
            className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer transition-all
              ${isActive ? 'bg-green-100 text-green-700 font-semibold shadow-sm' : 'hover:bg-green-50 text-gray-700'}
            `}
          >
            <span className={`text-lg ${isActive ? 'text-green-600' : 'text-gray-500'}`}>
              {menuItem.icon}
            </span>
            <span>{menuItem.label}</span>
          </div>
        );
      })}
    </nav>
  );
}

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex flex-col bg-white border-r w-64 p-6 shadow-lg">
      {/* Logo / Header */}
      <div
        onClick={() => navigate('/admin/dashboard')}
        className="flex items-center gap-3 mb-8 cursor-pointer hover:scale-[1.02] transition-transform"
      >
        <MdAdminPanelSettings className="text-2xl text-green-600" />
        <h1 className="text-xl font-bold text-gray-800 tracking-wide">Admin Panel</h1>
      </div>

      {/* Menu Items */}
      <MenuItems />

      {/* Motivational Footer */}
      <div className="mt-auto pt-6 text-sm text-gray-500">
        <p className="italic">“Build with clarity. Lead with impact.”</p>
      </div>
    </aside>
  );
}

export default Sidebar;
