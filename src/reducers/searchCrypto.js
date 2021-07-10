import searchService from '../services/search.service'

const set_query = 'SET_QUERY'
const set_results = 'SET_RESULTS'
const init_results = 'INIT_RESULTS'

const initial_state = {
  query: '',
  results: [],
}

const reducer = (state = initial_state, action) => {
  switch (action.type) {
    case set_query:
      return {
        ...state,
        query: action.query,
      }

    case init_results:
      return {
        ...state,
        results: action.results,
      }

    case set_results:
      const duplicates = new Set()

      const filteredResults = action.unfilteredResults.filter(result => {
        const duplicate = duplicates.has(result.coingecko_id)
        duplicates.add(result.coingecko_id)
        return !duplicate
      })

      return {
        ...state,
        results: filteredResults,
      }

    default:
      return state
  }
}

export const initResults = number => {
  return async dispatch => {
    const results = await searchService.getFirst(number)
    dispatch({
      type: init_results,
      results,
    })
  }
}

export const changeQuery = query => {
  return dispatch => {
    dispatch({ type: set_query, query })
  }
}

export const getResults = query => {
  return async dispatch => {
    const unfilteredResults = await searchService.getResults(query)

    dispatch({
      type: set_results,
      unfilteredResults,
    })
  }
}

export default reducer
