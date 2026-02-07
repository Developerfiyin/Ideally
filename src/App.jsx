import { useState } from 'react'
import Signup from './Components/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Signup/>
    </div>

    </>
  )
}

export default App
