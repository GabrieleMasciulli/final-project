import React from 'react'
import Chart from './Chart'

const LeftPane = ({ crypto, loading, data, onChartDayChange, currentDays }) => {
  return (
    <div className='left-side'>
      <Chart
        currentDays={currentDays}
        loading={loading}
        data={data}
        crypto={crypto}
        onDayChange={onChartDayChange}
      />
    </div>
  )
}

export default LeftPane
