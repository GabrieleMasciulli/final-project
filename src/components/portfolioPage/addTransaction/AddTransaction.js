import React from 'react'
import CloseIcon from '../../designItems/CloseIconV2'
import SearchCrypto from './SearchCrypto'

const AddTransaction = ({
  cancel,
  value,
  handleChange,
  searchResults,
  handleClick,
}) => {
  return (
    <div className='add-transaction-wrapper'>
      <div className='add-transaction-content'>
        <div className='transaction-top-info'>
          <div>Select Coin</div>
          <CloseIcon onClick={cancel} />
        </div>

        <SearchCrypto
          value={value}
          handleChange={handleChange}
          searchResults={searchResults}
          onClick={handleClick}
        />
      </div>
    </div>
  )
}

export default AddTransaction
