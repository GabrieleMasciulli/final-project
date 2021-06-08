import React, { useEffect, useState } from 'react'
import '../static/css/Portfolio.css'
import '../static/css/TradeCryptoSearch.css'
import Tracker from '../components/portfolioPage/tracker/Tracker'
import TopInfo from '../components/portfolioPage/addTransaction/TopInfo'
import AddTransaction from '../components/portfolioPage/addTransaction/AddTransaction'
import Trade from '../components/portfolioPage/trade/Trade'
import searchService from '../services/search.service'

const Portfolio = () => {
  const [addTransaction, setAddTransaction] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [results, setResults] = useState([])
  const [userAction, setUserAction] = useState({
    wants_to_trade: false,
    selected_coin: null,
    trades_added: 0,
  })
  const duplicates = new Set()

  const getFirstResultsHook = () => {
    searchService.getFirst(100).then(results => {
      setResults(results)
    })
  }
  useEffect(getFirstResultsHook, [userAction])

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
    }
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getFilteredResultsHook, [searchInput])

  const handleCancel = () => {
    const newUserAction = {
      ...userAction,
      wants_to_trade: false,
      selected_coin: null,
    }

    if (searchInput !== '') {
      setSearchInput('')
    } else {
      setUserAction(newUserAction)
    }
    setAddTransaction(false)
  }

  const handleSearchChange = e => {
    const newSearch = e.target.value
    setSearchInput(newSearch)
  }

  const handleResultClick = e => {
    setAddTransaction(false)
    const newUserAction = {
      ...userAction,
      wants_to_trade: true,
      selected_coin: e.currentTarget.value,
    }

    setUserAction(newUserAction)
  }

  const handleTradeSuccess = () => {
    const newUserAction = {
      ...userAction,
      trades_added: userAction.trades_added + 1,
    }
    setUserAction(newUserAction)
  }

  return (
    <div>
      {addTransaction ? (
        <AddTransaction
          searchResults={results}
          cancel={handleCancel}
          value={searchInput}
          handleChange={handleSearchChange}
          handleClick={handleResultClick}
        />
      ) : userAction.wants_to_trade ? (
        <Trade
          cancel={handleCancel}
          coin={userAction.selected_coin}
          isSuccedeed={handleTradeSuccess}
        />
      ) : (
        ''
      )}
      <div className='portfolio-page-wrapper'>
        <div className='portfolio-page-content'>
          <TopInfo addTransaction={() => setAddTransaction(!addTransaction)} />
          <Tracker newTrades={userAction.trades_added} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
