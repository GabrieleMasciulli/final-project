import React from 'react'
import formatService from '../../../services/formatStockData'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomRight = ({ data }) => {
  const marketcap = formatService.formatData(
    '$',
    data.market_data.market_cap.usd
  )
  const marketcap_change = formatService.formatData(
    '%',
    data.market_data.market_cap_change_percentage_24h
  )
  const marketcap_trend = marketcap_change >= 0 ? 'change-up' : 'change-down'
  const volume = formatService.formatData(
    '$',
    data.market_data.total_volume.usd
  )
  const volume_over_marketcap = formatService.formatData(
    'number',
    data.market_data.total_volume.usd / data.market_data.market_cap.usd
  )

  return (
    <div className='bottom-right-wrapper'>
      <div className='bottom-right-content'>
        <div className='stats-block'>
          <div className='stats-block-inner'>
            <div className='title'>Market Cap</div>
            <div className='stats-data'>
              <div className='price'>{marketcap}</div>
              {marketcap_trend === 'change-up' ? (
                <span className='change change-up'>
                  <FontAwesomeIcon icon={faCaretUp} />
                  {marketcap_change}
                </span>
              ) : (
                <span className='change-down'>
                  <FontAwesomeIcon icon={faCaretDown} />
                  {marketcap_change}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className='stats-block'>
          <div className='stats-block-inner'>
            <div className='title'>Volume</div>
            <div className='stats-data'>
              <div className='price'>{volume}</div>
              {marketcap_trend === 'change-up' ? (
                <span className='change change-up'>
                  <FontAwesomeIcon icon={faCaretUp} />
                  {marketcap_change}
                </span>
              ) : (
                <span className='change-down'>
                  <FontAwesomeIcon icon={faCaretDown} />
                  {marketcap_change}
                </span>
              )}
            </div>

            <div className='stats-data-second'>
              <div className='title'>Volume / Market Cap</div>
              <div className='price'>{volume_over_marketcap}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomRight
