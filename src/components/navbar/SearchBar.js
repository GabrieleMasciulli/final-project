import React, { useEffect } from 'react'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import SearchDropdown from './SearchDropdown'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeQuery,
  initResults,
  getResults,
} from '../../reducers/searchCrypto'

const SearchBar = () => {
  const dispatch = useDispatch()

  const { query, results } = useSelector(state => state.search)

  useEffect(() => {
    if (query === '') dispatch(initResults(15))
  }, [dispatch, query])

  useEffect(() => {
    if (query !== '') dispatch(getResults(query))
  }, [dispatch, query])

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
          onChange={({ target }) => dispatch(changeQuery(target.value))}
          value={query}
          className='search'
          placeholder='Search'
        />
        <div className='right-search'>/</div>
      </div>
    </Tippy>
  )
}

export default SearchBar
