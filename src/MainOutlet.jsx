import React from 'react'
import Navbar from './Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

const MainOutlet = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainOutlet
