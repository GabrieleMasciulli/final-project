import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../wwwroot/css/Detail.css'
import cryptoService from '../services/Crypto'
import TopInfo from '../components/DetailPage/TopInfo'
import PageContent from '../components/DetailPage/PageContent'

const Detail = props => {
  const { crypto } = props.location.state
  const { id } = useParams()
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(false)
  const [days, setDays] = useState('max')

  console.log('Chart data: ', chartData)

  const getChartData = () => {
    console.log('Getting chart data...')
    setLoading(true)
    cryptoService.getChartData(id, days).then(data => {
      setChartData(data)
      setLoading(false)
    })
  }

  useEffect(getChartData, [])

  return (
    <div className='detail-container'>
      <TopInfo />
      <PageContent data={chartData} loading={loading} crypto={crypto} />
    </div>
  )
}

export default Detail
