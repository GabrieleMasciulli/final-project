import React from 'react'
import SyncLoader from 'react-spinners/SyncLoader'

const Loader = () => {
  return (
    <div className='loading-wrapper'>
      <SyncLoader color={'#2196F3'} loading={true} size={20} />
    </div>
  )
}

export default Loader
