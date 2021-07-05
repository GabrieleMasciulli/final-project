const initialState = {
  rows: 20,
  page: 1,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ROWS':
      const pageCount = Math.ceil(action.data.crypto_count / state.rows)
      return {
        ...state,
        rows: action.data.rows,
        pageCount,
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

export const changeRows = rows => {
  return async (dispatch, getState) => {
    const currentState = getState()
    dispatch({
      type: 'SET_ROWS',
      data: {
        rows,
        crypto_count: currentState.globalStats.active_cryptocurrencies,
      },
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
