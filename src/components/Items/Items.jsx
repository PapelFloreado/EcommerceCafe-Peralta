import React, {useEffect, useState} from 'react'

const datos = [
    {id: 1, nombre:"reloj", marca:"relojazo"},
    {id: 2, nombre:"compu", marca:"intel"},
]
function Items() {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
      const tarea = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(datos)
        }, 2000);
      })

      tarea
        .then(resultado=> setProductos(resultado))
        .then(error => console.log(error))
        .finally(()=> console.log("promesa finalizada"))
    
      return () => {
      }
    }, [])
    
    

    return (
        <>
            {productos.length < 1 ? (
                <h1>cargando</h1>
            ) : (productos.map((item, index)=> <h1 key={index}>{item.nombre}</h1>))}
        </>
    )
}

export default Items