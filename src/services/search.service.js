/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'
const baseUrl = '/api/search'

const getFirst = () => {
  const request = axios.get(`${baseUrl}/first`)
  return request.then(response => response.data)
}

const getResults = query => {
  const request = axios.get(`${baseUrl}/${query}`)
  return request.then(response => response.data)
}

export default {
  getFirst,
  getResults,
}
