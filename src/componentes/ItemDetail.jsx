import React from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="row my-5">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h3>{item.nombre}</h3>
                <p><b>${item.precio}</b></p>
            </div>
            <ItemCount stockItems={item.stock} />
        </div>
    )
}

export default ItemDetail;