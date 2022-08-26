import cart from "../../coffe-cart.svg"
import "./CartWidget.css"
import { NavLink } from 'react-router-dom'

const CartWidget = ()=> {
    return(
            <NavLink to={"/cart"}>
                <img src={cart} alt="cart" width={25}/>
            </NavLink>
    )
}

export default CartWidget