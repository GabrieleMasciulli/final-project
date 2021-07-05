import React, { useEffect } from 'react'
import './static/css/Homepage.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import StatsNav from './components/StatsNav'
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import { useDispatch, useSelector } from 'react-redux'
import { initializeGlobalStats } from './reducers/statsNav'
import { getCryptos } from './reducers/crypto'

const App = () => {
  const dispatch = useDispatch()

  const { rows, page } = useSelector(state => state.pagination)

  //redux part
  useEffect(() => {
    dispatch(initializeGlobalStats())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCryptos())
  }, [dispatch, rows, page])

  return (
    <div className='page-wrapper'>
      <Router>
        <StatsNav />
        <Navbar />
        <div className='homepage-separator'></div>
        <Switch>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path='/detail/:id'>
            <Detail />
          </Route>

          <PrivateRoute path='/portfolio'>
            <Portfolio />
          </PrivateRoute>
        </Switch>

        <Login />
        <SignUp />
      </Router>

      <Footer />
    </div>
  )
}

export default App
