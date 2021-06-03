/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = '/api/transaction'

const postTransaction = newTransaction => {
  const request = axios.post(baseUrl, newTransaction)
  return request.then(response => response.data)
}

const getPositions = user => {
  const request = axios.get(`${baseUrl}/assets`, { params: { user } })
  return request.then(response => response.data)
}

const getCurrentBalance = user => {
  const request = axios.get(`${baseUrl}/balance`, { params: { user } })
  return request.then(response => response.data)
}

const getPieChartData = user => {
  const request = axios.get(`${baseUrl}/pie`, { params: { user } })
  return request.then(response => response.data)
}

export default {
  postTransaction,
  getPositions,
  getCurrentBalance,
  getPieChartData,
}
