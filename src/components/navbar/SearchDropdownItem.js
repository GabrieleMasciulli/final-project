import React from 'react'
import { Link } from 'react-router-dom'

const DropdownItem = ({ id }) => {
  return (
    <Link
      to={{
        pathname: '#',
        state: {},
      }}
    >
      <div className='search-item-wrapper'>
        <div className='search-item-content'>
          <img
            src='https://s2.coinmarketcap.com/static/img/coins/64x64/233.png'
            alt={id}
          />
          <p className='item-name'>Name</p>
          <p className='item-symbol'>BTC</p>
        </div>
        <div className='search-item-content'>
          <div className='rank-area'>
            <p>#2079</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default DropdownItem
