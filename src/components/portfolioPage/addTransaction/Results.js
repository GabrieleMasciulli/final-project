import React from 'react'
import ResultItem from './ResultItem'
import { useSelector } from 'react-redux'

const Results = () => {
  const { results } = useSelector(state => state.search)

  return (
    <div className='search-results-wrapper'>
      <div className='search-results-content'>
        <div className='space'></div>
        {results.map(result => (
          <ResultItem
            key={result.coingecko_id}
            id={result.coingecko_id}
            name={result.name}
            symbol={result.symbol}
            logo={result.logo}
          />
        ))}
      </div>
    </div>
  )
}

export default Results
