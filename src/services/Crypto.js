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

export default { getInfo, getTotNumberOfCryptos }
