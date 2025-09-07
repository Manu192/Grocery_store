import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Common/Components/Header'
import LandingPage from './User/Pages/LandingPage'
import PagenotFound from './Common/Pages/PagenotFound'
import Footer from './Common/Components/Footer'
import Auth from './Common/Pages/Auth'
import Preloader from './Common/Components/Preloader'
import { useEffect, useState } from 'react'
import Cart from './User/Pages/Cart'
import ProductListingPage from './User/Pages/ProductListingPage'
import CategoryPage from './User/Pages/CategoryPage'
function App() {
  const [isLoading, setIsLoading] = useState(true);
   const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
     {/* Header shows on all pages */}
      <Header cartItems={cartItems} />

      <Routes>
        {/* {common components} */}
        <Route path='/' element={isLoading ? <Preloader /> : <LandingPage />} />
        <Route path='*' element={<PagenotFound />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/category/:categoryName" element={<CategoryPage />} />
         <Route path="/products" element={<ProductListingPage />} />

      </Routes>
       {/* Footer shows on all pages */}
      <Footer />
    </>
  )
}

export default App
