import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './wwwroot/css/Homepage.css'
import cryptoService from './services/Crypto'
import Navbar from './components/Navbar'
import Table from './components/Table'
import Pagination from './components/Pagination'
import Footer from './components/Footer'

function App() {
  const [cryptos, setCryptos] = useState([])
  const [maxPages, setMaxPage] = useState(139)
  const [pagination, setPagination] = useState({
    page: 1,
    rows: 50,
    count: 0,
  })

  console.log('Cryptos: ', cryptos)

  const getCryptos = () => {
    cryptoService
      .getInfo('market_cap_desc', pagination.rows, pagination.page)
      .then(data => {
        setCryptos(data)
      })
  }

  const getCountCryptos = () => {
    cryptoService.getTotNumberOfCryptos().then(count => {
      const newPagination = { ...pagination, count: count.tot }
      setPagination(newPagination)
    })
  }

  useEffect(getCryptos, [pagination])
  useEffect(getCountCryptos, [])

  //pagination handling

  const handlePageChange = (event, value) => {
    const newPagination = { ...pagination, page: value }
    setPagination(newPagination)
  }

  const handleRowsChange = e => {
    const rowsNumber = e.target.value
    const newPagination = { ...pagination, rows: rowsNumber, page: 1 }
    const newMaxPage = Math.ceil(pagination.count / rowsNumber)

    setPagination(newPagination)
    setMaxPage(newMaxPage)
  }

  return (
    <div className='page-wrapper'>
      <Navbar cryptoCount={pagination.count} />
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
