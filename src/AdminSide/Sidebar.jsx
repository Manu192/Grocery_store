import React, { Fragment } from 'react'
import { MdAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { LuLayoutDashboard } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import "../../src/App.css"

const AdminSidebarMenu = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/admin/dashboard',
    icons: <LuLayoutDashboard />

  },
  {
    id: 'products',
    label: 'Products',
    path: '/admin/products',
    icons: <FaShoppingBasket />

  },
  {
    id: 'orders',
    label: 'Orders',
    path: '/admin/orders',
    icons: <MdAddShoppingCart />
  }
]

function MenuItems() {
  const navigate = useNavigate()

  return <nav className="mt-5 d-flex flex-column gap-2">
    {
      AdminSidebarMenu.map(menuItem => <div key={menuItem.id} onClick={() => navigate(menuItem.path)} className='d-flex align-items-center gap-2 rounded px-3 py-2 fw-bold'>
        {menuItem.icons}
        <span>
          <Link to={menuItem.path} className="sidebar-link fw-bold">
            {menuItem.label}
          </Link>
        </span>
      </div>)
    }
  </nav>
}

function Sidebar() {
  const navigate = useNavigate()
  return (
    <Fragment>
      
      <aside className="d-none d-lg-flex flex-column border-end bg-light p-4"
        style={{ width: "16rem" }}>
        <div onClick={() => navigate('/admin/dashboard')} className="d-flex align-items-center gap-2 cursor-pointer">
          <MdAdminPanelSettings className="fs-4" />
          <h1 className="fs-3 fw-extrabold mb-0">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  )
}

export default Sidebar