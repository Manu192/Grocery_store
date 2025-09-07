import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogOutOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function AdminHeader() {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleNavbar = () => setExpanded(prev => !prev);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    Swal.fire({
      icon: 'success',
      title: 'Logged Out',
      text: 'See you soon, Commander 👋',
      timer: 2000,
      showConfirmButton: false,
    });

    navigate('/');
  };

  return (
    <>
      {/* Top Header */}
      <header className="flex items-center justify-between px-4 py-3 bg-white border-b shadow-md">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden bg-gradient-to-r from-green-600 to-lime-500 text-white px-3 py-2 rounded-md flex items-center gap-2 hover:brightness-110 transition"
          onClick={toggleNavbar}
        >
          <GiHamburgerMenu />
          <span className="sr-only">Toggle Menu</span>
        </button>

        {/* Logout Button */}
        <div className="flex flex-1 justify-between">

          <div className="flex items-center space-x-2">
          <img 
            src="https://copilot.microsoft.com/th/id/BCO.5c5c3a82-9d6c-48ba-9608-db8977b0e0bc.png" 
            alt="FreshBasket" 
            className="h-8 w-8 rounded-2xl" 
          />
          <span className="text-xl font-bold">FreshBasket</span>
        </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-teal-500 text-white px-4 py-2 rounded-md shadow text-sm font-semibold hover:scale-105 transition-transform"
          >
            <IoLogOutOutline /> Logout
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {expanded && (
        <nav className="lg:hidden bg-gray-50 px-4 py-4 space-y-4 shadow-inner rounded-b-xl">
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition font-medium"
            onClick={() => setExpanded(false)}
          >
            <LuLayoutDashboard className="text-green-500" />
            <span className="tracking-wide">Dashboard</span>
          </Link>
          <Link
            to="/admin/products"
            className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition font-medium"
            onClick={() => setExpanded(false)}
          >
            <FaShoppingBasket className="text-green-500" />
            <span className="tracking-wide">Products</span>
          </Link>
          <Link
            to="/admin/orders"
            className="flex items-center gap-3 text-gray-700 hover:text-green-600 transition font-medium"
            onClick={() => setExpanded(false)}
          >
            <MdAddShoppingCart className="text-green-500" />
            <span className="tracking-wide">Orders</span>
          </Link>
        </nav>
      )}
    </>
  );
}
