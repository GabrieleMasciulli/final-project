import React from 'react'
import Row from './Row'

const Tbody = ({ cryptos }) => {
  return (
    <tbody>
      {cryptos.map(crypto => (
        <Row key={crypto.id} crypto={crypto} />
      ))}
    </tbody>
  )
}

export default Tbody
