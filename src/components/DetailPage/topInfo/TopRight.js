import React from 'react'
import { Link } from 'react-router-dom'

const TopRight = () => {
  return (
    <div className='top-right-wrapper'>
      <div className='top-right-content'>
        <div className='buttons-wrapper'>
          <Link
            className='detail-redirect-wrapper'
            to={{
              pathname: `/portfolio`,
            }}
          >
            <button>Buy</button>
          </Link>

          <Link
            className='detail-redirect-wrapper'
            to={{
              pathname: `/portfolio`,
            }}
          >
            <button>Sell</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopRight
