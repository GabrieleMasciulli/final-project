import React from 'react'
import TopLeft from './TopLeft'
import TopMiddle from './TopMiddle'
import BottomRight from './BottomRight'
import BottomLeft from './BottomLeft'
import TopRight from './TopRight'
import Loader from '../../designItems/Loader'


const TopInfo = ({ data, loading }) => {
  return !loading ? (
    <div className='top-info-container'>
      <div className='top-info-content'>
        <TopLeft data={data} />
        <TopMiddle data={data} />
        <BottomRight data={data} />
        <TopRight />
        <BottomLeft data={data} />
      </div>
    </div>
  ) : (
    <Loader />
  )
}

export default TopInfo
