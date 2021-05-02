import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './wwwroot/css/Homepage.css'
import cryptoService from './services/Crypto'
import Table from './components/Table'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

function App() {
  const [cryptos, setCryptos] = useState([])
  const [maxPages, setMaxPages] = useState(139)
  const [pagination, setPagination] = useState({
    page: 1,
    rows: 50,
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
        count={maxPages}
        pageChage={handlePageChange}
        rowsChange={handleRowsChange}
      />
      <Footer />
    </div>
  )
}

export default App
