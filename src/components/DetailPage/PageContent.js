import React from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const PageConntent = ({
  crypto,
  stats,
  chartLoading,
  statsLoading,
  data,
  onChartDayChange,
  currentDays,
}) => {
  return (
    <div className='page-content-container'>
      <div className='crypto-detail-container'>
        <LeftPane
          currentDays={currentDays}
          crypto={crypto}
          loading={chartLoading}
          data={data}
          onChartDayChange={onChartDayChange}
        />
        <RightPane loading={statsLoading} stats={stats} />
      </div>
    </div>
  )
}

export default PageConntent
