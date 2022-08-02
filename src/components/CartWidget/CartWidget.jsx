import cart from "../../coffe-cart.svg"
import "./CartWidget.css"

const CartWidget = ()=> {
    return(
            <a href="index.html">
                <img src={cart} alt="cart" width={25}/>
            </a>
    )
}

export default CartWidget