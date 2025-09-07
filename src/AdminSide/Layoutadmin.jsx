import React from 'react'
import Sidebar from './Sidebar'
import AdminHeader from './AdminHeader'
import { Outlet } from 'react-router-dom'

function Layoutadmin() {
  return (
    <div className='d-flex min-vh-100 w-100'>
        <Sidebar/>
        <div className='d-flex flex-column flex-fill'>
            <AdminHeader/>
        <main className='d-flex flex-fill p-4 p-md-5 bg-light'>
            <Outlet/>
        </main>
        </div>
    </div>
  )
}

export default Layoutadmin