import React from 'react'

const TimespanSelector = ({ onClick }) => {
  const today = new Date()
  const YTD = Math.ceil(
    (today - new Date(today.getFullYear(), 0, 1)) / 86400000
  ).toString()

  const items = [
    { text: '1D', days: 1 },
    { text: '7D', days: 7 },
    { text: '1M', days: 30 },
    { text: '3M', days: 90 },
    { text: '1Y', days: 365 },
    { text: 'YTD', days: YTD },
    { text: 'ALL', days: 'max' },
  ]
  return (
    <div>
      <ul className='chart-timespan'>
        {items.map(item => (
          <li
            key={item.text}
            value={item.days}
            onClick={onClick}
            className='chart-timespan-item'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimespanSelector
