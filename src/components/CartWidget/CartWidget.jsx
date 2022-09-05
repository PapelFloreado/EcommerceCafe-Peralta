import React, {useContext} from "react"
import cart from "../../coffe-cart.svg"
import "./CartWidget.css"
import { NavLink } from 'react-router-dom'
import { GlobalContext } from "../../context/CartContext"
import  {motion, AnimatePresence}  from "framer-motion"



const CartWidget = ()=> {
    const {carritoCount, carrito} = useContext(GlobalContext)
    const isVisible = true
    return(
        <>
        
            {
                carrito.length >= 1 ?
                
                (<AnimatePresence isVisible >
                    {isVisible && (
                <NavLink to={"/cart"}>
                <motion.p   initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 1}}>
                <img src={cart} alt="cart" width={25}/>
                {carritoCount}
                </motion.p>
                </NavLink>
                )}
                </AnimatePresence>) : (<></>)
                       
            }
            </>
    )
}

  
    <motion.div
      
    />
  

export default CartWidget