import "./Navbar.css"
import logo from "../../logo-coffe.svg"
import CartWidget from "../CartWidget/CartWidget"
import NavbarItems from "../NavbarItems/NavbarItems"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


const ContainerOutsideExample = ()=> {
  return (
    <div>

      <Navbar expand="lg" variant="light" bg="light">
        <Container className="d-flex">
          <Navbar.Brand href="index.html">
          <img src={logo} width="140" className="d-inline-block align-top" alt="logo"/>
          </Navbar.Brand>
          <NavbarItems/>
          <CartWidget/>
        </Container>
      </Navbar>
    </div>
  );
}

export default ContainerOutsideExample;
                
                       
         
  