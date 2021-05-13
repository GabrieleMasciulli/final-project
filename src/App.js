import React, { useEffect, useState } from 'react'
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
import './wwwroot/css/Homepage.css'
import cryptoService from './services/Crypto'
import Footer from './components/Footer'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'

function App() {
  const [globalStats, setGlobalStats] = useState(0)
  const [globalLoading, setGlobalLoading] = useState(true)
  const [userAction, setUserAction] = useState({
    wants_to_login: false,
    wants_to_signup: false,
  })

  const getCountCryptos = () => {
    setGlobalLoading(true)
    cryptoService.getGlobalStats().then(response => {
      setGlobalStats(response)
      setGlobalLoading(false)
    })
  }

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

  useEffect(getCountCryptos, [])

  return (
    <>
      <div className='page-wrapper'>
        <Router>
          <StatsNav loading={globalLoading} stats={globalStats} />
          <Navbar
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
        </Router>
        <Footer />
      </div>

      <Login cancel={handleAuthCancel} visible={userAction.wants_to_login} />
      <SignUp cancel={handleAuthCancel} visible={userAction.wants_to_signup} />
    </>
  )
}

export default App
