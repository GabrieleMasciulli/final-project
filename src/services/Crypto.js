/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/cryptos'

const getSimplePrice = async id => {
  const response = await axios.get(`${baseUrl}/price/${id}`)
  return response.data.usd
}

const getTotNumberOfCryptos = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getInfo = async (order, number, page) => {
  const response = await axios.get(`${baseUrl}/info/${order}/${number}/${page}`)
  return response.data
}

const getInfoFromId = async id => {
  const response = await axios.get(`${baseUrl}/detail/${id}`)
  return response.data
}

const getSparklines = async (order, number, page) => {
  const response = await axios.get(
    `${baseUrl}/img/generated/sparklines/${order}/${number}/${page}`
  )
  return response.data
}

const getChartData = async (id, days) => {
  const response = await axios.get(`${baseUrl}/market_chart/${id}/${days}`)
  return response.data
}

const getStats = async id => {
  const response = await axios.get(`${baseUrl}/stats/${id}`)
  return response.data
}

const getGlobalStats = async () => {
  const response = await axios.get('/api/global')
  return response.data
}

export default {
  getSimplePrice,
  getInfo,
  getInfoFromId,
  getTotNumberOfCryptos,
  getSparklines,
  getChartData,
  getStats,
  getGlobalStats,
}
