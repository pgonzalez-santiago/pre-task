import { put } from 'redux-saga/effects'
import api from '../../services/api'

import {
  success,
  failed,
} from '../../store/reducers/cryptocurrencies'

import I18n from '../../assets/lang'

export function * getCryptocurrencies ({ payload: { page, limit, sort } }) {
  const response = yield api.get(`cryptocurrency/listings/latest?start=${page}&limit=${limit}&sort=${sort}&sort_dir=asc`)

  if (response.ok) {
    yield put(success(response.data.data))
  } else {
    if (!response.data) {
      return yield put(failed(I18n.t('corsError')))
    }
    if (!response.data.status) {
      yield put(failed(I18n.t('commonError')))
    } else {
      yield put(failed(response.data.status.error_message))
    }
  }
}
