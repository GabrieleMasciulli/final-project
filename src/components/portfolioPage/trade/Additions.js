import React from 'react'
import {
  faCalendarWeek,
  faCoins,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Additions = ({ date, onDateChange, dateError }) => {
  return (
    <>
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
      {dateError.date === 'invalid' || dateError.timestamp === 'invalid' ? (
        <div className='error-message'>Enter a valid purchase date.</div>
      ) : (
        ''
      )}
    </>
  )
}

export default Additions
