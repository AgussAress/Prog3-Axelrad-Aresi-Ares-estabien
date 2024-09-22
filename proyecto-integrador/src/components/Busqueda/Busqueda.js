import React from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Busqueda/styles.css"

function Busqueda() {
    return (
        <form className="busqueda__form">
            <label htmlFor="search"> Buscar </label>
            <div className="busqueda__div">
                <input className="busqueda__div-input" type="text" placeholder="Buscar"/>
                <FontAwesomeIcon className="busqueda__icon" icon={faSearch} /> 
            </div>
        </form>

        
    )
}

export default Busqueda;