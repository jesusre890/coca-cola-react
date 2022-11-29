import React from "react";
import {FiShoppingCart} from "react-icons/fi"

const CartWidget = () => {
    return (
        <button type="button" className="btn bg-light position-relative">
            <p className="fs-4"><FiShoppingCart/></p>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CartWidget