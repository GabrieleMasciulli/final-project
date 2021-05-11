import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../wwwroot/css/Detail.css'
import cryptoService from '../services/Crypto'
import TopInfo from '../components/detailPage/TopInfo'
import PageContent from '../components/detailPage/PageContent'

const Detail = props => {
  const { crypto, global } = props.location.state
  const { id } = useParams()
  const [chartData, setChartData] = useState([])
  const [stats, setStats] = useState()
  const [chartLoading, setChartLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(true)
  const [days, setDays] = useState('max')

  console.log('Chart data: ', chartData)
  console.log('Stats: ', stats)

  const getChartData = () => {
    setChartLoading(true)
    cryptoService.getChartData(id, days).then(data => {
      setChartData(data)
      setChartLoading(false)
    })
  }

  const getStats = () => {
    setStatsLoading(true)
    cryptoService.getStats(id).then(data => {
      setStats(data)
      setStatsLoading(false)
    })
  }

  useEffect(getChartData, [])
  useEffect(getStats, [])

  return (
    <div className='detail-container'>
      <TopInfo />
      <PageContent
        data={chartData}
        chartLoading={chartLoading}
        statsLoading={statsLoading}
        crypto={crypto}
        stats={stats}
        globalStats={global}
      />
    </div>
  )
}

export default Detail
