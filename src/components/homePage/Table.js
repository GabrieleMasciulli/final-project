import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ cryptos, globalStats }) => {
  return (
    <table className='screener '>
      <Thead />
      <Tbody cryptos={cryptos} globalStats={globalStats} />
    </table>
  )
}

export default Table
