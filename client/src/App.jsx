import { useState } from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login"
import Gigs from "./pages/Gigs"
import PaidGigs from "./pages/PaidGigs"
import Register from "./pages/Register"
import { GigContext } from './context/GigContext';
import { UserContext } from './context/UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
const [user, setUser] = useState([])
const [gigs, setGigs] = useState([])
// לעשות קונטקסט ליוזר
  return (
        
    <div className="App" >
      <BrowserRouter>
       <UserContext.Provider value={{ user, setUser }}>
       <GigContext.Provider value={{ gigs, setGigs }}>
       <Routes>
          <Route path="/" element={<Login user = {[user, setUser]} gigs={[gigs, setGigs]}/>}/>
          <Route path="/gigs" element={<Gigs user = {[user, setUser]} gigs={[gigs, setGigs]}/>}/>
          <Route path="/paidgigs" element={<PaidGigs user = {[user, setUser]} gigs={[gigs, setGigs]}/>}/>
          
        </Routes>
        </GigContext.Provider>
        </UserContext.Provider>
        <Routes>
          <Route path="/register" element={<Register />}/>
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App
