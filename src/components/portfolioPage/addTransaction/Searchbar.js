import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Searchbar = ({ value, handleChange }) => {
  return (
    <div className='transaction-searchbar-wrappper'>
      <div className='search-icon'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        value={value}
        type='text'
        onChange={handleChange}
        placeholder='Search'
      />
    </div>
  )
}

export default Searchbar
