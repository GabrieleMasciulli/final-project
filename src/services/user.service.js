/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import authHeader from './auth-header'

const baseUrl = '/api/test'

const getPublicContent = () => {
  return axios.get(`${baseUrl}/all`)
}

const getUserBoard = () => {
  return axios.get(`${baseUrl}/user`, { headers: authHeader() })
}

const getModeratorBoard = () => {
  return axios.get(`${baseUrl}/mod`, { headers: authHeader() })
}

const getAdminBoard = () => {
  return axios.get(`${baseUrl}/admin`, { headers: authHeader() })
}

export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
}
