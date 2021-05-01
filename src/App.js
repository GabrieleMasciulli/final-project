import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import cryptoService from './services/Crypto'
import Table from './components/Table'
import Pagination from './components/Pagination'

function App() {
  const [cryptos, setCryptos] = useState([])
  const [cryptosCount, setCount] = useState()

  console.log('Cryptos: ', cryptos)
  console.log('Cryptos count: ', cryptosCount)

  const getCryptos = () => {
    cryptoService.getInfo('market_cap_desc', '10', '1').then(initialCryptos => {
      setCryptos(cryptos.concat(initialCryptos))
    })
    cryptoService.getTotNumberOfCryptos().then(count => {
      setCount(count.tot)
    })
  }

  useEffect(getCryptos, [])

  return (
    <div>
      <div className='screener-wrapper'>
        <Table cryptos={cryptos} />
      </div>
      <Pagination count={cryptosCount} />
    </div>
  )
}

export default App
