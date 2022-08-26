import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"
import { Link } from 'react-router-dom'


function Item({title, description, price, id, pictureUrl}){
  
  return (
    <Container className="d-flex p-3 col-4">
  
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
        <Link to={`/item-detail/${id}`}>
          <Button className="button" variant="dark">Ver mas detalles del Producto</Button>
        </Link>
        
        </Card.Body>
      </Card>
    </Container>
 
  );
}


export default Item;