import { ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import logo from "../../logo-coffe.svg"



function BasicExample() {
  return (
    <Navbar sticky="top" className="navbar" expand="lg">
      <Container>
        <Navbar.Brand>
            <NavLink to={"/"}>
                <img src={logo} width="140" className="d-inline-block " alt="logo"/>
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-around basis">
            <NavLink className="nav-link" to={"/"}>Home</NavLink>
            <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
            <NavDropdown title="Categorías" id="basic-nav-dropdown">   
                <ListGroup>
                    <NavLink className="back border-bottom justify-content-center" to={"/categoria/cafe"}>Granos de Café</NavLink>
                    <NavLink className="back border-bottom" to={"/categoria/capsulas"}>Capsulas</NavLink>
                    <NavLink className="back" to={"/categoria/cafetera"}>Cafeteras</NavLink>
                </ListGroup>
            </NavDropdown>
            <CartWidget/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;