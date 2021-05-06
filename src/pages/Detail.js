import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../wwwroot/css/Detail.css'
import cryptoService from '../services/Crypto'

//highchart
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const Detail = () => {
  const { id } = useParams()
  const [chartData, setChartData] = useState([])
  const [loading, setLoading] = useState(false)
  const [days, setDays] = useState('max')

  const chartOptions = {
    chart: {
      panning: true,
      zoomType: 'x',
    },

    plotOptions: {
      series: {
        animation: {
          duration: 2000,
        },
      },
    },

    xAxis: [
      { type: 'datetime' },
      {
        labels: {
          style: {
            color: '#666',
          },
        },
      },
    ],

    yAxis: {
      opposite: false,
      labels: {
        style: {
          color: '#666',
        },
      },
    },

    tooltip: {
      borderColor: 'transparent',
      borderRadius: 0,
      shared: true,
      followPointer: true,
      followTouchMove: true,
      pointFormat: '{point.x}',
      formatter() {
        let s = '<b>' + Highcharts.dateFormat('%A, %B %e, %Y', this.x) + '</b>'

        this.points.forEach(point => {
          s += '<br/>Price: $' + point.y
        })

        return s
      },
    },

    scrollbar: {
      enabled: false,
    },

    series: [
      {
        lineWidth: 1.8,
        lineColor: 'rgb(22, 199, 132)',
        data: chartData.prices,
      },
    ],
  }
  console.log('Chart data: ', chartData)

  const getChartData = () => {
    console.log('Getting chart data...')
    setLoading(true)
    cryptoService.getChartData(id, days).then(data => {
      setChartData(data)
      setLoading(false)
    })
  }

  useEffect(getChartData, [])

  return (
    <div className='detail-container'>
      <div className='top-info-container'>
        <div className='top-info-content'>
          <div className='top-left-wrapper'>top-left-content</div>
          <div className='top-center-wrapper'>top-center-content</div>
          <div className='bottom-right-wrapper'>bottom-right-content</div>
          <div className='top-right-wrapper'>top-right-content</div>
          <div className='bottom-left-wrapper'>bottom-left-content</div>
        </div>
      </div>

      <div className='page-content-container'>
        <div className='crypto-detail-container'>
          <div className='left-side'>
            <div className='chart-wrapper'>
              {loading ? (
                'loading...'
              ) : (
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={'stockChart'}
                  options={chartOptions}
                />
              )}
            </div>
          </div>

          <div className='right-side'>right-side</div>
        </div>
      </div>
    </div>
  )
}

export default Detail
