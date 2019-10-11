/* Global imports */
import React, { useCallback } from 'react'
import { func, string } from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

/* Material-UI */
import Switch from '@material-ui/core/Switch'

/* Local imports */
import { getCurrent, set } from '../store/reducers/language'
import Text from './Text'

/* Component definition */
const LanguageSelector = ({ changeLang, currentLang }) => {
  const handleLangChange = useCallback(
    () => {
      changeLang(currentLang === 'en' ? 'es' : 'en')
    },
    [changeLang, currentLang]
  )

  return (
    <Container>
      <Text>spanish</Text>
      <Switch
        defaultChecked
        value="checkedF"
        color="default"
        onChange={handleLangChange}
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
      <Text>english</Text>
    </Container>
  )
}

/* PropTypes */
LanguageSelector.propTypes = {
  changeLang:  func.isRequired,
  currentLang: string.isRequired,
}
LanguageSelector.defaultProps = {}

/* Local utility functions */

/* Styles */

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px;
`

const mapStateToProps = (state) => {
  return {
    currentLang: getCurrent(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLang: (lang) => dispatch(set(lang)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
