import React from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import SearchDropdown from './SearchDropdown'


const SearchBar = () => {
  return (
    <Tippy
      trigger='click'
      interactive='true'
      className='show-search-tooltip'
      arrow={false}
      allowHTML='true'
      placement='bottom-end'
      content={<SearchDropdown />}
    >
      <div className='searchbar-wrapper' aria-expanded='true'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
          <path
            d='M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z'
            stroke='currentColor'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
        <div className='search'>Search</div>
        <div className='right-search'>/</div>
      </div>
    </Tippy>
  )
}

export default SearchBar
