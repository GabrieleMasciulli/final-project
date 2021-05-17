import React from 'react'
import {
  faCalendarWeek,
  faCoins,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Additions = ({ date, onDateChange }) => {
  return (
    <div className='trade-additions-wrapper'>
      <button className='date'>
        <span>
          <FontAwesomeIcon icon={faCalendarWeek} />
        </span>
        <input
          value={date}
          onChange={onDateChange}
          type='date'
          className='date-picker'
        />
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
