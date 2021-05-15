import React from 'react'
import SearchDropdownItem from './SearchDropdownItem'

const SearchDropdown = () => {
  return (
    <div className='search-dropdown-wrapper '>
      <div className='search-dropdown-content'>
        <SearchDropdownItem id='bitcoin' />
        <SearchDropdownItem id='ethereum' />
        <SearchDropdownItem id='dogecoin' />
      </div>
    </div>
  )
}

export default SearchDropdown
