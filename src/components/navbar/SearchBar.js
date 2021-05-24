import React, { useState, useEffect } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import SearchDropdown from './SearchDropdown'
import searchService from '../../services/search.service'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState([])
  const duplicates = new Set()

  // console.log(results)

  const getFirstResultsHook = () => {
    searchService.getFirst(15).then(results => {
      setResults(results)
    })
  }
  useEffect(getFirstResultsHook, [])

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

  const handleSearchChange = e => {
    const newSearch = e.target.value
    setSearchInput(newSearch)
  }

  return (
    <Tippy
      trigger='click'
      interactive='true'
      className='show-search-tooltip'
      arrow={false}
      allowHTML='true'
      placement='bottom-end'
      content={<SearchDropdown results={results} />}
    >
      <div className='searchbar-wrapper' aria-expanded='true'>
        <FontAwesomeIcon icon={faSearch} />
        <input
          onChange={handleSearchChange}
          value={searchInput}
          className='search'
          placeholder='Search'
        />
        <div className='right-search'>/</div>
      </div>
    </Tippy>
  )
}

export default SearchBar
