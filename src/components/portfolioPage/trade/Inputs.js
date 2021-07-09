import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPrice, setQuantity } from '../../../reducers/trade'

const Inputs = () => {
  const dispatch = useDispatch()
  const { sharePrice, quantity, errors } = useSelector(state => state.trade)

  return (
    <div className='trade-inputs-wrapper'>
      <div className='quantity'>
        <p>Quantity</p>
        <input
          value={quantity}
          onChange={({ target: { value } }) => dispatch(setQuantity(value))}
          className='quantity-input'
          type='number'
          placeholder='0.00'
          min='0'
        />
        {errors.quantity && (
          <div className='error-message'>{errors.quantity}</div>
        )}
      </div>
      <div className='price'>
        <p>Price per coin</p>
        <div className='price-input-wrapper'>
          <span className='input-prefix'>$</span>
          <input
            value={sharePrice}
            onChange={({ target: { value } }) => dispatch(setPrice(value))}
            className='price-input'
            type='number'
            placeholder='0.00'
            min='0'
          />
        </div>
        {errors.sharePrice && (
          <div className='error-message'>{errors.sharePrice}</div>
        )}
      </div>
    </div>
  )
}

export default Inputs
