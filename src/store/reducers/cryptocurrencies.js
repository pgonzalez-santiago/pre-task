import autodux from 'autodux'
export const {
  reducer,
  initial,
  slice,
  actions: {
    failed,
    request,
    success,
  },
  selectors: {
    getList,
  },
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failed:  (state) => ({ ...state, error: true, fetching: false }),
    request: (state) => ({ ...state, error: false, fetching: true }),
    success: (state, list) => ({ ...state, error: false, fetching: false, list }),
  },

  // The initial value of your reducer state
  initial: {
    error:    false,
    fetching: false,
    list:     [],
  },

  // Custom selectors
  selectors: {
  },

  // the slice(name) of state your reducer controls
  slice: 'cryptocurrencies',
})
