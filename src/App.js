import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './wwwroot/css/Homepage.css'
import cryptoService from './services/Crypto'
import Table from './components/Table'
import Pagination from './components/Pagination'

function App() {
  const [cryptos, setCryptos] = useState([])
  const [cryptosCount, setCount] = useState(691)
  const [pagination, setPagination] = useState({
    page: 1,
    rows: 20,
  })

  console.log('Prev Cryptos: ', cryptos)

  const getCryptos = () => {
    cryptoService
      .getInfo('market_cap_desc', pagination.rows, pagination.page)
      .then(data => {
        setCryptos(data)
      })
  }

  useEffect(getCryptos, [pagination])

  //pagination handling

  const handlePageChange = (event, value) => {
    const newPagination = { ...pagination, page: value }
    setPagination(newPagination)
  }

  const handleRowsChange = e => {
    const newPagination = { ...pagination, rows: e.target.value }
    setPagination(newPagination)
  }

  return (
    <div className='page-wrapper'>
      <Table cryptos={cryptos} />
      <Pagination
        pagination={pagination}
        count={cryptosCount}
        pageChage={handlePageChange}
        rowsChange={handleRowsChange}
      />
    </div>
  )
}

export default App
