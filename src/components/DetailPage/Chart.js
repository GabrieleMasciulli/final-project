import React, { useState } from 'react'
import SyncLoader from 'react-spinners/SyncLoader'
import chartOptionService from '../../services/chartOptions'

//highchart
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const Chart = ({ crypto, loading, data }) => {
  const [chartType, setChartType] = useState('price')
  const chartOptions = chartOptionService.getOptions(data)

  const handleHover = e => {
    console.log(e.target.value)
    setChartType(e.target.value)
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
            <div className='chart-type'>
              <div className='chart-type-content'>
                <div className={`slider slider-${chartType}`}></div>
                <button
                  value='price'
                  onMouseEnter={handleHover}
                  className={chartType === 'price' ? 'landed' : ''}
                >
                  <span>Price</span>
                </button>
                <button
                  value='marketcap'
                  onMouseEnter={handleHover}
                  className={chartType === 'marketcap' ? 'landed' : ''}
                >
                  <span>Market Cap</span>
                </button>
                <button
                  value='tradingview'
                  onMouseEnter={handleHover}
                  className={chartType === 'tradingview' ? 'landed' : ''}
                >
                  <span>TradingView</span>
                </button>
              </div>
            </div>
            <div className='chart-timespan'></div>
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
