import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import store from './store'
import CryptocurrenciesList from './components/CryptocurrenciesList'
import LanguageSelector from './components/LanguageSelector'

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <LanguageSelector />
        <CryptocurrenciesList />
      </div>
    </StoreProvider>
  )
}

export default App
