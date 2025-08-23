import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Common/Components/Header'
import LandingPage from './User/Pages/LandingPage'
import PagenotFound from './Common/Pages/PagenotFound'
import Footer from './Common/Components/Footer'

function App() {

  return (
    <><Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
