import React, { useState } from 'react'
import './static/css/Homepage.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import StatsNav from './components/StatsNav'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import AuthService from './services/auth.service'

function App() {
  const [globalStats, setGlobalStats] = useState([])
  const [userAction, setUserAction] = useState({
    wants_to_login: false,
    wants_to_signup: false,
  })
  const [user, setUser] = useState({
    isAuthenticated: AuthService.getCurrentUser() ? true : false,
    data: AuthService.getCurrentUser() || null,
  })

  //user actions concerning authentication
  const handleSignUpClick = () => {
    const newUserAction = { wants_to_login: false, wants_to_signup: true }
    setUserAction(newUserAction)
  }

  const handleLoginClick = () => {
    const newUserAction = { wants_to_login: true, wants_to_signup: false }
    setUserAction(newUserAction)
  }

  const handleAuthCancel = () => {
    const newUserAction = { wants_to_login: false, wants_to_signup: false }
    setUserAction(newUserAction)
  }

  const handleUserLogin = () => {
    const newUser = {
      isAuthenticated: true,
      data: AuthService.getCurrentUser(),
    }
    setUser(newUser)
  }

  const handleLogout = () => {
    AuthService.logout()
    const newUser = {
      isAuthenticated: false,
      data: null,
    }
    setUser(newUser)
  }

  return (
    <>
      <div className='page-wrapper'>
        <Router>
          <StatsNav />
          <Navbar
            user={user}
            loginClick={handleLoginClick}
            signupClick={handleSignUpClick}
            logoutClick={handleLogout}
          />
          <div className='homepage-separator'></div>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                return <Redirect to='/home' />
              }}
            />
            <Route
              exact
              path='/home'
              render={() => {
                return (
                  <Home
                    cryptoCount={parseInt(globalStats.active_cryptocurrencies)}
                  />
                )
              }}
            />
            <Route exact path='/detail/:id' component={Detail} />

            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>

          {user.isAuthenticated ? (
            ''
          ) : (
            <>
              <Login
                changeToSignup={handleSignUpClick}
                cancel={handleAuthCancel}
                visible={userAction.wants_to_login}
                setUser={handleUserLogin}
              />
              <SignUp
                changeToLogin={handleLoginClick}
                cancel={handleAuthCancel}
                visible={userAction.wants_to_signup}
              />
            </>
          )}
        </Router>
        <Footer />
      </div>
    </>
  )
}

export default App
