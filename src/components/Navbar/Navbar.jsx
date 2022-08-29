import "./Navbar.css"
import logo from "../../logo-coffe.svg"
import NavbarItems from "../NavbarItems/NavbarItems"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'


const ContainerOutsideExample = ()=> {
  return (
    <div>

      <Navbar className="sticky" expand="lg" variant="light" bg="light">
        <Container className="d-flex">
          <NavLink to={"/"}>
          <img src={logo} width="140" className="d-inline-block align-top" alt="logo"/>
          </NavLink>
          <NavbarItems/>
        </Container>
      </Navbar>
    </div>
  );
}

export default ContainerOutsideExample;
                
                       
         
  