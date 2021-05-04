import React from 'react'
import EmptyStar from './EmpyStar'

const Row = ({ crypto }) => {
  const {
    image,
    market_cap_rank,
    name,
    current_price,
    symbol,
    market_cap,
    total_volume: volume,
    circulating_supply,
    price_change_percentage_24h_in_currency: day_change,
    price_change_percentage_7d_in_currency: week_change,
    sparkline_url,
  } = crypto

  const formattedData = (type, value) => {
    let result = ``
    if (type === 'number') {
      result = value !== null ? value : ''
    } else if (type === '$') {
      result = value !== null ? `$${value.toLocaleString()}` : '?'
    } else if (type === '%') {
      result = value !== null ? `${value.toFixed(2)} %` : '?'
    }
    return result
  }

  return (
    <tr>
      <td className='text-center'>
        <EmptyStar />
      </td>
      <td className='text-center'>
        {formattedData('number', market_cap_rank)}
      </td>
      <td className='text-start'>
        <div className='logo-wrapper'>
          <img className='crypto-logo' src={image} alt='' />
          <div className='name-content'>
            {name} , {symbol.toUpperCase()}
          </div>
        </div>
      </td>
      <td className='text-end'>{formattedData('$', current_price)}</td>
      <td className='text-end'>{formattedData('%', day_change)}</td>
      <td className='text-end'>{formattedData('%', week_change)}</td>
      <td className='text-end'>{formattedData('$', market_cap)}</td>
      <td className='text-end'>{formattedData('$', volume)}</td>
      <td className='text-end'>
        {circulating_supply !== null
          ? `${circulating_supply.toLocaleString()} ${symbol.toUpperCase()}`
          : '?'}
      </td>
      <td className='text-end'>
        <img src={sparkline_url} alt='' width='164' height='54' />
      </td>
    </tr>
  )
}

export default Row
