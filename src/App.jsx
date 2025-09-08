import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';

import Header from './Common/Components/Header';
import Footer from './Common/Components/Footer';
import Preloader from './Common/Components/Preloader';
import PagenotFound from './Common/Pages/PagenotFound';
import Auth from './Common/Pages/Auth';

import LandingPage from './User/Pages/LandingPage';
import Cart from './User/Pages/Cart';
import CategoryPage from './User/Pages/categoryPage';
import ProductListingPage from './User/Pages/ProductListingPage';

import Layoutadmin from './AdminSide/Layoutadmin';
import Dashboard from './AdminSide/pages/Dashboard';
import Products from './AdminSide/pages/Products';
import Orders from './AdminSide/pages/Orders';
import Features from './AdminSide/pages/Features';
import Purchasehistory from './User/Pages/Purchasehistory';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={isLoading ? <Preloader /> : <LandingPage />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/purchasehistory" element={<Purchasehistory />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Layoutadmin />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="products" element={<Products />} />
  <Route path="orders" element={<Orders />} />
  <Route path="features" element={<Features />} />
</Route>

        {/* Fallback */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </>
  );
}

export default App;
