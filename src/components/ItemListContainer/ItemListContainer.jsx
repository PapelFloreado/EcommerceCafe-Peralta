import React,{useState, useEffect} from "react"
import "./ItemListContainer.css"
import Container from "react-bootstrap/esm/Container"
import ItemList from "../ItemList/ItemList"
import SpinnerLoad from "../SpinnerLoad/SpinnerLoad"
import { useParams } from "react-router-dom"
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore'



export default function ItemListContainer (){


    const [items, setItems] = useState([])    
    
    const {categoria} = useParams()


    useEffect(() => {
        const getColData = async () =>{
          try { 
            const data = collection(db, "productos")
            const col = await getDocs(data)
            const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
            const res2 = categoria ? res.filter(el=> el.categoria === categoria) : res
            setItems(res2)
            
          } catch (error) {
            console.log(error)
          }
         
        }
        getColData()
        return () => {
          
        }
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

