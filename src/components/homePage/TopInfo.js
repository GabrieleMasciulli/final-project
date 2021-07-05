import React from 'react'
import { useSelector } from 'react-redux'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { abbreviate_number } from '../../services/formatStockData'

const TopInfo = () => {
  const globalStats = useSelector(state => state.globalStats.raw) || {}

  let marketcap_change = 0
  let marketcap = 0
  let trend = ''

  if (Object.keys(globalStats).length > 0) {
    marketcap = abbreviate_number(globalStats.total_market_cap.usd)
    marketcap_change =
      globalStats.market_cap_change_percentage_24h_usd.toFixed(2)
    trend = marketcap_change > 0 ? 'increase' : 'decrease'
  }

  return (
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
              <span className='icon-Caret-down'></span> {marketcap_change}%
            </span>{' '}
            {trend} over the last day.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TopInfo
