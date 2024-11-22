import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [bgColor, setbgColor] = useState("Red");
  let txtColor = "#f1f1f1";
  const root = document.getElementById("root");
  root.style.backgroundColor = bgColor;
  
  const bgRed = () => {
    setbgColor("red");
  };
  const bgGreen = () => {
    setbgColor("green");
  };

  const bgBlue = () => {
    setbgColor("blue");
  };

  const bgYellow = () => {
    setbgColor("yellow");
  };

  const bgBlack = () => {
    setbgColor("black");
  };

  return (
    <>
     <button onClick={bgRed}>Red</button>
     <button onClick={bgGreen}>Green</button>
     <button onClick={bgBlue}>Blue</button>
     <button onClick={bgYellow}>Yellow</button>
     <button onClick={bgBlack}>Black</button>
    </>
  )
}

export default App
