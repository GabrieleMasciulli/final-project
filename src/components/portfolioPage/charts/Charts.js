import React, { useState, useEffect } from 'react'
import ChartSelector from './ChartSelector'
import PieChart from './Pie'

import {
  faChartPie,
  faChartLine,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons'

const Charts = () => {
  return (
    <div className='charts-wrapper'>
      <div className='chart-selector-wrapper'>
        <ChartSelector text='Line Chart' icon={faChartLine} />
        <ChartSelector text='Pie Chart' icon={faChartPie} />
        <ChartSelector text='Statistics' icon={faBalanceScaleRight} />
      </div>

      <div className='chart-wrapper'>
        <PieChart />
      </div>
    </div>
  )
}

export default Charts
