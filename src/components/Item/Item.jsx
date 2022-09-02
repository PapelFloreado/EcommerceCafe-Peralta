import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"


function Item({title, description, price, id, pictureUrl}){
  
  return (
    <Container className="d-flex justify-content-center pb-5 pt-5 col-lg-4 col-md-6 col-sm-12 ">
  
      <Card  className="cards"  style={{ width: '30rem' }}>
        <Card.Img variant="top" src={pictureUrl}/>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
         <Card.Text>
        {description}
        </Card.Text>
        <Card.Text>
         Price: ${price}, Product Id:{id}
        </Card.Text>
        <Link className='d-flex justify-content-center' to={`/item-detail/${id}`}>
          <motion.button
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 100, damping: 50 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="button btn" variant="dark">Ver mas detalles del Producto</motion.button>
        </Link>
        
        </Card.Body>
      </Card>
    </Container>
 
  );
}


export default Item;