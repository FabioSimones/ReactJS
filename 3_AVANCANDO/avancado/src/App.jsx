 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//2 - Imagem em assets
import night from './assets/city.jpg'

//3 - useStates
import Data from './components/Data'

// 4 - Renderização de lista
import List from './components/List'

//7 - Render condicional
import ConditionalRender from './components/ConditionalRender'

//8 - Props
import ShowUserName from './components/ShowUserName'

//9 - Desestruturando props
import CarDetails from './components/CarDetails'

//11 Renderização de listas com componentes
const cars = [
{ id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
{ id: 2, brand: "KIA", color: "Branco", km: 200000 },
{ id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

//12 - Fragments
import Fragments from './components/Fragments'

//13 - Children
import Container from './components/Container'

// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'

//15 State lift

import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

function App() {
  const [count, setCount] = useState(0)

  //14 - Função em prop
  function showMessage(){
    console.log("Evento do componente Pai")
  }

  //15 - State Lift
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
  <div className="App" style={{paddingBottom: "500px"}}>
    <h1>Avançando em React</h1>
    {/*1 - Imagem em public*/}
    <img src="../public/img1.jpg" alt="Alguma imagem" />

    {/*2 - Imagem em assets*/}
    <img src={night} alt="Outra imagem" />

    {/*3 - useSates*/}
    <Data />

    {/*4 - Renderização lista*/}
    <List />

    {/*7 - Conditional Render*/}
    <ConditionalRender/>

    {/* 8 - Props*/}
    <ShowUserName name = "Fábio"/>

    {/*9 - Desestruturando props*/}
    <CarDetails brand="Chevrolet" km={19000} color="Preto"/>

    {/*10 - Reaproveitamento de componentes*/}
    <CarDetails brand="VW" km={129000} color="Azul"/>
    <CarDetails brand="Audi" km={0} color="Vermelho"/>

    {/*11 - Renderização de lista*/}
    {cars.map((car) => (
      <CarDetails 
      key = {car.id} 
      brand = {car.brand} 
      color = {car.color} 
      km = {car.km}
      />
    ))
    }

    {/*12 - Fragments*/}
    <Fragments/>

    {/*13 - Children*/}
    <Container>
      <p>Alguma coisa</p>
    </Container>

    {/*14 - Função em prop*/}
    <ExecuteFunction myFunction={showMessage}/>

    {/*15 - State Lift*/}
    <Message msg={message}/>
    <ChangeMessage handleMessage={handleMessage}/>

  </div>


  )
}

export default App
