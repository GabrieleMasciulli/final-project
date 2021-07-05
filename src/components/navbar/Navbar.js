import React from 'react'
import { Link } from 'react-router-dom'
import '../../static/css/Navbar.css'
import logo from '../../static/img/logo_size.jpeg'
import NavItem from './NavItem'
import SearchBar from './SearchBar'
import Profile from './Profile'
import { useDispatch, useSelector } from 'react-redux'
import { showSignup, showLogin } from '../../reducers/authentication'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector(state => state.auth)

  return (
    <div className='navbar-wrapper'>
      <Link
        title='Go to homepage'
        className='logo-link'
        to={{
          pathname: '/',
        }}
      >
        <div className='logo-wrapper'>
          <img src={logo} alt='' width='180' />
        </div>
      </Link>

      <div className='nav-links-wrapper'>
        <nav className='nav-links-content'>
          <ul>
            <NavItem name='Cryptocurrencies' url='/' />
            <NavItem name='Exchanges' url='#' />
            {isAuthenticated ? (
              <>
                <NavItem name='Portfolio' url='/portfolio' />
                <NavItem name='Watchlist' url='#' />
              </>
            ) : (
              ''
            )}

            <NavItem name='Some Link' url='#' />
            <NavItem name='Some other Link' url='#' />
          </ul>
        </nav>
      </div>

      {isAuthenticated ? (
        <Profile />
      ) : (
        <>
          <button
            className='nav-btn login-btn'
            onClick={() => dispatch(showLogin())}
          >
            Log in
          </button>
          <button
            className='nav-btn signup-btn'
            onClick={() => dispatch(showSignup())}
          >
            Sign up
          </button>
        </>
      )}

      <SearchBar />
    </div>
  )
}

export default Navbar
