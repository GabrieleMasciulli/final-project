import React from 'react'

const TopLeft = ({ data }) => {
  return (
    <div className='top-left-wrapper'>
      <div className='basic-info-wrapper'>
        <img
          src='https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
          height='32'
          width='32'
          alt='ETH'
        ></img>
        <h2>
          {data.name}
          <small>{data.symbol.toUpperCase()}</small>
        </h2>
        {/* <span className='add-watchlist-wrapper'>
          <button>
            <span></span>
          </button>
        </span> */}
      </div>
      <div className='rank-wrapper'>
        <div>Rank #2</div>
      </div>
    </div>
  )
}

export default TopLeft
