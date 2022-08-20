import React from "react"
import Item from '../Item/Item';
import { Container } from "react-bootstrap";



function ItemList ({items}) {


        return (
            <Container className="d-flex m-5 ">
                {items.length < 1 ? (
                    <h1>cargando</h1>
                ) : (items.map((items, index)=> 
                        <Item className="d-flex flex-wrap p-3"  key={index}
                        title={items.title}
                        price={items.price}
                        id={items.id}
                        description={items.description}
                        pictureUrl={items.pictureUrl}/>))}
            </Container>
        )
          
}
export default ItemList