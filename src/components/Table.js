import React from 'react'
import '../wwwroot/css/Table.css'
import Row from './Row'
import Info from './Info'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Thead = () => {
  return (
    <thead>
      {/* <Separator /> */}
      <tr>
        <td></td>
        <th className='text-center'>
          #
          <FontAwesomeIcon icon={faCaretUp} />
        </th>
        <th className='text-start'>Name</th>
        <th className='text-end'>Price</th>
        <th className='text-end'> 24h %</th>
        <th className='text-end'>7d %</th>
        <th className='text-end'>
          Market Cap
          <Info />
        </th>
        <th className='text-end'>
          Volume(24h)
          <Info />
        </th>
        <th className='text-end'>
          Circulating Supply
          <Info />
        </th>
        <th className='text-end'>Small chart of Last 7 Days</th>
      </tr>
    </thead>
  )
}

const Tbody = () => {
  return (
    <tbody>
      <Row />
    </tbody>
  )
}

const Table = () => {
  return (
    <div className='table-responsive screener-wrapper'>
      <table className='screener table'>
        <Thead />
        <Tbody />
      </table>
    </div>
  )
}

export default Table
