/* eslint-disable import/no-anonymous-default-export */
const formatData = (type, value) => {
  if (value === null) return '?'

  let result = ``

  if (type === 'number') {
    const number = Math.abs(value)
    const formattedNumber = formatDecimals(number)

    result = `${formattedNumber}`
  } else if (type === '$') {
    const number = Math.abs(value)
    const formattedNumber = formatDecimals(number)

    result = `$${formattedNumber}`
  } else if (type === 'profit') {
    const number = Math.abs(value)
    const formattedNumber = formatDecimals(number)

    result = value > 0 ? `+ $${formattedNumber}` : `- $${formattedNumber}`
  } else if (type === '%') {
    result = `${Math.abs(value.toFixed(2))} %`
  }

  return result
}

const formatStats = (type, value) => {
  let result = ``
  if (type === 'volume' || type === 'marketcap') {
    result = `$${Math.trunc(value).toLocaleString()}`
  }
  if (type === 'market_dominance') {
    result = value.toFixed(2)
  }
  return result
}

const getTrend = value => {
  return value >= 0 ? 'text-green' : 'text-red'
}

const formatDecimals = number => {
  if (number < 1) {
    const decimal_zeros = -Math.floor(Math.log10(number) + 1)
    const fixed = decimal_zeros + 4
    return number.toFixed(fixed)
  } else {
    return number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
}

export default {
  formatData,
  getTrend,
  formatStats,
  formatDecimals,
}
