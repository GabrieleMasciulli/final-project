import React from 'react'
import Thead from './Thead'
import Tbody from './Tbody'

const Assets = () => {
  return (
    <div className='assets-wrapper'>
      <div className='top-name'>
        <p>Your Assets</p>
      </div>

      <table className='assets-table'>
        <Thead />
        <Tbody />
      </table>
    </div>
  )
}

export default Assets
