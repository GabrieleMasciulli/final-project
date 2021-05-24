import React from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const PageConntent = ({
  crypto,
  stats,
  chartLoading,
  globalLoading,
  statsLoading,
  data,
  globalStats,
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
        <RightPane
          globalLoading={globalLoading}
          loading={statsLoading}
          stats={stats}
          globalStats={globalStats}
        />
      </div>
    </div>
  )
}

export default PageConntent
