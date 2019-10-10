import { all, takeLatest } from 'redux-saga/effects'

export default function * () {
  yield all([
    takeLatest(
      require('../reducers/cryptocurrencies').request.type,
      require('./cryptocurrencies').getCryptocurrencies
    ),
  ])
}
