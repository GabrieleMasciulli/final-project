import React from 'react'
import EmptyStar from './EmpyStar'

const Row = () => {
  return (
    <tr>
      <td className='text-center'>
        <EmptyStar />
      </td>
      <td className='text-center'>1</td>
      <td className='text-start'>Bitcoin BTC</td>
      <td className='text-end'>$57,892.28</td>
      <td className='text-end'>6.52%</td>
      <td className='text-end'>15.31%</td>
      <td className='text-end'>$1,086,231,080,186</td>
      <td className='text-end'>$52,809,603,719</td>
      <td className='text-end'>18,695,756 BTC</td>
      <td className='text-end'>Last 7 Days</td>
    </tr>
  )
}

export default Row
