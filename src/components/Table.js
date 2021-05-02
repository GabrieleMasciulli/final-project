import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ cryptos }) => {
  return (
    <div className='screener-wrapper'>
      <div className='table-responsive '>
        <table className='screener table'>
          <Thead />
          <Tbody cryptos={cryptos} />
        </table>
      </div>
    </div>
  )
}

export default Table
