import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {Outlet} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Nav/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default App
