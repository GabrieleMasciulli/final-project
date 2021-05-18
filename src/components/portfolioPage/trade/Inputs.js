import React from 'react'

const Inputs = ({
  coin,
  quantity,
  onQuantityChange,
  price,
  onPriceChange,
  quantityError,
  priceError,
}) => {
  return (
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
        {quantityError === 'invalid' ? (
          <div className='error-message'>Enter a valid quantity.</div>
        ) : (
          ''
        )}
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
        {priceError === 'invalid' ? (
          <div className='error-message'>Enter a valid price.</div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Inputs
