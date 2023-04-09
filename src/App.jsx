import { useState } from 'react'
import './App.css'
import { Header } from './components/header'
import { Main } from './components/main'
import Context from './components/Context/Context'

function App() {

  const [tamanho, setTamanho] = useState(0)

  return (
    <Context.Provider value={{tamanho, setTamanho}}>
      <div className="App">
      <div className="main">
        <Header />
        <Main />
      </div>
    </div>
    </Context.Provider>
  )
}

export default App
