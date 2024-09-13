import React from "react";
import Opcion from "../Opcion/Opcion";
import "../Navbar/style.css"

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
            <ul className="">
                <img className= "nav-img" src="./imgs/logo.png" alt="logo" />
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