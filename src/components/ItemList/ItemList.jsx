import React from "react"
import Item from '../Item/Item';
import { Container } from "react-bootstrap";
import SpinnerLoad from "../SpinnerLoad/SpinnerLoad";



function ItemList ({items}) {


        return (
            <Container className="d-flex m-5 flex-wrap ">
                {items.length < 1 ? (
                    <SpinnerLoad/>
                ) : (items.map((items, index)=> 
                        <Item className=""  key={index}
                        title={items.title}
                        price={items.price}
                        id={items.id}
                        description={items.description}
                        pictureUrl={items.pictureUrl}/>))}
            </Container>
        )
          
}
export default ItemList