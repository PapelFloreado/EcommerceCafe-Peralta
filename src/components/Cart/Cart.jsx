import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import "./Cart.css"
import {motion} from "framer-motion"
import CartItems from '../CartItems/CartItems'
import { GlobalContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import FormCart from '../FormCart/FormCart'


const Cart = () => {

  const {carrito, clear,precioFinal} = useContext(GlobalContext)
  

  return (
    <motion.div 
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.2,
    delay: 0,
    ease: "easeInOut"
    }}>
      <Container className="cart">
        {
          carrito.length > 0 ? 
          (<>
          
          <h2 className="text-cart pt-5">Tu Carrito</h2>
          <div>
            {carrito.map((item,index)=><CartItems key={index} pictureUrl={item.pictureUrl} price={item.price} item={item} quantity={item.quantity} id={item.id} title={item.title}/>)}
          </div>
          <div className='d-flex justify-content-between my-5'>
          <button className='btn btn-clear' onClick={clear}>Vaciar Carrito</button>
            <div className=" align-items-center d-flex">
              <h2 className="">Precio Final: ${precioFinal}</h2>
            </div>
          </div>
          <FormCart/>
          </> 
          ) : 
          (<>
            <h1>Tu Carrito está vacío...</h1>
            <Link className=' d-flex align-items-center justify-content-center pt-5' to={"/productos"}>
              <motion.button whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 50 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}} className='button btn d-flex fs-2 p-3'>Volver a la tienda</motion.button>
            </Link>
           </>)
        }
      </Container>
    </motion.div>
  )
}

export default Cart