import "./Navbar.css"
import logo from "../../logo-coffe.svg"
import CartWidget from "../CartWidget/CartWidget"
import NavbarItems from "../NavbarItems/NavbarItems"


const Navbar = () => {

    return(
        <nav className="container-fluid navbar">
            <div className="container d-flex ">
                <a className="navbar-brand justify-self-end" href="index.html">
                    <img className="img__logo" src={logo} alt="logo" width={160}/>
                </a>
                <NavbarItems/> 

                <CartWidget/>           
            </div>
        </nav>
    )
}

export default Navbar