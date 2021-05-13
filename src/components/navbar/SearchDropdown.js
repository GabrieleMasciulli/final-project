import React from 'react'
import DropdownItem from './DropdownItem'

const SearchDropdown = () => {
  return (
    <div className='search-dropdown-wrapper '>
      <div className='search-dropdown-content'>
        <DropdownItem id='bitcoin' />
        <DropdownItem id='ethereum' />
        <DropdownItem id='dogecoin' />
      </div>
    </div>
  )
}

export default SearchDropdown
