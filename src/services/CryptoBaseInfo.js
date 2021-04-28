/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = '/api/cryptos/baseinfo'

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

const getById = id => {
  const request = axios.get(`${baseUrl}/id/${id}`)
  return request.then(response => response.data)
}

const getBySymbol = symbol => {
  const request = axios.get(`${baseUrl}/symbol/${symbol}`)
  return request.then(response => response.data)
}

const getBySlug = slug => {
  const request = axios.get(`${baseUrl}/slug/${slug}`)
  return request.then(response => response.data)
}

export default { getAll, getById, getBySymbol, getBySlug }
