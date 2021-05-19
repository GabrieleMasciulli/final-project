/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import formatService from '../../../services/formatStockData'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Asset = ({
  loading,
  coin,
  price,
  dayChange,
  holdingInCrypto,
  holdingInCurrency,
  profit,
  profitChange,
}) => {
  const dayChangeTrend = formatService.getTrend(dayChange)
  const totProfitChangeTrend = formatService.getTrend(profitChange)
  const formattedDayChange = formatService.formatData('%', dayChange)
  const formattedProfitChange = formatService.formatData('%', profitChange)

  const formattedHoldingInCurrency = formatService.formatData(
    '$',
    holdingInCurrency
  )
  const formattedProfit = formatService.formatData('profit', profit)

  return !loading ? (
    <tr>
      <td>
        <a>
          <div className='asset-td1'>
            <img className='coin-logo' src={coin.logo} />
            <div className='coin-infos'>
              <p className='coin-name'>{coin.name}</p>
              <div className='coin-symbol'>
                <p>{coin.symbol}</p>
              </div>
            </div>
          </div>
        </a>
      </td>
      <td align='right'>
        <p>${price}</p>
      </td>
      <td align='right' className={dayChangeTrend}>
        <span>
          {dayChange >= 0 ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
          {formattedDayChange}
        </span>
      </td>
      <td align='right'>
        <div className='asset-holdings'>
          {formattedHoldingInCurrency}
          <p>
            {holdingInCrypto} {coin.symbol}
          </p>
        </div>
      </td>
      <td>
        <div className='asset-profit-loss'>
          <p>{formattedProfit}</p>
          <span className={totProfitChangeTrend}>
            {profitChange >= 0 ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
            {formattedProfitChange}
          </span>
        </div>
      </td>
      <td align='right' className='asset-actions'>
        <div>actions</div>
      </td>
    </tr>
  ) : (
    'loading...'
  )
}

export default Asset
