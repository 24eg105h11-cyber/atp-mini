import React from 'react'
import Count from './components/Count'
import ContextProvider from './context/ContextProvider'

function App() {
  return (
    <ContextProvider>
      <div className="grid grid-cols-2 gap-4 p-4">
        <Count />
        <Count />
        <Count />
        <Count />
      </div>
    </ContextProvider>
  )
}

export default App