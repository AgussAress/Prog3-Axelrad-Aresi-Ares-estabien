import React from "react";
import Opcion from "../Opcion/Opcion";

const opciones = [
    {
        nombre: "HOME",
        ruta: '/'
    },
    {
        nombre: "CARTELERA",
        ruta: "/cartelera"
    },
    {
        nombre: "MÁS POPULARES",
        ruta: "/populares"
    },
    {
        nombre: "FAVORITOS",
        ruta: "/favoritos"
    }

]

function Navbar() {
    return (
        <nav>
            <ul className="main-nav">
                {
                    opciones.map((elm) => <Opcion data={elm} />)
                }
            </ul>
            <ul className="user">
                <li>Buscador</li>
            </ul>
        </nav>
    )
}

export default Navbar