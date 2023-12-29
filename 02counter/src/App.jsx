import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15;

  const addValue = () => {
    counter = counter+1;
    setCounter(counter)
    console.log("clicked", counter);
  }

  const decreaseValue = () => {
    counter = counter-1;
    setCounter(counter);
    console.log("clicked", counter)
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value {counter}</h2>

    <button onClick={addValue}>Increase Value {counter}</button>
    <br></br>
    <br></br>
    <button onClick={decreaseValue}>Decrease Value {counter}</button>
    </>
  )
}

export default App
