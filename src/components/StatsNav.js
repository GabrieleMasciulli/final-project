/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import DollarIcon from './designItems/DollarIcon'
import SunIcon from './designItems/SunIcon'
import '../static/css/StatsNav.css'
import { Link } from 'react-router-dom'
import statsFormatter from '../services/formatStockData'

const StatsNav = ({ loading, stats }) => {
  return !loading ? (
    <div className='desktop'>
      <div className='upper-info-wrapper'>
        <div className='upper-info-content'>
          <div className='left-content'>
            <span>
              Cryptos:
              <Link
                className='detail-redirect-wrapper'
                to={{
                  pathname: '/',
                }}
              >
                {stats.active_cryptocurrencies}
              </Link>
            </span>
            <span>
              Market Cap🧢  :
              <a href='#'>
                {statsFormatter.formatStats(
                  'marketcap',
                  stats.total_market_cap.usd
                )}
                🤑
              </a>
            </span>
            <span>
              24h Vol:
              <a href='#'>
                {statsFormatter.formatStats('volume', stats.total_volume.usd)}
              </a>
            </span>
            <span>
              Upcoming ICOs:
              <a href='#'>{stats.upcoming_icos}</a>
            </span>
            <span>
              Ongoing ICOs:
              <a href='#'>{stats.ongoing_icos}</a>
            </span>
            <span>
              Ended ICOs:
              <a href='#'>{stats.ended_icos}</a>
            </span>
          </div>
          <div className='right-content'>
            <div>
              <DollarIcon />
              USD
            </div>
            <div>
              <SunIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  )
}

export default StatsNav
