import React from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ResultItem = ({ handleClick, name, symbol, img }) => {
  return (
    <button onClick={handleClick} className='item-wrapper'>
      <div className='item-content'>
        <div className='left-side'>
          <img className='coin-logo' src={img} alt={name}></img>
          <div className='crypto-info-content'>
            <p>{name}</p>
            <div className='symbol'>{symbol}</div>
          </div>
        </div>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </button>
  )
}

export default ResultItem
