import React, { useEffect, useState } from 'react'
import Assets from './Assets'
import portfolioService from '../../../services/portfolio.service'
import authService from '../../../services/auth.service'
import Balance from './Balance'
import formatSetvice from '../../../services/formatStockData'

const Tracker = () => {
  const user = authService.getCurrentUser()
  const [assets, setAssets] = useState([])
  const [loading, setLoading] = useState(false)

  // console.log('Assets: ', assets)

  const getAssets = () => {
    setLoading(true)
    portfolioService.getPositions(user.id).then(assets => {
      const formattedAssets = formatSetvice.formatAssetsData(assets)
      setAssets(formattedAssets)
      setLoading(false)
    })
  }

  useEffect(getAssets, [])

  return (
    <div className='tracker-wrapper'>
      <Balance />
      <Assets loading={loading} assets={assets} />
    </div>
  )
}

export default Tracker
