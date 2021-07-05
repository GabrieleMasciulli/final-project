import React from 'react'
// import SyncLoader from 'react-spinners/SyncLoader'
import TopInfo from '../components/homePage/TopInfo'
import Table from '../components/homePage/Table'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className='screener-wrapper'>
      {/* <div className='loading-wrapper'>
        <SyncLoader color={'#2196F3'} loading={loading} size={20} />
      </div> */}
      <TopInfo />
      <Table />
      <Pagination />
    </div>
  )
}

export default Home
