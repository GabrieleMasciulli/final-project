/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/cryptos'

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

export default { getInfo, getTotNumberOfCryptos, getSparklines, getChartData }
