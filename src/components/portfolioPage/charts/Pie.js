import React from 'react'
import Chart from 'react-apexcharts'

const Pie = () => {
  const options = {
    chartOptions: {
      labels: ['ETH', 'BTC', 'SHIB', 'ADA'],
      chart: {
        toolbar: { show: true },
      },
      fill: {
        pattern: {
          strokeWidth: 10,
        },
      },
      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val.toFixed(2) + '%'
        },
        dropShadow: {},
      },

      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true,
                color: '#909090',
                fontSize: '12px',
                fontWeight: 100,
                formatter: function (symbol) {
                  return symbol + ' Total'
                },
              },
              value: {
                show: true,
                color: '#343434',
                fontSize: '16px',
                fontWeight: 600,
                offsetY: 3,
                formatter: function (holdings) {
                  return `$${holdings}`
                },
              },
            },
          },
        },
      },

      stroke: {
        show: false,
      },

      tooltip: {
        enabled: false,
      },

      legend: {
        show: true,
        position: 'bottom',
        fontSize: '12px',
        onItemClick: {
          toggleDataSeries: false,
        },
        onItemHover: {
          highlightDataSeries: false,
        },
        markers: {
          width: 8,
          height: 8,
        },
        itemMargin: {
          horizontal: 30,
          vertical: 5,
        },
        formatter: (symbol, options) => {
          //   const holding = options.w.config.series[indexInSeries]
          const indexInSeries = options.seriesIndex
          const piePercentage =
            options.w.globals.seriesPercent[indexInSeries][0]

          return `${symbol} <span>${piePercentage.toFixed(2)}%</span>`
        },
      },
    },

    series: [318.36, 360.0, 77, 81.34],
  }

  return (
    <div className='donut'>
      <Chart
        options={options.chartOptions}
        series={options.series}
        type='donut'
        width='340'
      />
    </div>
  )
}

export default Pie
