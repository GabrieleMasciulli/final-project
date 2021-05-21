import React from 'react'
import TopLeft from './TopLeft'
import TopMiddle from './TopMiddle'
import Loader from '../../designItems/Loader'

const TopInfo = ({ data, loading }) => {
  return !loading ? (
    <div className='top-info-container'>
      <div className='top-info-content'>
        <TopLeft data={data} />
        <TopMiddle data={data} />
        <div className='bottom-right-wrapper'>bottom-right-content</div>
        <div className='top-right-wrapper'>top-right-content</div>
        <div className='bottom-left-wrapper'>bottom-left-content</div>
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default TopInfo
