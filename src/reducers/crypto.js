import cryptoService from '../services/Crypto'
import formatterService from '../services/formatStockData'

const initialState = {
  rows: 20,
  page: 1,
  coins: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_CRYPTOS':
      return action.data

    case 'SET_CRYPTOS':
      return action.data

    case 'SET_ROWS':
      return {
        ...state,
        rows: action.rows,
      }

    case 'SET_PAGE':
      return {
        ...state,
        page: action.page,
      }

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
      data: {
        rows: 20,
        page: 1,
        coins: formattedCryptos,
      },
    })
  }
}

export const getCryptos = () => {
  return async (dispatch, getState) => {
    const currentState = getState()
    const { page, rows } = currentState.cryptos
    const cryptos = await cryptoService.getInfo('market_cap_desc', rows, page)
    const formattedCryptos = formatterService.formatHomepageTable(cryptos)

    dispatch({
      type: 'SET_CRYPTOS',
      data: {
        rows,
        page,
        coins: formattedCryptos,
      },
    })
  }
}

export const changeRows = rows => {
  return async dispatch => {
    dispatch({
      type: 'SET_ROWS',
      rows,
    })
  }
}

export const changePage = page => {
  return async dispatch => {
    dispatch({
      type: 'SET_PAGE',
      page,
    })
  }
}

export default reducer
