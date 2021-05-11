/* eslint-disable import/no-anonymous-default-export */
const formatData = (type, value) => {
  let result = ``
  if (type === 'number') {
    result = value !== null ? value.toFixed(2) : ''
  } else if (type === '$') {
    result = value !== null ? `$${value.toLocaleString()}` : '?'
  } else if (type === '%') {
    result = value !== null ? `${Math.abs(value.toFixed(2))} %` : '?'
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

export default { formatData, getTrend, formatStats }
