import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavbarItems.css"

const NavItems = ["Home", "Shop", "About", "Contact"]

const NavBarItems = () =>{
    return (
        <Container className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-evenly nav-item">
            {NavItems.map((item)=>(
                <Nav.Link key={item} href="#home">{item}</Nav.Link>
            ))}
          </Nav>
          </Navbar.Collapse>
        </Container>
    )
}

export default NavBarItems
                
           


