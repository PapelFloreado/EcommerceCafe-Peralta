import React, {useState} from 'react'
import "./ItemCount.css"
import { motion } from "framer-motion"
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const ItemCount = ({stock=5, initial=1, onAdd}) => {
    
    const [ counter, setCounter] = useState (initial)

    function Restar(){
        if(counter > initial){
            setCounter(counter - 1)
        }
    }

    function Sumar(){
        if(counter !== stock){
            setCounter(counter + 1)    
        }
    }
  
    return (
        <>
        <div>

            <ButtonGroup className='counter mx-auto pt-3' aria-label="Basic example">
                <motion.button whileHover={{ scale: 1.2 }}
                    wileTap={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    className='border button btn'  onClick={Sumar}>+</motion.button>
                <div className='align-items-center d-flex ' >Unidades {counter} </div>
                <motion.button whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}} 
                    className='border button btn'  onClick={Restar}>-</motion.button>
            </ButtonGroup>
        </div>
                <div className="d-flex pt-3">
                    <motion.button whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 50 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    className='border button btn ' onClick={()=>onAdd(counter)}>Agregar al Carrito</motion.button> 
                </div>
    
        </>
    )
}

export default ItemCount