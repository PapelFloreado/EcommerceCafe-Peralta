import React from 'react'
import { Container } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  
const {id, title, price, description, pictureUrl, altImg} = item

function onAdd(counter){
  console.log("has agregado", counter, "unidades al carrito")
}


  return (
    <Container className="item-detail">
      <div className="itemCard row">
          <img className='img-detail p-5 col-lg-8 col-md-12' alt={altImg} src={pictureUrl}></img>
        <div className="column px-5 col-lg-4 col-md-12">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>${price}</p>
          <p>Item ID: {id}</p>
          <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
      </div>
    </Container>
  )
}

export default ItemDetail