import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../context/CartContext'
import "./CartItems.css"
import { Container } from 'react-bootstrap';
import trash from "../../assets/img/trash.svg"


const CartItems = ({title, price, quantity,id,item, pictureUrl,stock}) => {

const {deleteItem} = useContext(GlobalContext)
    return (
      <div className=" border-bottom mb-3 mt-5 container-fluid">
        <div className="item-cart row align-items-center justify-content-center pt-2 mb-3 ">
            <img  className='col  img-cart p-4 container-fluid' src={pictureUrl} alt={title}></img>
            <h3 className='col font-responsive ms-5 text-align-center pt-3'>{title}</h3>
            <p className='col font-responsive text-align-center pt-3'>Precio: ${price}</p>
            <Container className="row col">
              <p className='col font-responsive bold counter-cart'>Cantidad:</p>
              <p className='col font-responsive counter-cart'>{quantity}</p>
              <button type="button" className='col btn btn-trash ' onClick={()=>deleteItem(id)}><img src={trash} alt="trash"></img></button>
            </Container>
        </div>
      </div>
    )
}

export default CartItems