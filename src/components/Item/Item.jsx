import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Item.css"

function Item({title, description, price, id, pictureUrl}){

  

  return (
    <Container className="d-flex flex-wrap">
  
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
        <Button className="button" variant="dark">Ver detalle del Producto</Button>
        </Card.Body>
      </Card>

    </Container>
 
  );
}


export default Item;