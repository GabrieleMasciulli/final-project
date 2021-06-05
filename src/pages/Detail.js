import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../static/css/Detail.css'
import cryptoService from '../services/Crypto'
import formatService from '../services/formatStockData'
import TopInfo from '../components/detailPage/topInfo/TopInfo'
import PageContent from '../components/detailPage/PageContent'
import Loader from '../components/designItems/Loader'

const Detail = () => {
  const { id } = useParams()
  const [crypto, setCrypto] = useState()
  const [chartData, setChartData] = useState([])
  const [stats, setStats] = useState()
  const [chartLoading, setChartLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(true)
  const [cryptoLoading, setCryptoLoading] = useState(true)
  const [days, setDays] = useState('max')

  // console.log('Chart data: ', chartData)
  // console.log('Stats: ', stats)

  const getChartData = () => {
    setChartLoading(true)
    cryptoService.getChartData(id, days).then(data => {
      setChartData(data)
      setChartLoading(false)
    })
  }
  useEffect(getChartData, [days, id])

  const getStats = () => {
    setStatsLoading(true)
    cryptoService.getStats(id).then(data => {
      const formattedStats = formatService.formatStatsData(data)
      setStats(formattedStats)
      setStatsLoading(false)
    })
  }
  useEffect(getStats, [id])

  const getCryptoDetails = () => {
    setCryptoLoading(true)
    cryptoService.getInfoFromId(id).then(crypto => {
      setCrypto(crypto)
      setCryptoLoading(false)
    })
  }
  useEffect(getCryptoDetails, [id])

  const handleDaysChange = e => {
    const newDays = e.target.value === 0 ? 'max' : e.target.value
    setDays(newDays)
  }

  return !cryptoLoading ? (
    <div className='detail-container'>
      <TopInfo data={stats} loading={statsLoading} />
      <PageContent
        currentDays={days}
        onChartDayChange={handleDaysChange}
        crypto={crypto}
        data={chartData}
        chartLoading={chartLoading}
        stats={stats}
        statsLoading={statsLoading}
      />
    </div>
  ) : (
    <Loader />
  )
}

export default Detail
