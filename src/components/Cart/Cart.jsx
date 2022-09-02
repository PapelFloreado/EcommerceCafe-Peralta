import React from 'react'
import { useContext } from 'react'
import { Container } from 'react-bootstrap'
import "./Cart.css"
import {motion} from "framer-motion"
import CartItems from '../CartItems/CartItems'
import { GlobalContext } from '../../context/CartContext'


const Cart = () => {

  const {carrito, clear,precioFinal} = useContext(GlobalContext)
  

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
          </> 
          ) : 
          (<h1>Tu Carrito está vacío...</h1>)
        }
      </Container>
    </motion.div>
  )
}

export default Cart