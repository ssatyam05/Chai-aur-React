import { useState } from 'react'
import viteLogo from '/vite.svg'
import Chai from "./Chai.jsx"

function App() {
  let username = "Chai aur code"
  let loginId = "ssatyam05"

  return (
    <>
    <Chai/>
    <h2>Secand element  username: {username}, loginId: {loginId}</h2>
    </>
  )
}

export default App
