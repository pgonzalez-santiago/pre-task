import { put } from 'redux-saga/effects'
import api from '../../services/api'

import {
  success,
  failed,
} from '../../store/reducers/cryptocurrencies'

export function * getCryptocurrencies ({ payload: { page, limit } }) {
  const response = yield api.get(`cryptocurrency/listings/latest?start=${page}&limit=${limit}`)

  if (response.ok) {
    // call repository contributors success action
    yield put(success(response.data.data))
  } else {
    // call repository contributors failure action
    yield put(failed())
  }
}
