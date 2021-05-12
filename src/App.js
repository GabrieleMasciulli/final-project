import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import './wwwroot/css/Homepage.css'
import cryptoService from './services/Crypto'
import Footer from './components/Footer'
import SignUpForm from './components/auth/SignUp'
import LoginForm from './components/auth/Login'

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
        <Navbar loading={globalLoading} globalStats={globalStats} />
        <Router>
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
      {userAction.wants_to_signup ? <SignUpForm /> : ''}
      {userAction.wants_to_login ? <LoginForm /> : ''}
    </>
  )
}

export default App
