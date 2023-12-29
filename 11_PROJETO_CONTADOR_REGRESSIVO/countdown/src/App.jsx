import { useContext, useState } from 'react'
import './App.css'
import Home from '../routes/Home'
import { Outlet } from 'react-router-dom'
import { CountdownContext } from '../context/CountdownContext'

import NewYear from './assets/images-1-1.jpeg'

function App() {
  const { event } = useContext(CountdownContext)

  let eventImage = null;

  if (event) eventImage = event.image;

  return (
    <div className='App' style={
      eventImage
        ? { backgroundImage: `url(${eventImage})`}
        : { backgroundImage: `url(${NewYear})` }}>
      <div className="container">
        <Outlet />
      </div>
    </ div>
  )
}

export default App
