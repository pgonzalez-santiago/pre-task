import React from 'react'
import ConnectedLanguageSelector, { LanguageSelector } from './LanguageSelector'
import { mount, shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { INITIAL_STORE } from '../../test/mocks.js'

const changeLangMock = jest.fn()

/* Material-UI */
import Switch from '@material-ui/core/Switch'

describe('Language Selector component', () => {

  it('renders correctly with error', () => {
    const wrapper = shallow(
      <LanguageSelector
        changeLang={changeLangMock}
        currentLang='en'
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('changeLang is called with es', () => {
    const wrapper = shallow(
      <LanguageSelector
        changeLang={changeLangMock}
        currentLang='en'
      />
    )

    wrapper.find(Switch).at(0).props().onChange()

    expect(changeLangMock).toBeCalledWith('es')
  })

  it('changeLang is called with en', () => {
    const wrapper = shallow(
      <LanguageSelector
        changeLang={changeLangMock}
        currentLang='es'
      />
    )

    wrapper.find(Switch).at(0).props().onChange()

    expect(changeLangMock).toBeCalledWith('en')
  })
})

describe('ConnectedLanguageSelector', () => {
  const mockStore = configureStore()
  let wrapper
  let store

  store = mockStore(INITIAL_STORE)

  wrapper = mount(
      <Provider store={store}>
        <ConnectedLanguageSelector />
      </Provider>
  )

  it('Stays the same as before with id and application', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('Actions called properly', () => {
    const ChildComponent = wrapper.find(LanguageSelector)
    expect(ChildComponent.props().changeLang('en')).toEqual({ "payload": "en", "type": "lang/set" })
  })
})
