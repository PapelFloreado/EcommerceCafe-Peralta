import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { motion } from "framer-motion"
const Productos = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.5,
    delay: 0,
    ease: "easeInOut"
    }}>
      <ItemListContainer />
    </motion.div>
  )
}

export default Productos