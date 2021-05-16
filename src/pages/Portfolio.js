import React, { useState } from 'react'
import '../static/css/Portfolio.css'
import TopInfo from '../components/portfolioPage/TopInfo'
import AddTransaction from '../components/portfolioPage/AddTransaction'

const Portfolio = () => {
  const [addTransaction, setAddTransaction] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const handlecancel = () => {
    setSearchInput('')
    setAddTransaction(false)
  }

  const handleSearchChange = e => {
    const newSearch = e.target.value
    setSearchInput(newSearch)
  }

  return (
    <div>
      {addTransaction ? (
        <AddTransaction
          cancel={handlecancel}
          value={searchInput}
          handleChange={handleSearchChange}
        />
      ) : (
        ''
      )}
      <div className='portfolio-page-wrapper'>
        <div className='portfolio-page-content'>
          <TopInfo addTransaction={() => setAddTransaction(!addTransaction)} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
