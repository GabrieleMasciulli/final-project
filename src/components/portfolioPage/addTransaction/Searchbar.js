import React from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { changeQuery } from '../../../reducers/searchCrypto'

const Searchbar = () => {
  const dispatch = useDispatch()
  const { query } = useSelector(state => state.search)

  return (
    <div className='transaction-searchbar-wrappper'>
      <div className='search-icon'>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        value={query}
        type='text'
        onChange={({ target: { value } }) => dispatch(changeQuery(value))}
        placeholder='Search'
      />
    </div>
  )
}

export default Searchbar
