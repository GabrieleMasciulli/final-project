/* eslint-disable import/no-anonymous-default-export */
const formatData = (type, value) => {
  let result = ``
  if (type === 'number') {
    result = value !== null ? value : ''
  } else if (type === '$') {
    result = value !== null ? `$${value.toLocaleString()}` : '?'
  } else if (type === '%') {
    result = value !== null ? `${Math.abs(value.toFixed(2))} %` : '?'
  }
  return result
}

const getTrend = value => {
  return value >= 0 ? 'text-green' : 'text-red'
}

export default { formatData, getTrend }
