import React from 'react'
import CloseIcon from '../designItems/CloseIconV2'
import Searchbar from './Searchbar'
import Results from './Results'

const AddTransaction = ({ cancel, value, handleChange }) => {
  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Select Coin</div>
          <CloseIcon onClick={cancel} />
        </div>

        <div className='transaction-search-content'>
          <Searchbar value={value} handleChange={handleChange} />
          <Results />
        </div>
      </div>
    </div>
  )
}

export default AddTransaction
