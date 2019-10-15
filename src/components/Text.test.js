import React from 'react'
import { Text } from './Text'
import { shallow } from 'enzyme'

describe('Text component', () => {

  it('renders correctly with translate', () => {
    const wrapper = shallow(
      <Text
        currentLang={'en'}
      >
        appTitle
      </Text>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly without translate', () => {
    const wrapper = shallow(
      <Text
        currentLang={'en'}
        translate={false}
      >
        Test
      </Text>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
