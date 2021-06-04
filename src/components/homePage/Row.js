import React from 'react'
import EmptyStar from '../designItems/EmpyStar'
import { Link } from 'react-router-dom'

const Row = ({ crypto }) => {
  let {
    id,
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

  return (
    <tr>
      <td className='text-center'>
        <EmptyStar />
      </td>
      <td className='text-center'>{market_cap_rank}</td>
      <td className='text-start'>
        <Link
          className='detail-redirect-wrapper'
          to={{
            pathname: `/detail/${id}`,
          }}
        >
          <div className='logo-wrapper'>
            <img className='crypto-logo' src={image} alt='' />
            <div className='name-content'>
              {name} , {symbol.toUpperCase()}
            </div>
          </div>
        </Link>
      </td>
      <td className='text-end'>{current_price}</td>
      <td
        className={`text-end ${
          day_change === 'No data'
            ? ''
            : day_change < 0
            ? 'text-red'
            : 'text-green'
        }`}
      >
        {day_change}
      </td>
      <td
        className={`text-end ${
          week_change === 'No data'
            ? ''
            : week_change < 0
            ? 'text-red'
            : 'text-green'
        }`}
      >
        {week_change}
      </td>
      <td className='text-end'>{market_cap}</td>
      <td className='text-end'>{volume}</td>
      <td className='text-end'>{`${circulating_supply} ${symbol}`}</td>
      <td className='text-end'>
        <img src={sparkline_url} alt='' width='164' height='54' />
      </td>
    </tr>
  )
}

export default Row
