import { useState } from 'react'
import Signup from './Components/Signup'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Signin from './Components/Signin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Routes>
   <Route path="/" element={<Signup/>} />       {/* SignUp page */}
      <Route path="/signin" element={<Signin />} /> {/* SignIn page */}
            <Route path="/home" element={<Home />} /> {/* Home page */}

      </Routes>
     
    </div>

    </>
  )
}

export default App
