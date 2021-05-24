import React, { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import SearchDropdown from './SearchDropdown'
import searchService from '../../services/search.service'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState([])
  const duplicates = new Set()

  // const getFirstResultsHook = () => {
  //   searchService.getFirst().then(results => {
  //     setResults(results)
  //   })
  // }
  // useEffect(getFirstResultsHook, [])

  const getFilteredResultsHook = () => {
    if (searchInput.length >= 3) {
      searchService.getResults(searchInput).then(data => {
        const filteredResults = data.filter(result => {
          const duplicate = duplicates.has(result.coingecko_id)
          duplicates.add(result.coingecko_id)
          return !duplicate
        })
        setResults(filteredResults)
      })
    } else if (searchInput.length === 0) {
      searchService.getFirst(10).then(results => {
        setResults(results)
      })
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getFilteredResultsHook, [searchInput])

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
