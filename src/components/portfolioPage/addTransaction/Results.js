import React from 'react'
import ResultItem from './ResultItem'

const Results = ({ results, onClick }) => {
  return (
    <div className='search-results-wrapper'>
      <div className='search-results-content'>
        <div className='space'></div>
        {results.map(result => (
          <ResultItem
            key={result.coingecko_id}
            value={result.coingecko_id}
            name={result.name}
            symbol={result.symbol}
            logo={result.logo}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  )
}

export default Results
