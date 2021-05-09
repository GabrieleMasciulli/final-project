import React from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const PageConntent = ({ crypto, loading, data }) => {
  return (
    <div className='page-content-container'>
      <div className='crypto-detail-container'>
        <LeftPane crypto={crypto} loading={loading} data={data} />
        <RightPane />
      </div>
    </div>
  )
}

export default PageConntent
