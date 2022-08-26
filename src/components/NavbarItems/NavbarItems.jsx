import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarItems.css"
import NavDropdown from 'react-bootstrap/NavDropdown'
import { NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import { ListGroup } from 'react-bootstrap';

const NavBarItems = () =>{
    return (
        <Container className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-evenly nav-item">
            <NavLink className="nav-link" to={"/"}>Home</NavLink>
            <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
            <NavDropdown className="nav-drop" title="Categorías" id="basic-nav-dropdown">
              <ListGroup>
                <NavLink className="border-bottom justify-content-center" to={"/categoria/cafe"} >Granos de Café</NavLink>
                <NavLink className="border-bottom" to={"/categoria/capsulas"} >Capsulas</NavLink>
                <NavLink to={"/categoria/cafetera"} >Cafeteras</NavLink>
              </ListGroup>
            </NavDropdown>
            <NavLink className="nav-link" to={"/contacto"}>Contacto</NavLink>
            <CartWidget/>
          </Nav>
          </Navbar.Collapse>
        </Container>
    )
}

export default NavBarItems
                
           


