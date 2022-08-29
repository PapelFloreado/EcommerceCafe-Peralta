import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { motion } from "framer-motion"

const ItemDetail = ({item}) => {
  
const {id, title, price, description, pictureUrl, altImg} = item

function onAdd(counter){
  console.log("has agregado", counter, "unidades al carrito")
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
            <p className="item-description">{description}</p>
            <p>Item ID: {id}</p>
            <p>Precio: ${price}</p>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
          </div>
        </div>
      </Container>
    </motion.div>
  )
}

export default ItemDetail