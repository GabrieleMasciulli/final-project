import cryptoService from '../services/Crypto'
import formatterService from '../services/formatStockData'

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_CRYPTOS':
      return action.coins

    case 'SET_CRYPTOS':
      return action.coins

    default:
      return state
  }
}

export const initializeCryptos = () => {
  return async dispatch => {
    const cryptos = await cryptoService.getInfo('market_cap_desc', 10, 1)
    const formattedCryptos = formatterService.formatHomepageTable(cryptos)

    dispatch({
      type: 'INIT_CRYPTOS',
      coins: formattedCryptos,
    })
  }
}

export const getCryptos = () => {
  return async (dispatch, getState) => {
    const { page, rows } = getState().pagination
    const cryptos = await cryptoService.getInfo('market_cap_desc', rows, page)
    const formattedCryptos = formatterService.formatHomepageTable(cryptos)

    dispatch({
      type: 'SET_CRYPTOS',
      coins: formattedCryptos,
    })
  }
}

export default reducer
