import React, { useState } from 'react'
import chartOptionService from '../../services/chartOptions'
import ChartSelector from './ChartSelector'
import TimespanSelector from './TimespanSelector'
import Loader from '../designItems/Loader'

//highchart
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const Chart = ({ crypto, loading, data, onDayChange, currentDays }) => {
  const [chartType, setChartType] = useState('price')

  const chartOptions = chartOptionService.getOptions(data)

  const handleChartTypeHover = e => {
    setChartType(e.target.value)
  }

  return (
    <div className='chart-wrapper'>
      <div className='name-wrapper'>
        <h3>{crypto.name} Chart</h3>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className='chart-content'>
          <div className='chart-utils'>
            <ChartSelector
              type={chartType}
              handleHover={handleChartTypeHover}
            />
            <TimespanSelector current={currentDays} onClick={onDayChange} />
          </div>
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={chartOptions}
          />
        </div>
      )}
    </div>
  )
}

export default Chart
