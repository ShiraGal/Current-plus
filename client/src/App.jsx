import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login"
import Gigs from "./pages/Gigs"
import PaidGigs from "./pages/PaidGigs"
import Register from "./pages/Register"
import { ApiContext } from './context/ApiContext';
import { UserContext } from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
const [user, setUser] = useState([])
// לעשות קונטקסט ליוזר
  return (
        
    <div className="App" >
      <BrowserRouter>
       <UserContext.Provider value={{ user, setUser }}>
       <Routes>
          <Route path="/" element={<Login user = {[user, setUser]}/>}/>
          <Route path="/gigs" element={<Gigs user = {[user, setUser]}/>}/>
          <Route path="/paidgigs" element={<PaidGigs user = {[user, setUser]}/>}/>
          
        </Routes>
        </UserContext.Provider>
        <Routes>
          <Route path="/register" element={<Register />}/>
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App
