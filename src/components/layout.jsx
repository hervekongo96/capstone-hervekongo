import React from 'react'
import Home from './pages/home'
import { Outlet } from 'react-router-dom'




function Layout() {
  return (
    <div  className="container mx-auto">
        <div>
            <Home />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout