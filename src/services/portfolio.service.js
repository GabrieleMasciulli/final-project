/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
import authHeader from './auth-header'

const baseUrl = '/api/positions'

const postTransaction = async newTransaction => {
  const response = await axios.post(baseUrl, newTransaction, {
    headers: authHeader(),
  })
  return response.data
}

const getPositions = async () => {
  const response = await axios.get(`${baseUrl}/analysis`, {
    headers: authHeader(),
  })
  return response.data
}

const getCurrentBalance = async () => {
  const response = await axios.get(`${baseUrl}/balance`, {
    headers: authHeader(),
  })
  return response.data
}

const getPieChartData = async () => {
  const response = await axios.get(`${baseUrl}/pie`, {
    headers: authHeader(),
  })
  return response.data
}

const deleteAsset = async id => {
  const response = await axios.delete(`${baseUrl}/${id}`, {
    headers: authHeader(),
  })
  return response.data
}

export default {
  postTransaction,
  getPositions,
  getCurrentBalance,
  getPieChartData,
  deleteAsset,
}
