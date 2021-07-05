import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import cryptoReducer from './reducers/crypto'
import statsNavbarReducer from './reducers/statsNav'
import paginationReducer from './reducers/pagination'
import authReducer from './reducers/authentication'

const reducer = combineReducers({
  globalStats: statsNavbarReducer,
  cryptos: cryptoReducer,
  pagination: paginationReducer,
  auth: authReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
