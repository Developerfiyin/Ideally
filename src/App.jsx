import { useState } from "react";
import Signup from "./Components/Signup";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Dash from "./Components/Dash";
import { IdeaGrid } from "./Components/idea";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} /> {/* SignUp page */}
          <Route path="/signin" element={<Signin />} /> {/* SignIn page */}
          <Route path="/home" element={<Home />} /> {/* Home page */}
          <Route path="/dash" element={<Dash />} /> {/* TEMPOARY HOME PAGE */}
          <Route path="/idea" element={<IdeaGrid />} />
          <Route path="/ai" element={<sendToAI />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
