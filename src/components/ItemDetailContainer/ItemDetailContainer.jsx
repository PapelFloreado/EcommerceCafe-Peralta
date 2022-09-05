import React,{useState, useEffect} from 'react'
import ItemDetail from "../ItemDetail/ItemDetail"
import "./ItemDetailContainer.css"
import { useParams } from 'react-router-dom'
import db from '../../services'
import { collection, getDocs } from 'firebase/firestore'

const ItemDetailContainer = () => {

  const [item, setItem] = useState({})

  const {id} = useParams()


  useEffect(() => {
    const getColData = async () =>{
      try { 
        const data = collection(db, "productos")
        const col = await getDocs(data)
        const res = col.docs.map((doc) =>doc={id:doc.id, ...doc.data()})
        const res2 = res.find(el=>el.id === id)
        setItem(res2)
        
      } catch (error) {
        console.log(error)
      }
     
    }
    getColData()
    return () => {
      
    }
  }, [id])
  


  return (
    <>
         <ItemDetail item={item}/>
    </>
    
  )
}

export default ItemDetailContainer