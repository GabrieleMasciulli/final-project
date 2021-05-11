import React from 'react'
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const PageConntent = ({
  crypto,
  stats,
  chartLoading,
  statsLoading,
  data,
  globalStats,
}) => {
  return (
    <div className='page-content-container'>
      <div className='crypto-detail-container'>
        <LeftPane crypto={crypto} loading={chartLoading} data={data} />
        <RightPane
          loading={statsLoading}
          stats={stats}
          globalStats={globalStats}
        />
      </div>
    </div>
  )
}

export default PageConntent
