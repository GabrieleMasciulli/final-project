/* eslint-disable import/no-anonymous-default-export */
import Highcharts from 'highcharts/highstock'

const getOptions = data => {
  const options = {
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
        data: data.prices,
      },
    ],
  }

  return options
}

export default { getOptions }
