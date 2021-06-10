import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'
import Loader from '../../designItems/Loader'

const Assets = ({ assets, loading, deleteAsset }) => {
  return (
    <div className='assets-wrapper'>
      <div className='top-name'>
        <p>Your Assets</p>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <table className='assets-table'>
          <Thead />
          <Tbody assets={assets} loading={loading} deleteAsset={deleteAsset} />
        </table>
      )}
    </div>
  )
}

export default Assets
