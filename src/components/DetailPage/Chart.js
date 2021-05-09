import React, { useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import chartOptionService from '../../services/chartOptions'
import ChartSelector from './ChartSelector'
import TimespanSelector from './TimespanSelector'

//highchart
import Highcharts, { time } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const Chart = ({ crypto, loading, data }) => {
  const [chartType, setChartType] = useState('price')
  const [timespan, setTimespan] = useState('all')
  const chartOptions = chartOptionService.getOptions(data)

  const handleChartTypeHover = e => {
    setChartType(e.target.value)
  }

  const handleTimespanClick = e => {
    setTimespan(e.target.value)
  }

  return (
    <div className='chart-wrapper'>
      <div className='name-wrapper'>
        <h3>{crypto.name} Chart</h3>
      </div>
      {loading ? (
        <div className='loading-wrapper'>
          <SyncLoader color={'#2196F3'} loading={loading} size={20} />
        </div>
      ) : (
        <div className='chart-content'>
          <div className='chart-utils'>
            <ChartSelector
              type={chartType}
              handleHover={handleChartTypeHover}
            />
            <TimespanSelector
              timespan={timespan}
              onClick={handleTimespanClick}
            />
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
