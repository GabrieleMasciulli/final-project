import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.auth)

  return isAuthenticated ? (
    <Route {...rest} render={() => children} />
  ) : (
    <Redirect to='/home' />
  )
}

export default PrivateRoute
