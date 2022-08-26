import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Cart from '../components/Cart/Cart'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Productos from '../components/Productos/Productos'
import Home from '../components/Home/Home'
import Navbar from "../components/Navbar/Navbar"
import Contacto from '../components/Contacto/Contacto'



const Rutas = () => {
  return (
    <BrowserRouter>
    <Navbar/> 
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/item-detail/:id" element={<ItemDetailContainer/>}/>
            <Route path='/categoria/:categoria' element={<Productos/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default Rutas