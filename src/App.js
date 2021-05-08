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

function App() {
  const [cryptoCount, setCryptoCount] = useState(0)

  const getCountCryptos = () => {
    cryptoService.getTotNumberOfCryptos().then(count => {
      setCryptoCount(count.tot)
    })
  }

  useEffect(getCountCryptos, [])

  return (
    <div className='page-wrapper'>
      <Navbar cryptoCount={cryptoCount} />
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
              return <Home cryptoCount={cryptoCount} />
            }}
          />

          <Route exact path='/detail/:id' component={Detail} />
        </Switch>
      </Router>
      <Footer />
    </div>
  )
}

export default App
