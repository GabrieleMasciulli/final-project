import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTradeType } from '../../../reducers/trade'

const Type = () => {
  const dispatch = useDispatch()
  const { tradeType } = useSelector(state => state.trade)

  return (
    <ul className='trade-type'>
      <li
        onClick={() => dispatch(changeTradeType('buy'))}
        className={tradeType === 'buy' ? 'selected' : ''}
      >
        Buy
      </li>
      <li
        id='sell'
        onClick={() => dispatch(changeTradeType('sell'))}
        className={tradeType === 'sell' ? 'selected' : ''}
      >
        Sell
      </li>
    </ul>
  )
}

export default Type
