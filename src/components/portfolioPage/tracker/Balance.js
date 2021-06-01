import React from 'react'
import '../../../static/css/Balance.css'
import Charts from '../charts/Charts'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Balance = () => {
  return (
    <div className='balance-wrapper'>
      <div className='balance-content'>
        <p className='balance-title'>Current Balance</p>
        <div className='financials-wrapper'>
          <div className='price'>$1,449.17</div>
          <div className='change-wrapper'>
            <FontAwesomeIcon icon={faCaretUp} />
            2.76 %
          </div>
        </div>
        <p className='change-up'>+ $39.03 &nbsp;(24h)</p>
        <Charts />
      </div>
    </div>
  )
}

export default Balance
