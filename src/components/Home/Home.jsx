import React from 'react'
import Carousel from "../Carousel/Carousel"
import { motion } from "framer-motion"
 

const Home = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.2,
    delay: 0,
    ease: 'linear'
    }}
    >
      <Carousel/>
    </motion.div>
  )
}

export default Home