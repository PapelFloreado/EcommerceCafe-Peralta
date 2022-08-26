import React,{useState, useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import productos from "../../assets/data/productos.json"
const ItemDetailContainer = () => {

  const [item, setItem] = useState({})

  const {id} = useParams()

  useEffect(() => {
    const {datos} = productos
    new Promise((resolve)=>{
      setTimeout(() => {
        resolve(datos.find(el=>Number(el.id) === Number(id)))
      }, 2000);
    }).then(dato=>setItem(dato))
    
  }, [id])
  



  return (
    <>
      
         <ItemDetail item={item}/>
     
    
    </>
    
  )
}

export default ItemDetailContainer