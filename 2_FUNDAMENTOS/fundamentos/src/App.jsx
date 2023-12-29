import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - Importando componentes
import FirstComponent from "./components/FirstComponent"

// 4 - Template Expression
import TemplateExpression from "./components/TemplateExpression"
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/*3 - Comentário JSX*/}
      <h1>Fundamentos do React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpression></TemplateExpression>
      <MyComponent></MyComponent>
      <Events></Events>
    </div>
  )
}

export default App
