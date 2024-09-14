import React from "react";
import Opcion from "../Opcion/Opcion";
import "../Navbar/styles.css"

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
        <nav className="nav">
            <ul className="nav__ul-img">
                <img className= "ul-img" src="./imgs/logo.png" alt="logo" />
            </ul>
            <ul className="main-nav">
                {
                    opciones.map((elm) => <Opcion data={elm} />)
                }
            </ul>
        </nav>
    )
}

export default Navbar