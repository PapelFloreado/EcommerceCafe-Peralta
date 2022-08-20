import React,{useState, useEffect} from "react"
import "./ItemListContainer.css"
import Container from "react-bootstrap/esm/Container"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer ({greeting}){

    function onAdd(counter){
        console.log("has agregado", counter, "unidades al carrito")
    }

    
    const [items, setItems] = useState([])    
      
    useEffect(() => {

        const datos = [
            {
                title: "Cafetera Pro",
                desciption: "Con esta cafetera lograras el máximo sabor en tus infusiones",
                price: 2500,
                id: 1,
                pictureUrl: "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/04/cafetera-espresso-lidl-2296433.jpg?itok=E_jmQoQy"
          
            },
            {
                title: "Capsulas de cafe",
                description: "El cafe justo con el aroma que estabas buscando",
                price: 250,
                id: 2,
                pictureUrl: "https://perfectdailygrind.com/es/wp-content/uploads/sites/2/2018/09/blue-brown-coffee-269349-e1586734860857.jpg"
          
            },
            {
                title: "Grano de cafe extra",
                description:"El grano premium que estabas buscando para lograr ese sabor único",
                price: 350,
                id: 3,
                pictureUrl: "https://cafedelirante.com.ar/wp-content/uploads/2020/09/portada-granos-de-cafe-1-800x397.jpg"
          
            }
          ]


        const tarea = new Promise ((resolve,reject)=>{
            setTimeout(() => {
                resolve(datos)
            }, 2000);
        })

        tarea
            .then(resultado=>setItems(resultado))
            .then(error=> console.log(error))
            .finally(()=> console.log("promesa finalizada"))

       
    
      return () => {
        
      }
    }, [])


    return(
        
        <Container className="container">
            <h1 className=" d-flex justify-content-center">{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
            <Container>
                {items.lenght < 1 ?(<h1>Cargando...</h1>) : (<ItemList className="container" items={items}/>)}    
            </Container>
        </Container>
        
        
            
     
    )
}

