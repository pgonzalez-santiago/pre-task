import {
  initial,
  reducer,
  failed,
  request,
  success,
} from './cryptocurrencies'


describe('Cryptocurrencies list reducer', () => {
  it('Valid request action', () => {
    const requestCryptocurrencies = reducer(initial, request())

    expect(requestCryptocurrencies).toEqual({
      error:    null,
      fetching: true,
      list:     [],
    })
  })

  it('Valid failed action', () => {
    const failedCryptocurrencies = reducer(initial, failed('error'))

    expect(failedCryptocurrencies).toEqual({
      error:   'error',
      fetching: false,
      list:     [],
    })
  })

  it('Valid success action', () => {
    const successCryptocurrencies = reducer(initial, success([1, 2]))

    expect(successCryptocurrencies).toEqual({
      error:    null,
      fetching: false,
      list:     [1, 2],
    })
  })
})
