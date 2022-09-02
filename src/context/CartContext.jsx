import React from 'react'
import { createContext, useState } from 'react'

export const GlobalContext = createContext() 


const CartContext = ({children}) => {


    const [carrito, setCarrito] = useState([])

    const addItem = (item, quantity,stock)=>{
        
        if(isInCart(item.id)){
            
            let aux = carrito
            let itemIndex = aux.findIndex(element=> element.id === item.id)
            aux[itemIndex]["quantity"] = quantity += 1
            
            setCarrito([...aux])
        }else{
            setCarrito([...carrito, {...item, quantity}])

        }

    }


    const isInCart = (itemId)=> carrito.find(el=> el.id === itemId)

    const clear = ()=>{
        setCarrito([]) 
    }

    const deleteItem = (itemId)=>{setCarrito(carrito.filter(el=>el.id !== itemId))

    } 
    

   let precioFinal =  carrito.reduce((acc,item)=>acc + item.price * item.quantity,0)
        
    

    return (
        <GlobalContext.Provider value={{
            carrito,
            precioFinal,
            addItem,
            clear,
            deleteItem

        }}>{children}</GlobalContext.Provider>
    )
}

export default CartContext