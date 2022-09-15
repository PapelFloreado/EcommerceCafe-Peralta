import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Navbar from "../components/Navbar/Navbar"
import AnimatedRoutes from '../components/AnimatedRoutes/AnimatedRoutes'



const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/> 
        <AnimatedRoutes/>
    <Footer/>
    </BrowserRouter>
  )
}

export default Rutas