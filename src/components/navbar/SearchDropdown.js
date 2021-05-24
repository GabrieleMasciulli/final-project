import React from 'react'
import SearchDropdownItem from './SearchDropdownItem'

const SearchDropdown = ({ results }) => {
  return (
    <div className='search-dropdown-wrapper '>
      <div className='search-dropdown-content'>
        {results.map(result => (
          <SearchDropdownItem key={result.coingecko_id} coin={result} />
        ))}
      </div>
    </div>
  )
}

export default SearchDropdown
