/* Global imports */
import React from 'react'
import { string, number, oneOfType, bool } from 'prop-types'
import { connect } from 'react-redux'

/* Local imports */
import I18n from '../assets/lang'
import { getCurrent } from '../store/reducers/language'

/* Component definition */
export const Text = ({ currentLang, className, translate, children: value }) => {
  return (
    <span className={className} key={currentLang}>
      { getValue(translate, value) }
    </span>
  )
}
/* PropTypes */
Text.propTypes = {
  children:    oneOfType([string, number]),
  className:   string,
  currentLang: string.isRequired,
  translate:   bool,
}

Text.defaultProps = {
  defaultValue: '[...]',
  translate:    true,
}

/* Local utility functions */
export const getValue = (shouldTranslate, value) => {
  return shouldTranslate ? I18n.t(value) : value
}

/* Styles */

const mapStateToProps = state => ({
  currentLang: getCurrent(state),
})

export default connect(mapStateToProps)(Text)
