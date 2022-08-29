import React,{useState, useEffect} from "react"
import "./ItemListContainer.css"
import Container from "react-bootstrap/esm/Container"
import ItemList from "../ItemList/ItemList"
import SpinnerLoad from "../SpinnerLoad/SpinnerLoad"
import productos from "../../assets/data/productos.json"
import { useParams } from "react-router-dom"



export default function ItemListContainer (){


    const [items, setItems] = useState([])    
    
    const {categoria} = useParams()
      
    useEffect(() => {
        let {datos} = productos
        
        new Promise((resolve)=>{
            setTimeout(() => {
                
                datos = categoria ? datos.filter(el=> el.categoria === categoria) : datos
                resolve(datos)
            }, 2000);
        }).then (data=>setItems(data))

    }, [categoria])
    


    return(
        
        <Container className="container item-list">
            <h1 className="d-flex">Nuestros Productos</h1>
            <Container>
                {items.lenght < 1 ?(<SpinnerLoad/>) : (<ItemList className="container" items={items}/>)}    
            </Container>
        </Container>
        
        
            
     
    )
}

