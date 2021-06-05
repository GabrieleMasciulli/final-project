/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from '../../designItems/Loader'

const Asset = ({
  loading,
  coin,
  price,
  dayChange,
  holdingInCrypto,
  holdingInCurrency,
  profit,
  profitChange,
  dailyTrend,
  profitTrend,
}) => {
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
        <p>{price}</p>
      </td>
      <td
        align='right'
        className={dailyTrend === 'up' ? 'text-green' : 'text-red'}
      >
        <span>
          {dailyTrend === 'up' ? (
            <FontAwesomeIcon icon={faCaretUp} />
          ) : (
            <FontAwesomeIcon icon={faCaretDown} />
          )}
          {dayChange}
        </span>
      </td>
      <td align='right'>
        <div className='asset-holdings'>
          {holdingInCurrency}
          <p>
            {holdingInCrypto} {coin.symbol}
          </p>
        </div>
      </td>
      <td>
        <div className='asset-profit-loss'>
          <p>{profit}</p>
          <span className={profitTrend === 'up' ? 'text-green' : 'text-red'}>
            {profitTrend === 'up' ? (
              <FontAwesomeIcon icon={faCaretUp} />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} />
            )}
            {profitChange}
          </span>
        </div>
      </td>
      <td align='right' className='asset-actions'>
        <div>actions</div>
      </td>
    </tr>
  ) : (
    <Loader />
  )
}

export default Asset
