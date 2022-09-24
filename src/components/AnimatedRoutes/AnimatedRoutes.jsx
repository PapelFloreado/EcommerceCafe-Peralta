import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import Productos from '../Productos/Productos'
import Home from '../Home/Home'
import OrderListContainer from "../OrderListContainer/OrderListContainer"
import {AnimatePresence} from "framer-motion"




const AnimatedRoutes = () => {

const location = useLocation()

  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/item-detail/:id" element={<ItemDetailContainer/>}/>
                <Route path='/categoria/:categoria' element={<Productos/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="/ordenes" element={<OrderListContainer/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes