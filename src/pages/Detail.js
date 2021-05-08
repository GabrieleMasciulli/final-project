import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../wwwroot/css/Detail.css'
import cryptoService from '../services/Crypto'
import SyncLoader from 'react-spinners/SyncLoader'

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
      style: {
        fontFamily:
          'Lucida Grande,Lucida Sans Unicode,Arial,Helvetica,sans-serif',
      },
    },

    plotOptions: {
      series: {
        animation: {
          duration: 1500,
        },
      },
    },

    xAxis: [
      { type: 'datetime' },
      {
        labels: {
          style: {
            color: '#808a9d',
            fontSize: '12px',
          },
        },
      },
    ],

    yAxis: {
      opposite: false,
      labels: {
        // eslint-disable-next-line no-template-curly-in-string
        format: '$ {value:.2f}',
        style: {
          color: '#808a9d',
          fontSize: '12px',
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
      valueDecimals: 2,
      formatter() {
        let s = '<b>' + Highcharts.dateFormat('%A, %B %e, %Y', this.x) + '</b>'

        this.points.forEach(point => {
          s += '<br/>Price: $' + point.y.toFixed(4)
        })

        return s
      },
    },

    scrollbar: {
      enabled: false,
    },

    rangeSelector: {
      inputEnabled: false,
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
                <div className='loading-wrapper'>
                  <SyncLoader color={'#2196F3'} loading={loading} size={20} />
                </div>
              ) : (
                <HighchartsReact
                  highcharts={Highcharts}
                  constructorType={'stockChart'}
                  options={chartOptions}
                />
              )}
            </div>
          </div>

          <div className='right-side'>
            <div className='converter-wrapper'>
              <div className='converter-content'>
                <div className='converter-crypto'>
                  <img
                    className='converter-img'
                    src='https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png'
                    alt=''
                  />
                  <div className='converter-name'>
                    <p className='symbol'>DOT</p>
                    <p className='name'>Polkadot</p>
                  </div>
                  <div className='converter-input'>
                    <input
                      type='number'
                      name=''
                      id=''
                      pattern='/^-?d+.?d*$/'
                      maxlength='8'
                      placeholder='0'
                    />
                  </div>
                </div>
                <div className='converter-currency'>
                  <img
                    className='converter-img'
                    src='https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg'
                    alt=''
                  />
                  <div className='converter-name'>
                    <p className='symbol'>USD</p>
                    <p className='name'>United States Dollar</p>
                  </div>
                  <div className='converter-input'>
                    <input
                      type='number'
                      name=''
                      id=''
                      pattern='/^-?d+.?d*$/'
                      maxlength='8'
                      placeholder='0'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='price-statistics-wrapper'>
              price statistics wrapper
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
