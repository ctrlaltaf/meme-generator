import { useState } from 'react'
import './App.css'
import Header from "../src/components/header"
import Meme from './components/meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Meme />
    </div>
  )
}

export default App
