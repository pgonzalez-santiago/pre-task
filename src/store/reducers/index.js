import { combineReducers } from 'redux'

export const reducers = {
  [require('./language').slice]:         require('./language').reducer,
  [require('./cryptocurrencies').slice]: require('./cryptocurrencies').reducer,
}

export default combineReducers(reducers)
