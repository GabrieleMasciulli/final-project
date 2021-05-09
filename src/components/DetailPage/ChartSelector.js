import React from 'react'

const ChartSelector = ({ type, handleHover }) => {
  return (
    <div className='chart-type'>
      <div className='chart-type-content'>
        <div className={`slider slider-${type}`}></div>
        <button
          value='price'
          onMouseEnter={handleHover}
          className={type === 'price' ? 'landed' : ''}
        >
          <span>Price</span>
        </button>
        <button
          value='marketcap'
          onMouseEnter={handleHover}
          className={type === 'marketcap' ? 'landed' : ''}
        >
          <span>Market Cap</span>
        </button>
        <button
          value='tradingview'
          onMouseEnter={handleHover}
          className={type === 'tradingview' ? 'landed' : ''}
        >
          <span>TradingView</span>
        </button>
      </div>
    </div>
  )
}

export default ChartSelector
