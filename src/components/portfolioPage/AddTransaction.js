import React from 'react'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddTransaction = () => {
  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Select Coin</div>
          <FontAwesomeIcon width='26px' icon={faTimesCircle} />
        </div>
      </div>
    </div>
  )
}

export default AddTransaction
