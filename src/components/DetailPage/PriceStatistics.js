import React from 'react'
import {
  faCaretUp,
  faCaretDown,
  faCrown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriceStatistics = ({ stats }) => {
  const {
    symbol,
    name,
    current_price,
    price_change_24h,
    daily_trend,
    price_change_percentage_24h,
    low_24h,
    high_24h,
    total_volume,
    vol_over_marketcap,
    market_dominance,
    market_cap_rank,
  } = stats
  return (
    <div className='price-statistics-wrapper'>
      <div className='price-statistics-content'>
        <h2>{symbol} Market Stats</h2>
        <div
          className='statistics-table-wrapper'
          itemScope
          itemType='https://schema.org/Table'
        >
          <table>
            <caption itemProp='content'>{name} Price Today</caption>
            <tbody>
              <tr>
                <th scope='row'>
                  <strong>{name} Price</strong>
                </th>
                <td>{current_price}</td>
              </tr>
              <tr>
                <th scope='row'>
                  <span className='with-badge'>
                    Price Change<span className='badge-24h'>24h</span>
                  </span>
                </th>
                <td>
                  <span>{price_change_24h}</span>
                  <div>
                    <span
                      className={`text-end ${
                        daily_trend === 'up'
                          ? 'bull-percentage'
                          : 'bear-percentage'
                      }`}
                    >
                      <span>
                        {daily_trend === 'up' ? (
                          <FontAwesomeIcon icon={faCaretUp} />
                        ) : (
                          <FontAwesomeIcon icon={faCaretDown} />
                        )}
                      </span>
                      {price_change_percentage_24h}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>24h Low / 24h High</th>
                <td>
                  <div>{low_24h}/</div>
                  <div>{high_24h}</div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <span className='with-badge'>
                    Trading Volume<span className='badge-24h'>24h</span>
                  </span>
                </th>
                <td>
                  <span>{total_volume}</span>
                  <div>
                    <span className='sc-1v2ivon-0 fJLBDK'>
                      <span className='icon-Caret-up'></span>24h change..
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>Volume / Market Cap🧢 </th>
                <td>{vol_over_marketcap}</td>
              </tr>
              <tr>
                <th scope='row'>Market Dominance</th>
                <td>
                  <span className=''>{market_dominance}</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>Market Rank</th>
                <td>
                  <FontAwesomeIcon icon={faCrown} color='#16c784' />{' '}
                  {market_cap_rank}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PriceStatistics
