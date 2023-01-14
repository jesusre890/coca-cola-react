import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Gracias = () => {

    const {id} = useParams();

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-primary" role="alert">
                        <h1>Gracias por tu compra</h1>
                        <p>Tu número de compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn fondoNaranja">Volver a la Página Principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Gracias;