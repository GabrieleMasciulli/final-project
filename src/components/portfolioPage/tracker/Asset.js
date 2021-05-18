/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Asset = ({
  price,
  dayChange,
  holdingInCrypto,
  holdingInCurrency,
  profit,
  profitChange,
}) => {
  return (
    <tr>
      <td>
        <a href='#'>
          <div className='asset-td1'>
            <img
              className='coin-logo'
              src='https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png'
            />
            <div className='coin-infos'>
              <p className='coin-name'>Polkadot</p>
              <div className='coin-symbol'>
                <p>DOT</p>
              </div>
            </div>
          </div>
        </a>
      </td>
      <td align='right'>
        <p>$39.30</p>
      </td>
      <td align='right'>
        <span>3.02%</span>
      </td>
      <td align='right'>
        <div className='asset-holdings'>
          $4,016.00
          <p>102 DOT</p>
        </div>
      </td>
      <td>
        <div className='asset-profit-loss'>
          <p>+ $339.06</p>
          <span>9.23%</span>
        </div>
      </td>
      <td align='right' className='asset-actions'>
        <div>actions</div>
      </td>
    </tr>
  )
}

export default Asset
