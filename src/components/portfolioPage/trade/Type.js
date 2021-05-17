import React from 'react'

const Type = ({ handleClick, type }) => {
  return (
    <ul className='trade-type'>
      <li
        id='buy'
        onClick={handleClick}
        className={type === 'buy' ? 'selected' : ''}
      >
        Buy
      </li>
      <li
        id='sell'
        onClick={handleClick}
        className={type === 'sell' ? 'selected' : ''}
      >
        Sell
      </li>
    </ul>
  )
}

export default Type
