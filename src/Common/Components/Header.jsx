import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="bg-green-800 text-white shadow-md py-3.5">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo + Brand Name */}
        <div className="flex items-center space-x-2">
          <img 
            src="https://copilot.microsoft.com/th/id/BCO.5c5c3a82-9d6c-48ba-9608-db8977b0e0bc.png" 
            alt="FreshBasket" 
            className="h-8 w-8 rounded-2xl" 
          />
          <span className="text-xl font-bold">FreshBasket</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6 me-15">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/products" className="hover:text-yellow-300">Shop</Link>
          <Link to="/offers" className="hover:text-yellow-300">Offers</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>

        {/* Mobile Menu Toggle + Cart + Login */}
        <div className="flex items-center space-x-3">
          <button 
            className="md:hidden text-yellow-300 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          <Link
            to="/cart"
            className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold"
          >
            Cart ({cartItems.length})
          </Link>

          <Link to="/login">
            <button className="bg-white text-green-900 px-3 py-1 rounded hover:bg-yellow-300 font-semibold flex items-center gap-1">
              Login <IoPerson className="mt-1" />
            </button>
          </Link>
        </div>
      </div>

      {/* Search Bar (Desktop Only) */}
      <div className="hidden md:flex justify-center mx-6 mt-2">
        <input
          type="text"
          placeholder="Search for fruits, veggies, snacks..."
          className="w-full max-w-md px-4 py-2 bg-white text-green-700 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button 
          className="bg-yellow-300 text-green-900 px-4 py-2 rounded-r-md hover:bg-yellow-400 transition duration-500 ease-in-out"
        >
          Search
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700 px-4 pb-4 space-y-3">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/products" className="block hover:text-yellow-300">Shop</Link>
          <Link to="/offers" className="block hover:text-yellow-300">Offers</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
          <Link to="/login" className="block hover:text-yellow-300">Login</Link>
          <Link to="/register" className="block hover:text-yellow-300">Register</Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
