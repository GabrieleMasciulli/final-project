import React from 'react'
import Converter from './Converter'
import PriceStatistics from './PriceStatistics'
import Loader from '../designItems/Loader'

const RightPane = ({ loading, stats }) => {
  return (
    <div className='right-side'>
      <Converter />

      {loading ? <Loader /> : <PriceStatistics stats={stats} />}
    </div>
  )
}

export default RightPane
