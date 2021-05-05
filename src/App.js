import React, { useEffect, useState } from 'react'
import './wwwroot/css/Homepage.css'
import cryptoService from './services/Crypto'
// import LoadingBar from './components/LoadingBar'
import SyncLoader from 'react-spinners/SyncLoader'
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
  const [loading, setLoading] = useState(false)

  console.log('Cryptos: ', cryptos)

  const getCryptos = () => {
    setLoading(true)
    cryptoService
      .getInfo('market_cap_desc', pagination.rows, pagination.page)
      .then(data => {
        setCryptos(data)
        setLoading(false)
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
      {/* <LoadingBar /> */}
      <Navbar cryptoCount={pagination.count} />
      {loading ? (
        <div className='loading-wrapper'>
          <SyncLoader color={'#2196F3'} loading={loading} size={20} />
        </div>
      ) : (
        <div>
          <Table cryptos={cryptos} />
          <Pagination
            pagination={pagination}
            count={maxPages}
            pageChage={handlePageChange}
            rowsChange={handleRowsChange}
          />
        </div>
      )}

      <Footer />
    </div>
  )
}

export default App
