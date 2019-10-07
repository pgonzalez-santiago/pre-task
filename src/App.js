import React from 'react'

// Languages
import I18n from './assets/lang'

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <p>{ I18n.t('sampleText') }</p>
      </header>
    </div>
  )
}

export default App
