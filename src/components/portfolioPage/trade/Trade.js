import React from 'react'
import CloseIcon from '../../designItems/CloseIconV2'
import { faCalendarWeek, faCoins } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Trade = ({ cancel, onTradeTypeClick, type }) => {
  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Add Transaction</div>
          <CloseIcon onClick={cancel} />
        </div>

        <div className='trade-content'>
          <ul className='trade-type'>
            <li
              id='buy'
              onClick={onTradeTypeClick}
              className={type === 'buy' ? 'selected' : ''}
            >
              Buy
            </li>
            <li
              id='sell'
              onClick={onTradeTypeClick}
              className={type === 'sell' ? 'selected' : ''}
            >
              Sell
            </li>
          </ul>

          <div className='trade-details-wrapper'>
            <div className='trade-details-content'>
              <div className='trade-inputs-wrapper'>
                <div className='quantity'>
                  <p>Quantity</p>
                  <input
                    className='quantity-input'
                    type='number'
                    placeholder='0.00'
                    min='0'
                  />
                </div>
                <div className='price'>
                  <p>Price per coin</p>
                  <div className='price-input-wrapper'>
                    <span className='input-prefix'>$</span>
                    <input className='price-input' type='number' />
                  </div>
                </div>
              </div>

              <div className='trade-additions-wrapper'>
                <button>
                  <span>
                    <FontAwesomeIcon icon={faCalendarWeek} />
                    {new Date().toUTCString()}
                  </span>
                </button>
                <button>
                  <span>
                    <FontAwesomeIcon icon={faCoins} />
                    Fee
                  </span>
                </button>
                <button>
                  <span>
                    <FontAwesomeIcon icon={faCalendarWeek} />
                    Notes
                  </span>
                </button>
              </div>

              <div className='total-spent-wrapper'>
                <p>Total Spent</p>
                <div>$</div>
              </div>

              <div className='add-trade-wrapper'>
                <button>AddTransaction</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trade
