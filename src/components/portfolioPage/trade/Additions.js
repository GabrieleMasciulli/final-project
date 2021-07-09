import React from 'react'
import {
  faCalendarWeek,
  faCoins,
  faComments,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../../../reducers/trade'

const Additions = () => {
  const dispatch = useDispatch()
  const { date, errors } = useSelector(state => state.trade)

  return (
    <>
      <div className='trade-additions-wrapper'>
        <button className='date'>
          <span>
            <FontAwesomeIcon icon={faCalendarWeek} />
          </span>
          <input
            value={date}
            onChange={({ target: { value } }) => dispatch(setDate(value))}
            type='datetime-local'
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
      {(errors.date && <div className='error-message'>{errors.date}</div>) ||
        (errors.timestamp && (
          <div className='error-message'>{errors.timestamp}</div>
        ))}
    </>
  )
}

export default Additions
