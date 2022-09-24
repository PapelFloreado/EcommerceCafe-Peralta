import React from 'react'


const Order = ({price,title,quantity}) => {

    
  return (
    <div className='row'>
        <p>Producto:{title}</p>
        <p>Precio: {price}</p>
        <p className='border-bottom'>Cantidad: {quantity}</p>
    </div>
  )
}

export default Order