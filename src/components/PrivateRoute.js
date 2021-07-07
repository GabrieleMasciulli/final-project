import React from 'react'
import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector(state => state.auth)

  return isAuthenticated && <Route {...rest} render={() => children} />
}

export default PrivateRoute
