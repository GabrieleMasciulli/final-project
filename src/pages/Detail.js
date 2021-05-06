import React from 'react'
import { useParams } from 'react-router'
import '../wwwroot/css/Detail.css'

const Detail = () => {
  const { id } = useParams()
  return (
    <div className='detail-container'>
      <div className='top-info-container'>
        <div className='top-info-content'>
          <div className='top-left-wrapper'>top-left-content</div>
          <div className='top-center-wrapper'>top-center-content</div>
          <div className='bottom-right-wrapper'>bottom-right-content</div>
          <div className='top-right-wrapper'>top-right-content</div>
          <div className='bottom-left-wrapper'>bottom-left-content</div>
        </div>
      </div>

      <div className='page-content-container'>
        <div className='crypto-detail-container'>
          <div className='left-side'>
            <div className='chart-wrapper'>chart placeholder...</div>
          </div>

          <div className='right-side'>right-side</div>
        </div>
      </div>
    </div>
  )
}

export default Detail
