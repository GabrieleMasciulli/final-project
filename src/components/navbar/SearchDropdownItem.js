import React from 'react'
import { Link } from 'react-router-dom'

const DropdownItem = ({ coin }) => {
  const name = coin.name
  const logo = coin.logo
  const symbol = coin.symbol

  return (
    <Link
      to={{
        pathname: `/detail/${coin.coingecko_id}`,
      }}
    >
      <div className='search-item-wrapper'>
        <div className='search-item-content'>
          <img src={logo} alt={name} />
          <p className='item-name'>{name}</p>
          <p className='item-symbol'>{symbol}</p>
        </div>
      </div>
    </Link>
  )
}

export default DropdownItem
