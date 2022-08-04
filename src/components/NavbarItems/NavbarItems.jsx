import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarItems.css"
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBarItems = () =>{
    return (
        <Container className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-evenly nav-item">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown className="nav-drop" title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Café</NavDropdown.Item>
                <NavDropdown.Item href="#">Accesorios</NavDropdown.Item>
                <NavDropdown.Item href="#">Insumos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
    )
}

export default NavBarItems
                
           


