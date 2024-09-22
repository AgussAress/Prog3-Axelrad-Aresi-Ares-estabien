import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const API_KEY = "e085a8d4a0502afc1d3c8e65c53af130"

function Resultados() {
    const [resultados, setResultados] = useState([])
    const location = useLocation()// obtenemos la ubicacion actual de la url

    // obtenemos el parametro de busqueda de la url
    const query = new URLSearchParams(location.search).get("query")

    useEffect(() => {
        if (query) {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es-ES&query=${query}&page=1`)// si tenemos la query usamos la api para hacer la busqueda de las peliculas
                .then(response => response.json())
                .then(data => {
                    setResultados(data.results)
                })
                .catch(error => console.log(error))
        }
    }, [query])

    return (
        <div>
            <h1>Resultados de Búsqueda</h1>
            {resultados.length === 0 ? (
                <p>GGGGGGIIIIIIIIIFFFFFFFFFF DEL PUNTOOO 9!!!!!!</p>
            ) : (
                <div>
                    {resultados.map((pelicula, index) => (
                        <div key={index}>
                            <img src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} alt={pelicula.title} />
                            <p>{pelicula.title}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Resultados;
