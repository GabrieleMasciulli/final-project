import React from 'react'
import {
  faCalendarWeek,
  faCoins,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Additions = () => {
  return (
    <div className='trade-additions-wrapper'>
      <button className='date'>
        <span>
          <FontAwesomeIcon icon={faCalendarWeek} />
        </span>
        <input type='date' />
      </button>
      <button className='fee'>
        <span>
          <FontAwesomeIcon icon={faCoins} />
        </span>
        Fee
      </button>
      <button className='notes'>
        <span>
          <FontAwesomeIcon icon={faComments} />
        </span>
        Notes
      </button>
    </div>
  )
}

export default Additions
