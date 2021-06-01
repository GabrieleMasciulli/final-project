import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChartSelector = ({ text, onClick, icon }) => {
  return (
    <button className='chart-selector'>
      <span className='icon-wrapper'>
        <FontAwesomeIcon icon={icon} />
      </span>
      {text}
    </button>
  )
}

export default ChartSelector
