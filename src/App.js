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
import SignUpForm from './components/profile/SignUp'

function App() {
  const [globalStats, setGlobalStats] = useState(0)
  const [globalLoading, setGlobalLoading] = useState(true)

  const getCountCryptos = () => {
    setGlobalLoading(true)
    cryptoService.getGlobalStats().then(response => {
      setGlobalStats(response)
      setGlobalLoading(false)
    })
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

      {/* Login / SignUp Part */}
      <SignUpForm />
    </>
  )
}

export default App
