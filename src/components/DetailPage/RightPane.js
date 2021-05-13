import React from 'react'
import Converter from './Converter'
import PriceStatistics from './PriceStatistics'
import Loader from '../designItems/Loader'

const RightPane = ({ loading, stats, globalStats }) => {
  return (
    <div className='right-side'>
      <Converter />
      {loading ? (
        <Loader />
      ) : (
        <PriceStatistics stats={stats} globalStats={globalStats} />
      )}
    </div>
  )
}

export default RightPane
