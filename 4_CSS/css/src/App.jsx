import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//2 - Css de componente
import MyComponent from './components/MyComponent'

//6 - CSS Module
import Title from './components/Title'

function App() {
  //4 - inline style dinâmico 
  const n = 15
  // 5 -Classe dinâmica
  const redTitle = true
  const [count, setCount] = useState(0)

  return (
    
    <div className='App'>
      {/*1 - Css global*/}
      <h1>Css no react</h1>

      {/*2 - css de componente*/}
      <MyComponent />
      <p>Pegou o css do componente</p>

      {/*3 - Inline style*/}
      <p style={{color: "red", borderTop: "2rem solid", padding: "2rem"}}>Este elemento tem estilo inline</p>

      {/*4 - inline style dinâmico*/}
      <h2 style={n > 10 ? {color: "purple"}: {color: "magenta"}}>
        CSS dinâmico
      </h2>
      <h2 style={n > 20 ? {color: "purple"}: {color: "magenta"}}>
        CSS dinâmico
      </h2>

      {/*5 - Classe dinâmica*/}
      <h2 className={redTitle? "red-title" : "title"}>
        Este título vai ter uma classe
      </h2>

      {/*6 - CSS Module*/}
      <Title></Title>
    </div>
    
  )
}

export default App
