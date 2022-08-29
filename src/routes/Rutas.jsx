import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar2 from "../components/Navbar2/Navbar2"
import AnimatedRoutes from '../components/AnimatedRoutes/AnimatedRoutes'



const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar2/> 
        <AnimatedRoutes/>
    <Footer/>
    </BrowserRouter>
  )
}

export default Rutas