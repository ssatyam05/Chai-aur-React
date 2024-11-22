import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 5;

  const addValue = () => {
    if(counter == 20){
      alert("Value can not be greater than 20!")
      return false;
    }
    setCounter(counter+1)
  }

  const removeValue = () => {
    if(counter == 0){
      alert("Value can not be 0")
      return false;
    }
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
