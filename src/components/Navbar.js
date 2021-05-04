import React from 'react'
import '../wwwroot/css/Navbar.css'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = ({ cryptoCount }) => {
  return (
    <div className='navbar-wrapper'>
      <DesktopNav cryptoCount={cryptoCount} />
      <MobileNav />
    </div>
  )
}

export default Navbar
