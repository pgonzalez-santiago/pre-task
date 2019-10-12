import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import styled from 'styled-components'

import store from './store'
import CryptocurrenciesList from './components/CryptocurrenciesList'
import LanguageSelector from './components/LanguageSelector'
import Text from './components/Text'

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <AppTitle>appTitle</AppTitle>
        <LanguageSelector />
        <CryptocurrenciesList />
      </div>
    </StoreProvider>
  )
}

const AppTitle = styled(Text)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  padding: 15px;
`

export default App
