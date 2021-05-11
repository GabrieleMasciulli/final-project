import React from 'react'
import '../wwwroot/css/Navbar.css'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

const Navbar = ({ loading, globalStats }) => {
  return (
    <div className='navbar-wrapper'>
      <DesktopNav loading={loading} stats={globalStats} />
      <MobileNav />
    </div>
  )
}

export default Navbar
