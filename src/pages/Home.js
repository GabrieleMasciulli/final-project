import React, { useEffect, useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import cryptoService from '../services/Crypto'

const Home = ({ cryptoCount }) => {
  const [cryptos, setCryptos] = useState([])
  const [loading, setLoading] = useState(false)
  const [maxPages, setMaxPage] = useState(139)
  const [pagination, setPagination] = useState({
    page: 1,
    rows: 50,
  })

  console.log('Cryptos: ', cryptos)

  const getCryptos = () => {
    console.log('Getting cryptos...')
    setLoading(true)
    cryptoService
      .getInfo('market_cap_desc', pagination.rows, pagination.page)
      .then(data => {
        setCryptos(data)
        setLoading(false)
      })
  }

  useEffect(getCryptos, [pagination])

  //pagination handling
  const handleRowsChange = e => {
    const rowsNumber = e.target.value
    const newPagination = { ...pagination, rows: rowsNumber, page: 1 }
    const newMaxPage = Math.ceil(cryptoCount / rowsNumber)

    setPagination(newPagination)
    setMaxPage(newMaxPage)
  }

  const handlePageChange = (event, value) => {
    const newPagination = { ...pagination, page: value }
    setPagination(newPagination)
  }

  return (
    <>
      {loading ? (
        <div className='loading-wrapper'>
          <SyncLoader color={'#2196F3'} loading={loading} size={20} />
        </div>
      ) : (
        <>
          <Table cryptos={cryptos} />
          <Pagination
            cryptoCount={cryptoCount}
            pagination={pagination}
            count={maxPages}
            pageChage={handlePageChange}
            rowsChange={handleRowsChange}
          />
        </>
      )}
    </>
  )
}

export default Home
