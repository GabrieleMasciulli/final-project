import React, { useEffect, useState } from 'react'
import './wwwroot/css/Homepage.css'
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
import cryptoService from './services/Crypto'
import Footer from './components/Footer'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import AuthService from './services/auth.service'

function App() {
  const [globalStats, setGlobalStats] = useState(0)
  const [globalLoading, setGlobalLoading] = useState(true)
  const [userAction, setUserAction] = useState({
    wants_to_login: false,
    wants_to_signup: false,
  })
  const [user, setUser] = useState({
    isAuthenticated: false,
  })

  const getCountCryptos = () => {
    setGlobalLoading(true)
    cryptoService.getGlobalStats().then(response => {
      setGlobalStats(response)
      setGlobalLoading(false)
    })
  }

  useEffect(getCountCryptos, [])

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
      user: AuthService.getCurrentUser(),
    }
    console.log(newUser)
    setUser('user: ', newUser)
  }

  return (
    <>
      <div className='page-wrapper'>
        <Router>
          <StatsNav loading={globalLoading} stats={globalStats} />
          <Navbar
            user={user}
            loginClick={handleLoginClick}
            signupClick={handleSignUpClick}
          />
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
                    cryptoCount={globalStats.active_cryptocurrencies}
                    globalLoading={globalLoading}
                    globalStats={globalStats}
                  />
                )
              }}
            />
            <Route exact path='/detail/:id' component={Detail} />
          </Switch>

          {user.isAuthenticated ? (
            ''
          ) : (
            <>
              <Login
                cancel={handleAuthCancel}
                visible={userAction.wants_to_login}
                setUser={handleUserLogin}
              />
              <SignUp
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
