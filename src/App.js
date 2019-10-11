import React from 'react'
import { Provider as StoreProvider } from 'react-redux'

import store from './store'
import CryptocurrenciesList from './components/CryptocurrenciesList'

const App = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <CryptocurrenciesList />
      </div>
    </StoreProvider>
  )
}

export default App
