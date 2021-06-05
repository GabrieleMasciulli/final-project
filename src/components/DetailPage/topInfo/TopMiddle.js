import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LowHighBar from '../../designItems/LowHighBar'

const TopMiddle = ({ data }) => {
  const {
    symbol,
    name,
    current_price,
    price_change_percentage_24h,
    daily_trend,
    price_in_btc,
    price_in_eth,
    day_change_in_btc,
    day_change_in_eth,
    low_24h,
    high_24h,
  } = data

  return (
    <div className='top-center-wrapper'>
      <h1>
        {name} Price<small>({symbol})</small>
      </h1>
      <div className='price-value-wrapper'>
        <div>{current_price}</div>
        <span className={`${daily_trend === 'up' ? 'up-trend' : 'down-trend'}`}>
          {daily_trend === 'up' ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
          {price_change_percentage_24h}
        </span>
      </div>
      <div className='bitcoin-conversion-wrapper'>
        {data.id !== 'bitcoin' ? (
          <p>
            {price_in_btc} BTC
            <span
              className={`${daily_trend === 'up' ? 'up-trend' : 'down-trend'}`}
            >
              {daily_trend === 'up' ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
              {day_change_in_btc}
            </span>
          </p>
        ) : (
          ''
        )}

        {data.id !== 'ethereum' ? (
          <p>
            {price_in_eth} ETH
            <span
              className={`${daily_trend === 'up' ? 'up-trend' : 'down-trend'}`}
            >
              {daily_trend === 'up' ? (
                <FontAwesomeIcon icon={faCaretUp} />
              ) : (
                <FontAwesomeIcon icon={faCaretDown} />
              )}
              {day_change_in_eth}
            </span>
          </p>
        ) : (
          ''
        )}
      </div>

      <div className='low-high-wrapper'>
        <div className='low-wrapper'>
          <span className='text'>Low:</span>
          <span className='price'>{low_24h}</span>
        </div>

        <LowHighBar
          low={data.market_data.low_24h.usd}
          high={data.market_data.high_24h.usd}
          current={data.market_data.current_price.usd}
        />

        <div className='high-wrapper'>
          <span className='text'>High:</span>
          <span className='price'>{high_24h}</span>
        </div>
      </div>
    </div>
  )
}

export default TopMiddle
