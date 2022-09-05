import React, {useContext} from "react"
import cart from "../../coffe-cart.svg"
import "./CartWidget.css"
import { NavLink } from 'react-router-dom'
import { GlobalContext } from "../../context/CartContext"

const CartWidget = ()=> {
    const {carritoCount} = useContext(GlobalContext)
    return(
            <NavLink to={"/cart"}>
                <p>
                <img src={cart} alt="cart" width={25}/>
                {carritoCount}
                </p>
            </NavLink>
    )
}

export default CartWidget