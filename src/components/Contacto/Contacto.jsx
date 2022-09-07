import React from 'react'
import ContactForm from "../ContactForm/ContactForm"
import { motion } from "framer-motion"

const Contacto = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.5,
    delay: 0,
    ease: "easeInOut"
    }}>
      <ContactForm/>
    </motion.div>
  )
}

export default Contacto