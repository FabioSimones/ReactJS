import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'

//5- Link entre páginas
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Navbar></Navbar>
      <SearchForm/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
