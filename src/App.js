import React from "react"
import Provider from './Pages/GlobalStates/Provider'
import DragonList from './Pages/DragonList/DragonList'

function App() {

  return (
    <Provider>
      <DragonPage />
    </Provider>
  )

}
export default App
