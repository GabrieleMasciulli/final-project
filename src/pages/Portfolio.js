import React, { useEffect } from 'react'
import '../static/css/Portfolio.css'
import '../static/css/TradeCryptoSearch.css'
import Tracker from '../components/portfolioPage/tracker/Tracker'
import TopInfo from '../components/portfolioPage/TopInfo'
import AddTransaction from '../components/portfolioPage/addTransaction/AddTransaction'
import Trade from '../components/portfolioPage/trade/Trade'
import { useSelector, useDispatch } from 'react-redux'
import { initResults, getResults } from '../reducers/searchCrypto'
import { getPositions } from '../reducers/positions'

const Portfolio = () => {
  const dispatch = useDispatch()
  const { isTrading, selectedCoin, tradeSuccess } = useSelector(
    state => state.trade
  )

  const { query } = useSelector(state => state.search)

  useEffect(() => {
    if (query === '') dispatch(initResults(100))
  }, [dispatch, query])

  useEffect(() => {
    if (query !== '') dispatch(getResults(query))
  }, [dispatch, query])

  useEffect(() => {
    dispatch(getPositions())
  }, [dispatch, tradeSuccess])

  return (
    <div>
      <div className='portfolio-page-wrapper'>
        <div className='portfolio-page-content'>
          <TopInfo />
          <Tracker />
        </div>
      </div>

      {isTrading && !selectedCoin && <AddTransaction />}
      {selectedCoin && <Trade />}
    </div>
  )
}

export default Portfolio
