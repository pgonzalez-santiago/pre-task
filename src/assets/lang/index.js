import i18n from 'i18n-js'

import en from './en.json'
import es from './es.json'

export const DEFAULT_LANG = 'en'

i18n.locale = DEFAULT_LANG
i18n.translations = { en, es }

export default i18n
