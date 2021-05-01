import React from 'react'
import EmptyStar from './EmpyStar'

const Row = ({ crypto }) => {
  const {
    market_cap_rank,
    name,
    current_price,
    symbol,
    market_cap,
    total_volume: volume,
    circulating_supply,
    price_change_percentage_24h_in_currency: day_change,
    price_change_percentage_7d_in_currency: week_change,
  } = crypto

  return (
    <tr>
      <td className='text-center'>
        <EmptyStar />
      </td>
      <td className='text-center'>{market_cap_rank}</td>
      <td className='text-start'>
        {name} , {symbol.toUpperCase()}
      </td>
      <td className='text-end'>${current_price.toLocaleString()}</td>
      <td className='text-end'>{day_change.toFixed(2)}%</td>
      <td className='text-end'>{week_change.toFixed(2)}%</td>
      <td className='text-end'>${market_cap.toLocaleString()}</td>
      <td className='text-end'>${volume.toLocaleString()}</td>
      <td className='text-end'>
        {circulating_supply.toLocaleString()}, {symbol.toUpperCase()}
      </td>
      <td className='text-end'>Last 7 Days</td>
    </tr>
  )
}

export default Row
