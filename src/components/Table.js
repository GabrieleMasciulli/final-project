import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ cryptos }) => {
  return (
    <div className='screener-wrapper'>
      <table className='screener '>
        <Thead />
        <Tbody cryptos={cryptos} />
      </table>
    </div>
  )
}

export default Table
