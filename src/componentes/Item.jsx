import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="container-fluid card border border-1 m-3 bg-secondary p-2 text-dark bg-opacity-10">
                <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
                <div className="card-body text-center">
                    <p className="card-text fw-bolder text-muted">{item.nombre}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;