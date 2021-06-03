import React, { useState, useEffect } from 'react'
import '../../../static/css/Balance.css'
import Charts from '../charts/Charts'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    portfolioService.getCurrentBalance(user.id).then(data => {
      setData(data)
      setLoading(false)
    })
  }

  useEffect(getBalanceData, [])

  return !loading ? (
    <div className='balance-wrapper'>
      <div className='balance-content'>
        <p className='balance-title'>Current Balance</p>
        <div className='financials-wrapper'>
          <div className='value'>
            {formatService.formatData('$', data.holdings)}
          </div>
          <div
            className={`change-wrapper ${
              data.day_change_percentage >= 0
                ? 'change-wrapper-up'
                : 'change-wrapper-down'
            }`}
          >
            <FontAwesomeIcon
              icon={data.day_change_percentage >= 0 ? faCaretUp : faCaretDown}
            />
            {formatService.formatData('%', data.day_change_percentage)}
          </div>
        </div>
        <p
          className={`${
            data.day_change_in_currency >= 0 ? 'change-up' : 'change-down'
          }`}
        >
          {formatService.formatData('profit', data.day_change_in_currency)}
          &nbsp;(24h)
        </p>

        <Charts />
      </div>
    </div>
  ) : (
    'loading...'
  )
}

export default Balance
