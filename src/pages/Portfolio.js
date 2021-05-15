import React, { useState } from 'react'
import '../static/css/Portfolio.css'
import TopInfo from '../components/portfolioPage/TopInfo'
import AddTransaction from '../components/portfolioPage/AddTransaction'

const Portfolio = () => {
  const [addTransaction, setAddTransaction] = useState(false)

  return addTransaction ? (
    <AddTransaction />
  ) : (
    <div className='portfolio-page-wrapper'>
      <div className='portfolio-page-content'>
        <TopInfo addTransaction={() => setAddTransaction(!addTransaction)} />
      </div>
    </div>
  )
}

export default Portfolio
