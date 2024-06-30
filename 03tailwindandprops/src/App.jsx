import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from"./components/Card"

function App() {
  const [count, setCount] = useState(0)
let myObj={
  username:"Nupur",
  age:20
}
let newArr=[1,2,3,4,5]
  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Taiwind Test</h1>
      <Card channel="chaiaurcode" someObj={myObj} someArr={newArr}/>
      <Card username="Nupur" btn="Click Me"/>
      <Card username="Niharika" btn="Visit Me"/>
      <Card username="Neha"/>
    </>
  )
}

export default App
