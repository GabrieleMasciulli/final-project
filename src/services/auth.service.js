/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/auth'

const register = (email, username, password) => {
  const request = axios.post(`${baseUrl}/signup`, {
    username,
    email,
    password,
  })

  return request.then(response => response.data)
}

const login = (email, password) => {
  const request = axios.post(`${baseUrl}/signin`, {
    email: email,
    password: password,
  })

  return request.then(response => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
  })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

export default { login, logout, register, getCurrentUser }
