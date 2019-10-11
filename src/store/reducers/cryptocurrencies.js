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
    getFetching,
    getError,
  },
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    failed:  (state, error) => ({ ...state, error: error, fetching: false }),
    request: (state) => ({ ...state, error: null, fetching: true }),
    success: (state, list) => ({ ...state, error: null, fetching: false, list }),
  },

  // The initial value of your reducer state
  initial: {
    error:    null,
    fetching: false,
    list:     [],
  },

  // Custom selectors
  selectors: {
  },

  // the slice(name) of state your reducer controls
  slice: 'cryptocurrencies',
})
