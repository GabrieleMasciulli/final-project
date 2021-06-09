import React from 'react'

const RemoveCoin = () => {
  return (
    <div className='remove-coin-container'>
      <div className='remove-coin-wrapper'>
        <div className='remove-coin-content'>
          <div className='title'>Remove Coin</div>
          <p>
            Are you sure want to remove this coin? Any transactions associated
            with this coin will also be removed.
          </p>
          <div className='actions-wrapper'>
            <button className='remove'>Remove</button>
            <button className='cancel'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RemoveCoin
