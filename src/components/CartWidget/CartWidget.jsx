import cart from "../../coffe-cart.svg"
import "./CartWidget.css"
import Container from "react-bootstrap/esm/Container"

const CartWidget = ()=> {
    return(
        <Container className="d-flex justify-content-end cart-w">
            <a href="index.html">
                <img src={cart} alt="cart" width={25}/>
            </a>
        </Container>
    )
}

export default CartWidget