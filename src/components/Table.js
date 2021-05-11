import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ cryptos, globalStats }) => {
  return (
    <div className='screener-wrapper'>
      <table className='screener '>
        <Thead />
        <Tbody cryptos={cryptos} globalStats={globalStats} />
      </table>
    </div>
  )
}

export default Table
