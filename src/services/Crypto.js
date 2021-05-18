/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/cryptos'

const getSimplePrice = id => {
  const request = axios.get(`${baseUrl}/price/${id}`)
  return request.then(response => response.data)
}

const getTotNumberOfCryptos = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getInfo = (order, number, page) => {
  const request = axios.get(`${baseUrl}/info/${order}/${number}/${page}`)
  return request.then(response => response.data)
}

const getSparklines = (order, number, page) => {
  const request = axios.get(
    `${baseUrl}/img/generated/sparklines/${order}/${number}/${page}`
  )
  return request.then(response => response.data)
}

const getChartData = (id, days) => {
  const request = axios.get(`${baseUrl}/market_chart/${id}/${days}`)
  return request.then(response => response.data)
}

const getStats = id => {
  const request = axios.get(`${baseUrl}/stats/${id}`)
  return request.then(response => response.data)
}

const getGlobalStats = () => {
  const request = axios.get('/api/global')
  return request.then(response => response.data)
}

export default {
  getSimplePrice,
  getInfo,
  getTotNumberOfCryptos,
  getSparklines,
  getChartData,
  getStats,
  getGlobalStats,
}
