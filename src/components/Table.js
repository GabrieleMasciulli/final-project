import React from 'react'
import '../wwwroot/css/Table.css'
import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ cryptos }) => {
  return (
    <div className='table-responsive '>
      <table className='screener table'>
        <Thead />
        <Tbody cryptos={cryptos} />
      </table>
    </div>
  )
}

export default Table
