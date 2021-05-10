import React from 'react'
import formatService from '../../services/formatStockData'

//FontAwesome
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriceStatistics = ({ stats }) => {
  return (
    <div className='price-statistics-wrapper'>
      <div className='price-statistics-content'>
        <h2>{stats.symbol.toUpperCase()} Market Stats</h2>
        <div
          className='statistics-table-wrapper'
          itemScope
          itemType='https://schema.org/Table'
        >
          <table>
            <caption itemProp='content'>{stats.name} Price Today</caption>
            <tbody>
              <tr>
                <th scope='row'>
                  <strong>{stats.name} Price</strong>
                </th>
                <td>
                  {formatService.formatData(
                    '$',
                    stats.market_data.current_price.usd
                  )}
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <span className='with-badge'>
                    Price Change<span className='badge-24h'>24h</span>
                  </span>
                </th>
                <td>
                  <span>
                    {formatService.formatData(
                      '$',
                      stats.market_data.price_change_24h
                    )}
                  </span>
                  <div>
                    <span
                      className={`text-end ${
                        stats.market_data.price_change_24h === null
                          ? ''
                          : stats.market_data.price_change_24h < 0
                          ? 'bear-percentage'
                          : 'bull-percentage'
                      }`}
                    >
                      <span>
                        {stats.market_data.price_change_24h === null ? (
                          '?'
                        ) : stats.market_data.price_change_24h < 0 ? (
                          <FontAwesomeIcon icon={faCaretDown} />
                        ) : (
                          <FontAwesomeIcon icon={faCaretUp} />
                        )}
                      </span>
                      {formatService.formatData(
                        '%',
                        stats.market_data.price_change_percentage_24h
                      )}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>24h Low / 24h High</th>
                <td>
                  <div>
                    {formatService.formatData(
                      '$',
                      stats.market_data.low_24h.usd
                    )}
                    /
                  </div>
                  <div>
                    {formatService.formatData(
                      '$',
                      stats.market_data.high_24h.usd
                    )}
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>
                  <span className='with-badge'>
                    Trading Volume<span className='badge-24h'>24h</span>
                  </span>
                </th>
                <td>
                  <span>
                    {formatService.formatData(
                      '$',
                      stats.market_data.total_volume.usd
                    )}
                  </span>
                  <div>
                    <span className='sc-1v2ivon-0 fJLBDK'>
                      <span className='icon-Caret-up'></span>50.60
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope='row'>Volume / Market Cap</th>
                <td>0.652</td>
              </tr>
              <tr>
                <th scope='row'>Market Dominance</th>
                <td>
                  <span className=''>2,62</span>
                </td>
              </tr>
              <tr>
                <th scope='row'>Market Rank</th>
                <td>#4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PriceStatistics
