import React from 'react'
import Row from './Row'

const Tbody = ({ cryptos, globalStats }) => {
  return (
    <tbody>
      {cryptos.map(crypto => {
        const id = crypto.id
        return <Row key={id} crypto={crypto} globalStats={globalStats} />
      })}
    </tbody>
  )
}

export default Tbody
