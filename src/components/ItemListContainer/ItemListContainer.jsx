import React from "react"
import "./ItemListContainer.css"
import Container from "react-bootstrap/esm/Container"

export default function ItemListContainer ({greeting}){
    return(
        
        <Container>
            <h1 className=" d-flex justify-content-center ">{greeting}</h1>
        </Container>
        
        
            
     
    )
}

