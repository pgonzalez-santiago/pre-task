import autodux, { id } from 'autodux'
import I18n, { DEFAULT_LANG } from '../../assets/lang'

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
    set: (state, lang) => {
      I18n.locale = lang

      return lang
    }, // eslint-disable-line no-unused-vars
  },

  // The initial value of your reducer state
  initial: DEFAULT_LANG,

  // No need to select the state slice -- it's done for you.
  selectors: {
    getCurrent: id,
  },

  // the slice of state your reducer controls
  slice: 'lang',
})
