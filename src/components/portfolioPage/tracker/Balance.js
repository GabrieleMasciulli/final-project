import React, { useState, useEffect } from 'react'
import '../../../static/css/Balance.css'
import Charts from '../charts/Charts'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../designItems/Loader'

import portfolioService from '../../../services/portfolio.service'
import authService from '../../../services/auth.service'
import formatService from '../../../services/formatStockData'

const Balance = () => {
  const user = authService.getCurrentUser()
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  // console.log('Pie Data: ', data)

  const getBalanceData = () => {
    setLoading(true)
    portfolioService.getCurrentBalance(user.id).then(response => {
      const formattedData = formatService.formatBalanceData(response)
      setData(formattedData)
      setLoading(false)
    })
  }

  useEffect(getBalanceData, [])

  return !loading ? (
    <div className='balance-wrapper'>
      <div className='balance-content'>
        <p className='balance-title'>Current Balance</p>
        <div className='financials-wrapper'>
          <div className='value'>{data.holdings}</div>
          <div
            className={`change-wrapper ${
              data.daily_trend === 'up'
                ? 'change-wrapper-up'
                : 'change-wrapper-down'
            }`}
          >
            <FontAwesomeIcon
              icon={data.daily_trend === 'up' ? faCaretUp : faCaretDown}
            />
            {data.day_change_percentage}
          </div>
        </div>
        <p
          className={`${
            data.daily_trend === 'up' ? 'change-up' : 'change-down'
          }`}
        >
          {data.day_change_in_currency}
          &nbsp;(24h)
        </p>

        <Charts />
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default Balance
