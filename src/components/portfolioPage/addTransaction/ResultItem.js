import React from 'react'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setCoin } from '../../../reducers/trade'
import { useDispatch } from 'react-redux'

const ResultItem = ({ id, name, symbol, logo }) => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(setCoin(id))} className='item-wrapper'>
      <div className='item-content'>
        <div className='left-side'>
          <img className='coin-logo' src={logo} alt={name}></img>
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
