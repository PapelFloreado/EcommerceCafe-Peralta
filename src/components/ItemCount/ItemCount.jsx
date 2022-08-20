import React, {useState} from 'react'
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container } from 'react-bootstrap';


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
        <Container className='d-flex'>
            <ButtonGroup className='counter mx-auto' aria-label="Basic example">
                <Button className='border button' variant="dark" onClick={Sumar}>+</Button>
                <p className='align-self-center' >Unidades {counter} </p>
                <Button className='border button' variant="dark" onClick={Restar}>-</Button>
                <div>
                    <Button className='border button d-flex' variant="dark" onClick={()=>onAdd(counter)}>Agregar al Carrito</Button>
                </div>
            </ButtonGroup>
        </Container>
    )
}

export default ItemCount