import {
  initial,
  reducer,
  set
} from './language'


describe('language reducer', () => {
  it('Valid set action', () => {
    const setLang = reducer(initial, set('en'))

    expect(setLang).toEqual('en')
  })
})
