import React, {useState} from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { motion } from "framer-motion"
import { Link} from "react-router-dom"
import { useContext } from 'react';
import { GlobalContext } from '../../context/CartContext';


const ItemDetail = ({item}) => {

const {addItem, isInCart} = useContext(GlobalContext)
  
const {id, title, price, description, pictureUrl, altImg,stock} = item
const [counter, setCounter] = useState(0)

function onAdd(quantity){
  setCounter(quantity)
  addItem(item, quantity)
  
}


  return (
    <motion.div
    initial={{ opacity: 0, scale: 1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
    duration: 1.2,
    delay: 0,
    ease: 'linear'
    }}>
      <Container className="item-detail pb-5">
        <div className="itemCard justify-content-center row">
            <img className='img-detail p-5 col-lg-8 col-md-12' alt={altImg} src={pictureUrl}></img>
          <div className="column px-5 col-lg-4 col-md-12">
            <h1 className='item-title'>{title}</h1>
            <p className="item-description fs-5">{description}</p>
            <p className='item-description fs-5'>Disponible: {stock}</p>
            <p className='item-description fs-5'>Precio: ${price}</p>
            { stock === 0 ? (
            <Link to="/productos">
              <div className='button btn fs-4'>Lo sentimos, en este momento no tenemos stock...</div>
            </Link>):
            (isInCart(id) || counter ? 
              (
                <div> 
                  <Link to="/productos">
                  <button className='btn mb-3 button btn-compra'>Seguir comprando</button> 
                  </Link>
                  <Link to="/cart">
                    <button className='btn button btn-compra'>Finalizar compra</button> 
                  </Link>
                </div>
              ) :
              (<ItemCount item={item} stock={stock} initial={1} onAdd={onAdd}/>))
            }
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default ItemDetail