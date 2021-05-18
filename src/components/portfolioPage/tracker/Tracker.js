import React, { useEffect } from 'react'
import Assets from './Assets'

const Tracker = () => {
  const getAssets = () => {}

  useEffect(getAssets, [])
  return (
    <div className='tracker-wrapper'>
      <div className='chart-balance-wrapper'></div>

      <Assets />
    </div>
  )
}

export default Tracker
