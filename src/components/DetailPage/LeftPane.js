import React from 'react'
import Chart from './Chart'

const LeftPane = ({ crypto, loading, data }) => {
  return (
    <div className='left-side'>
      <Chart loading={loading} data={data} crypto={crypto} />
    </div>
  )
}

export default LeftPane
