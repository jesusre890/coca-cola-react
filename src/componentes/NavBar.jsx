import React from "react";
import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row bg-light bg-gradient">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><img src={"https://res.cloudinary.com/don3phnka/image/upload/v1669332506/Coca-Cola%20React%20js/logo_coca_fwyw6u.png"} alt={"Coca-cola logo"} width={80}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/category/coca-cola">Coca-Cola</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/sprite">Sprite</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/monster">Monster</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/jugos">Jugos</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
                <CartWidget />
            </div>
        </div>
    )
}

export default NavBar;