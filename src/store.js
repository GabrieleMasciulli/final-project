import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import cryptoReducer from './reducers/crypto'
import statsNavbarReducer from './reducers/statsNav'

const reducer = combineReducers({
  globalStats: statsNavbarReducer,
  cryptos: cryptoReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
