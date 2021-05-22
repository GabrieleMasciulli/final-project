import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import formatService from '../../../services/formatStockData'
import LowHighBar from '../../designItems/LowHighBar'

const TopMiddle = ({ data }) => {
  const current_price = formatService.formatData(
    '$',
    data.market_data.current_price.usd
  )
  const day_change = formatService.formatData(
    '%',
    data.market_data.price_change_percentage_24h
  )
  const trend = day_change >= 0 ? 'up-trend' : 'down-trend'
  const price_in_btc = formatService.formatData(
    'number',
    data.market_data.current_price.btc
  )
  const price_in_eth = formatService.formatData(
    'number',
    data.market_data.current_price.eth
  )
  const day_change_in_btc = formatService.formatData(
    '%',
    data.market_data.price_change_percentage_24h_in_currency.btc
  )
  const day_change_in_eth = formatService.formatData(
    '%',
    data.market_data.price_change_percentage_24h_in_currency.eth
  )
  const low_24h = formatService.formatData('$', data.market_data.low_24h.usd)
  const high_24h = formatService.formatData('$', data.market_data.high_24h.usd)

  return (
    <div className='top-center-wrapper'>
      <h1>
        {data.name} Price<small>({data.symbol.toUpperCase()})</small>
      </h1>
      <div className='price-value-wrapper'>
        <div>{current_price}</div>
        <span className={trend}>
          {trend === 'up-trend' ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
          {day_change}
        </span>
      </div>
      <div className='bitcoin-conversion-wrapper'>
        {data.id !== 'bitcoin' ? (
          <p>
            {price_in_btc} BTC
            <span className={trend}>
              {trend === 'up-trend' ? (
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
            <span className={trend}>
              {trend === 'up-trend' ? (
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
