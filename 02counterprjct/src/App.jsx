import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;

  const [counter, setCounter]=useState(0)
  const addvalue = () =>{
    setCounter(counter+1);
    
  }
  const removevalue = () =>{
    setCounter(counter-1);  
  }

  return (
    <>
      <h1>Nupur</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addvalue}>Add Value</button>
      <br/>
      <br/>
      <button
      onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
