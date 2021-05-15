import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TopInfo = ({ addTransaction }) => {
  return (
    <div className='portfolio-top-info'>
      <div className='info-content'>
        <div>Your Portfolio</div>
        <p>
          Accurately tracking the investment performance of your crypto assets.
        </p>
      </div>
      <button onClick={addTransaction} className='transaction-btn'>
        <FontAwesomeIcon icon={faPlus} />
        Add Transaction
      </button>
    </div>
  )
}

export default TopInfo
