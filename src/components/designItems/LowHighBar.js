import React from 'react'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LowHighBar = ({ low, high, current }) => {
  const high_minus_low = high - low
  const high_minus_current = high - current
  const bar_width = 100 - (100 * high_minus_current) / high_minus_low

  const style = {
    width: `${bar_width}%`,
  }

  return (
    <div className='low-high-bar'>
      <span className='background-bar'>
        <span style={style} className='front-bar'>
          <FontAwesomeIcon icon={faCaretUp} />
        </span>
      </span>
    </div>
  )
}

export default LowHighBar
