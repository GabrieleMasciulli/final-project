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
    const rawStats = await cryptoService.getGlobalStats()
    const formattedStats = formatService.formatGlobalStats(rawStats)

    dispatch({
      type: 'INIT_GLOBAL_STATS',
      data: {
        formatted: formattedStats,
        raw: rawStats,
      },
    })
  }
}

export default reducer
