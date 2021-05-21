import React from 'react'
import TopLeft from './TopLeft'
import TopMiddle from './TopMiddle'

const TopInfo = () => {
  return (
    <div className='top-info-container'>
      <div className='top-info-content'>
        <TopLeft />
        <TopMiddle />
        <div className='bottom-right-wrapper'>bottom-right-content</div>
        <div className='top-right-wrapper'>top-right-content</div>
        <div className='bottom-left-wrapper'>bottom-left-content</div>
      </div>
    </div>
  )
}

export default TopInfo