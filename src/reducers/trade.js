import cryptoService from '../services/Crypto'
import tradeValidationService from '../services/tradeValidation'
import portfolioService from '../services/portfolio.service'

const show_trade_panel = 'SHOW_TRADE_PANEL'
const set_coin = 'SET_COIN'
const reset_state = 'RESET_STATE'
const set_trade_type = 'SET_TRADE_TYPE'
const set_quantity = 'SET_QUANTITY'
const set_date = 'SET_DATE'
const set_price = 'SET_PRICE'
const update_total = 'UPDATE_TOTAL'
const validation_failure = 'TRADE_VALIDATION_FAILURE'
const trade_success = 'TRADE_SUCCESS'
const trade_failure = 'TRADE_FAILURE'

const initial_state = {
  isTrading: false,
  selectedCoin: null,
  tradeSuccess: false,
  successMessage: '',
  failureMessage: '',
  tradeType: 'buy',
  sharePrice: '',
  quantity: '',
  date: '',
  timestamp: '',
  purchaseTotal: '0',
  errors: {
    quantity: '',
    sharePrice: '',
    date: '',
    timestamp: '',
  },
}

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case show_trade_panel:
      return {
        ...state,
        isTrading: true,
      }

    case set_coin:
      return {
        ...state,
        selectedCoin: action.coin,
      }

    case reset_state:
      return initial_state

    case set_trade_type:
      return {
        ...state,
        tradeType: action.tradeType,
      }

    case set_quantity:
      return {
        ...state,
        quantity: action.quantity,
      }

    case set_price:
      return {
        ...state,
        sharePrice: action.price,
      }

    case set_date:
      const timestamp = +new Date(action.date)

      return {
        ...state,
        date: action.date,
        timestamp,
      }

    case update_total:
      return {
        ...state,
        purchaseTotal: state.quantity * state.sharePrice,
      }

    case validation_failure:
      return {
        ...state,
        errors: {
          sharePrice:
            tradeValidationService.validatePrice(state.sharePrice) ===
              'invalid' && 'Enter a valid price.',
          quantity:
            tradeValidationService.validateQuantity(state.quantity) ===
              'invalid' && 'Enter a valid quantity.',
          date:
            tradeValidationService.validateDate(state.date) === 'invalid' &&
            'Enter a valid date.',
          timestamp:
            tradeValidationService.validateTimestamp(state.timestamp) ===
              'invalid' && "Can't trade in the future 🔮 !",
        },
      }

    case trade_success:
      return {
        ...state,
        tradeSuccess: true,
        successMessage: action.message,
      }

    case trade_failure:
      const tradeError = action.error
      const tradeErrorMessage =
        (tradeError.response &&
          tradeError.response.data &&
          tradeError.response.data.message) ||
        tradeError.message ||
        tradeError.toString()
      return {
        ...state,
        failureMessage: tradeErrorMessage,
      }

    default:
      return state
  }
}

export const showTradePanel = () => dispatch =>
  dispatch({ type: show_trade_panel })

export const hideTradePanel = () => dispatch => dispatch({ type: reset_state })

export const reset = () => dispatch => dispatch({ type: reset_state })

export const setCoin = coin => dispatch => dispatch({ type: set_coin, coin })

export const changeTradeType = tradeType => dispatch =>
  dispatch({ type: set_trade_type, tradeType })

export const setQuantity = quantity => dispatch => {
  dispatch({ type: set_quantity, quantity })
  dispatch({ type: update_total })
}

export const setPrice = price => dispatch => {
  dispatch({ type: set_price, price })
  dispatch({ type: update_total })
}

export const setDate = date => dispatch => {
  dispatch({ type: set_date, date })
}

export const initializePrice = id => {
  return async dispatch => {
    const price = await cryptoService.getSimplePrice(id)

    dispatch({
      type: set_price,
      price,
    })
  }
}

export const addTrade = (sharePrice, quantity, date, timestamp) => {
  return async (dispatch, getState) => {
    const validationResults = tradeValidationService.validateTrade(
      quantity,
      sharePrice,
      date,
      timestamp
    )

    if (validationResults === 'valid') {
      const {
        auth: { user },
        trade: { selectedCoin, tradeType },
      } = getState()

      try {
        const transaction = {
          user_id: user.id,
          type: 'long',
          coin_id: selectedCoin,
          transaction: {
            type: tradeType,
            date: timestamp,
            quantity: quantity,
            price: sharePrice,
          },
        }
        const { message } = await portfolioService.postTransaction(transaction)

        dispatch({
          type: trade_success,
          message,
        })

        setTimeout(() => {
          dispatch({ type: reset_state })
        }, 3000)
      } catch (error) {
        dispatch({ type: trade_failure, error })

        setTimeout(() => {
          dispatch({ type: reset_state })
        }, 5000)
      }
    } else {
      dispatch({
        type: validation_failure,
      })
    }
  }
}

export default reducer
