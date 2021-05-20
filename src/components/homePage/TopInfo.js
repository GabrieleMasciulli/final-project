import React, { useState, useEffect } from 'react'
import cryptoService from '../../services/Crypto'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const abbreviate_number = (num, fixed) => {
  if (num === null) {
    return null
  } // terminate early
  if (num === 0) {
    return '0'
  } // terminate early
  fixed = !fixed || fixed < 0 ? 0 : fixed // number of decimal places to show
  var b = num.toPrecision(2).split('e'), // get power
    k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
    c =
      k < 1
        ? num.toFixed(0 + fixed)
        : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
    d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
    e = d + ['', 'K', 'M', 'B', 'T'][k] // append power
  return e
}

const TopInfo = () => {
  const [globalStats, setGlobalStats] = useState(0)
  const [globalLoading, setGlobalLoading] = useState(true)
  let marketcap_change = 0
  let marketcap = 0
  let trend = ''

  if (!globalLoading) {
    marketcap = abbreviate_number(globalStats.total_market_cap.usd)
    marketcap_change =
      globalStats.market_cap_change_percentage_24h_usd.toFixed(2)
    trend = marketcap_change > 0 ? 'increase' : 'decrease'
  }

  console.log(globalStats)

  const getGlobalStats = () => {
    setGlobalLoading(true)
    cryptoService.getGlobalStats().then(response => {
      setGlobalStats(response)
      setGlobalLoading(false)
    })
  }

  useEffect(getGlobalStats, [])

  return !globalLoading ? (
    <section className='home-info-wrapper'>
      <div className='content-left'>
        <h1>Today's Cryptocurrency Prices by Market Cap</h1>
        <div className='info-stats-wrapper'>
          <p>
            The global crypto market cap is
            <span className='info-marketcap'> ${marketcap}</span> , a{' '}
            <span
              className={`info-marketcap-change ${
                marketcap_change >= 0 ? 'up-trend' : 'down-trend'
              }`}
            >
              {marketcap_change > 0 ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
              <span class='icon-Caret-down'></span> {marketcap_change}%
            </span>{' '}
            {trend} over the last day.
          </p>
        </div>
      </div>
    </section>
  ) : (
    ''
  )
}

export default TopInfo
