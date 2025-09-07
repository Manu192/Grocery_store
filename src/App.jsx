import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Common/Components/Header'
import LandingPage from './User/Pages/LandingPage'
import PagenotFound from './Common/Pages/PagenotFound'
import Footer from './Common/Components/Footer'
import Auth from './Common/Pages/Auth'
import Preloader from './Common/Components/Preloader'
import { useEffect, useState } from 'react'
import Layoutadmin from './AdminSide/Layoutadmin'
import Dashboard from './AdminSide/pages/Dashboard'
import Products from './AdminSide/pages/Products'
import Orders from './AdminSide/pages/Orders'
import Features from './AdminSide/pages/Features'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <Routes>
        {/* {common components} */}
        <Route path='/' element={isLoading ? <Preloader /> : <LandingPage />} />
        <Route path='/admin' element={<Layoutadmin/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='features' element={<Features/>}/>        
        </Route>
        <Route path='*' element={<PagenotFound />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register />} />
      </Routes>
    </>
  )
}

export default App
