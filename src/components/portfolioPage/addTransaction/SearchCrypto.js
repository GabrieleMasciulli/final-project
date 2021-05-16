import React from 'react'
import Searchbar from './Searchbar'
import Results from './Results'

export default function SearchCrypto({
  value,
  handleChange,
  searchResults,
  onClick,
}) {
  return (
    <div>
      <div className='transaction-search-content'>
        <Searchbar value={value} handleChange={handleChange} />
        <Results results={searchResults} onClick={onClick} />
      </div>
    </div>
  )
}
