import React from 'react'
import DollarIcon from './DollarIcon'
import SunIcon from './SunIcon'

const DesktopNav = ({ cryptoCount }) => {
  return (
    <div className='desktop'>
      <div className='upper-info-wrapper'>
        <div className='upper-info-content'>
          <div className='left-content'>
            <span>
              Cryptos:
              <a href='/'>{cryptoCount === 0 ? '...' : cryptoCount}</a>
            </span>
            <span>
              Exchanges:
              <a href='/'>346</a>
            </span>
            <span>
              Market Cap:
              <a href='/'>$2,271,520,574,504</a>
            </span>
            <span>
              Dominance:
              <a href='/'>BTC: 46.4% ETH: 17.1%</a>
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
  )
}

export default DesktopNav
