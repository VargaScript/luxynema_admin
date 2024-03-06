import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@material-tailwind/react";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Luxynema Admin</p>
      <Button>Button</Button>
    </>
  )
}

export default App
