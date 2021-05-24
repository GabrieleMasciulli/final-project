import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../static/css/Detail.css'
import cryptoService from '../services/Crypto'
import TopInfo from '../components/detailPage/topInfo/TopInfo'
import PageContent from '../components/detailPage/PageContent'

const Detail = () => {
  const { id } = useParams()
  const [crypto, setCrypto] = useState()
  const [globalStats, setGlobalStats] = useState(0)
  const [chartData, setChartData] = useState([])
  const [stats, setStats] = useState()
  const [chartLoading, setChartLoading] = useState(true)
  const [statsLoading, setStatsLoading] = useState(true)
  const [cryptoLoading, setCryptoLoading] = useState(true)
  const [globalLoading, setGlobalLoading] = useState(true)
  const [days, setDays] = useState('max')

  // console.log('Chart data: ', chartData)
  // console.log('Stats: ', stats)

  const getGlobalStats = () => {
    setGlobalLoading(true)
    cryptoService.getGlobalStats().then(response => {
      setGlobalStats(response)
      setGlobalLoading(false)
    })
  }
  useEffect(getGlobalStats, [])

  const getChartData = () => {
    setChartLoading(true)
    cryptoService.getChartData(id, days).then(data => {
      setChartData(data)
      setChartLoading(false)
    })
  }
  useEffect(getChartData, [days])

  const getStats = () => {
    setStatsLoading(true)
    cryptoService.getStats(id).then(data => {
      setStats(data)
      setStatsLoading(false)
    })
  }
  useEffect(getStats, [])

  const getCryptoDetails = () => {
    setCryptoLoading(true)
    cryptoService.getInfoFromId(id).then(crypto => {
      setCrypto(crypto)
      setCryptoLoading(false)
    })
  }
  useEffect(getCryptoDetails, [])

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
        data={chartData}
        chartLoading={chartLoading}
        statsLoading={statsLoading}
        globalLoading={globalLoading}
        crypto={crypto}
        stats={stats}
        globalStats={globalStats}
      />
    </div>
  ) : (
    'loading'
  )
}

export default Detail
