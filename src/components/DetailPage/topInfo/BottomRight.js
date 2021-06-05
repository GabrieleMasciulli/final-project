import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BottomRight = ({ data }) => {
  console.log(data)

  const {
    marketcap,
    marketcap_daily_percentage_change,
    marketcap_daily_trend,
    volume,
    vol_over_marketcap,
  } = data

  return (
    <div className='bottom-right-wrapper'>
      <div className='bottom-right-content'>
        <div className='stats-block'>
          <div className='stats-block-inner'>
            <div className='title'>Market Cap</div>
            <div className='stats-data'>
              <div className='price'>{marketcap}</div>
              {marketcap_daily_trend === 'up' ? (
                <span className='change change-up'>
                  <FontAwesomeIcon icon={faCaretUp} />
                  {marketcap_daily_percentage_change}
                </span>
              ) : (
                <span className='change-down'>
                  <FontAwesomeIcon icon={faCaretDown} />
                  {marketcap_daily_percentage_change}
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
              {marketcap_daily_trend === 'up' ? (
                <span className='change change-up'>
                  <FontAwesomeIcon icon={faCaretUp} />
                  {marketcap_daily_percentage_change}
                </span>
              ) : (
                <span className='change-down'>
                  <FontAwesomeIcon icon={faCaretDown} />
                  {marketcap_daily_percentage_change}
                </span>
              )}
            </div>

            <div className='stats-data-second'>
              <div className='title'>Volume / Market Cap</div>
              <div className='price'>{vol_over_marketcap}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomRight
