import { motion } from 'framer-motion'
import React from 'react'
import Order from '../Order/Order'

const OrderDetail = ({order}) => {

    const {id,fecha, buyer:{nombre, apellido, telefono, email},  total:{precioFinal}} = order

    return (
    
        <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}} className='pt-5 col-6 '>
            <h2 className='fs-1'>Su Búsqueda</h2>
            <div>
                <h2 className='border-bottom'>Datos Personales</h2>
                <p>ID:{id}</p>
                <p>Fecha de compra:{fecha}</p>
                <p>Nombre:{nombre}</p>
                <p>Apellido:{apellido}</p>
                <p>Email:{email}</p>
                <p>Teléfono:{telefono}</p>
                
            </div>
            <div>
            <h2 className='border-bottom'>Detalle de compra</h2>
                {
                    order.compra.carrito.map((items, index)=>{
                        
                        return(<Order key={index}
                            quantity={items.quantity}
                            title={items.title}
                            price={items.price}
                            id={items.id} />)
                        })
                    }
                <p>Total Compra: {precioFinal}</p>
            </div>
        </motion.div>

    )
}

export default OrderDetail