import React from 'react'
import '../../static/css/Navbar.css'
import logo from '../../static/img/logo_size.jpeg'
import NavItem from './NavItem'
import SearchBar from './SearchBar'
import Profile from './Profile'

const Navbar = ({ loginClick, signupClick, user, logoutClick }) => {
  return (
    <div className='navbar-wrapper'>
      <a href='/' title='Go to homepage' className='logo-link'>
        <div className='logo-wrapper'>
          <img src={logo} alt='' width='180' />
        </div>
      </a>
      <div className='nav-links-wrapper'>
        <nav className='nav-links-content'>
          <ul>
            <NavItem name='Cryptocurrencies' url='/' />
            <NavItem name='Exchanges' url='#' />
            <NavItem name='Portfolio' url='portfolio' />
            <NavItem name='Watchlist' url='#' />
            <NavItem name='Some Link' url='#' />
            <NavItem name='Some other Link' url='#' />
          </ul>
        </nav>
      </div>

      {user.isAuthenticated ? (
        <Profile handleLogout={logoutClick} />
      ) : (
        <>
          <button onClick={loginClick} className='nav-btn login-btn'>
            Log in
          </button>
          <button onClick={signupClick} className='nav-btn signup-btn'>
            Sign up
          </button>
        </>
      )}

      <SearchBar />
    </div>
  )
}

export default Navbar
