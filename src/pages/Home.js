import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import TopInfo from '../components/homePage/TopInfo'
import Table from '../components/homePage/Table'
import Pagination from '../components/Pagination'
import { useSelector } from 'react-redux'

const Home = () => {
  const cryptos = useSelector(state => state.cryptos)

  return (
    <div className='screener-wrapper'>
      <TopInfo />

      <Table />
      {cryptos.length === 0 && (
        <div className='loading-wrapper'>
          <SyncLoader color={'#2196F3'} loading={true} size={20} />
        </div>
      )}
      <Pagination />
    </div>
  )
}

export default Home
