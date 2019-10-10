import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

// Languages
import I18n from './assets/lang'

import store from './store'
import CryptocurrenciesList from './components/CryptocurrenciesList'

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <header className="App-header">
          <p>{ I18n.t('sampleText') }</p>
        </header>
        <CryptocurrenciesList />
      </div>
    </StoreProvider>
  )
}

export default App
