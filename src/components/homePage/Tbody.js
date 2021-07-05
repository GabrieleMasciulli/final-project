import React from 'react'
import Row from './Row'
import { useSelector } from 'react-redux'

const Tbody = () => {
  const cryptos = useSelector(state => state.cryptos)

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
