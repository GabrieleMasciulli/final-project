const initialState = {
  rows: 20,
  page: 1,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
