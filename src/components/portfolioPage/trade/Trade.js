import React from 'react'
import CloseIcon from '../../designItems/CloseIconV2'
import Additions from './Additions'

const Trade = ({
  cancel,
  onTradeTypeChange,
  type,
  quantity,
  price,
  onPriceChange,
  onQuantityChange,
}) => {
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
              onClick={onTradeTypeChange}
              className={type === 'buy' ? 'selected' : ''}
            >
              Buy
            </li>
            <li
              id='sell'
              onClick={onTradeTypeChange}
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
                    value={quantity}
                    onChange={onQuantityChange}
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
                    <input
                      value={price}
                      onChange={onPriceChange}
                      className='price-input'
                      type='number'
                      min='0'
                    />
                  </div>
                </div>
              </div>

              <Additions />

              <div className='total-spent-wrapper'>
                <p>Total Spent</p>
                <div>${price * quantity}</div>
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
