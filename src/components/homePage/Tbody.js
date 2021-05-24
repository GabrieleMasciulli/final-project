import React from 'react'
import Row from './Row'

const Tbody = ({ cryptos }) => {
  return (
    <tbody>
      {cryptos.map(crypto => {
        const id = crypto.id
        return <Row key={id} crypto={crypto} />
      })}
    </tbody>
  )
}

export default Tbody
