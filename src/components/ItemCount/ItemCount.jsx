import React, {useState} from 'react'
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';
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
                <Button className='border button' variant="dark" onClick={Sumar}>+</Button>
                <div className='align-items-center d-flex ' >Unidades {counter} </div>
                <Button className='border button' variant="dark" onClick={Restar}>-</Button>
            </ButtonGroup>
        </div>
                <div className="d-flex pt-3">
                    <Button className='border button ' variant="dark" onClick={()=>onAdd(counter)}>Agregar al Carrito</Button> 
                </div>
    
        </>
    )
}

export default ItemCount