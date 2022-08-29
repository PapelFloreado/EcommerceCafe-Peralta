import React from 'react'
import { Container } from 'react-bootstrap'
import "./Cart.css"
import {motion} from "framer-motion"

const Cart = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.2,
    delay: 0,
    ease: 'linear'
    }}>
      <Container className="cart">
        <h1>Tu Carrito</h1>
      </Container>
    </motion.div>
  )
}

export default Cart