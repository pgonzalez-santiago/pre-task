import autodux, { id } from 'autodux'

export const {
  reducer,
  initial,
  slice,
  actions: {
    set,
  },
  selectors: {
    getCurrent,
  },
} = autodux({
  // No need to implement switching logic -- it's
  // done for you.
  actions: {
    set: (state, lang) => lang, // eslint-disable-line no-unused-vars
  },

  // The initial value of your reducer state
  initial: 'es',

  // No need to select the state slice -- it's done for you.
  selectors: {
    getCurrent: id,
  },

  // the slice of state your reducer controls
  slice: 'lang',
})
