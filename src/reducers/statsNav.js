import cryptoService from '../services/Crypto'
import formatService from '../services/formatStockData'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'INIT_GLOBAL_STATS':
      return action.data

    default:
      return state
  }
}

export const initializeGlobalStats = () => {
  return async dispatch => {
    const stats = await cryptoService.getGlobalStats()
    const formattedStats = formatService.formatGlobalStats(stats)
    dispatch({
      type: 'INIT_GLOBAL_STATS',
      data: formattedStats,
    })
  }
}

export default reducer
