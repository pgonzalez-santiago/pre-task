import { combineReducers } from 'redux'

export const reducers = {
  [require('./language').slice]: require('./language').reducer,
}

export default combineReducers(reducers)
