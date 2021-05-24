import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const Table = ({ cryptos }) => {
  return (
    <table className='screener '>
      <Thead />
      <Tbody cryptos={cryptos} />
    </table>
  )
}

export default Table
