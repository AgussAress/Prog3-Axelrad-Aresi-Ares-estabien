import React, { useState } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Busqueda/styles.css"
import { useHistory } from "react-router-dom"

function Busqueda() {
    const [query, setQuery] = useState("") // necesitamos guardar lo q se busca
    const history = useHistory()

    const valorIngresado = (event) => {
        setQuery(event.target.value)
    }

    const redirectAResultados = (event) => {
        if (query.trim()) {
            // con lo que se busca lo mandamos a resultaods 
            history.push(`/resultados?query=${query}`)
        }
    }

    return (
        <form className="busqueda__form" onSubmit={redirectAResultados}>
            <label htmlFor="search"> Buscar </label>
            <div className="busqueda__div">
                <input
                    className="busqueda__div-input"
                    type="text"
                    placeholder="Buscar"
                    value={query}
                    onChange={valorIngresado}
                />
                <FontAwesomeIcon className="busqueda__icon" icon={faSearch} onClick={redirectAResultados} />
            </div>
        </form>
    );
}

export default Busqueda;
