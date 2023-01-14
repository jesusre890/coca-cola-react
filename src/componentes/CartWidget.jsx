import React, { useContext } from "react";
import {FiShoppingCart} from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const {cartTotal} = useContext(CartContext);

    if (cartTotal() == 0) {
        return (
            ""
        )
    };

    return (
        <Link to={"/cart"} className="btn bg-light position-relative" title="Ir al Carrito">
            <p className="fs-4"><FiShoppingCart/></p>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;