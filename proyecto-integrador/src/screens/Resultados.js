import React, { Component } from 'react';
import { Link } from "react-router-dom";

const API_KEY = "e085a8d4a0502afc1d3c8e65c53af130";


export default class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: [],
            loading: true
        }
    }

    componentDidMount() {
        const loQueBuscaElUsuario = this.props.history.location.state.busqueda
        const minimumLoadingTime = new Promise(resolve => {
            setTimeout(resolve, 2000)
        })

        const apiCall = fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${loQueBuscaElUsuario}`)
            .then(response => response.json())
            Promise.all([minimumLoadingTime, apiCall])
            .then(([_, data]) => {
                const resultadosConDescripcion = data.results.map(pelicula => {
                    return {
                        ...pelicula,
                        verDescripcion: false
                    };
                });

                this.setState({ 
                    resultados: resultadosConDescripcion || [],
                    loading: false
                });
            })
            .catch(error => {
                console.log(error)
                this.setState({ loading: false })
            });
        
    }
    cambiarVerDescripcion = (index) => {
        const resultadosActualizados = [...this.state.resultados];
        resultadosActualizados[index].verDescripcion = !resultadosActualizados[index].verDescripcion;
        this.setState({
            resultados: resultadosActualizados
        })
    }

    render() {
        return (
            <div className="peliculas__section">
                <h1 className="res-bus">Resultados de búsqueda</h1>
                {this.state.loading ? (   
                    <div className="cargando__gif-container">
                        <img src="/imgs/carga.webp" alt="Cargando..." className="cargando__gif" />
                    </div>
                ) : (
                    this.state.resultados.length > 0 ? (
                        <div className="peliculas__section-div">
                            {this.state.resultados.map((pelicula, index) => (
                                <article className="peliculas__div-article" key={index}>
                                    {/* Enlace al detalle de la película */}
                                    <Link to={`/detalle/${pelicula.id}`}>
                                        <img className='peliculas__div-img'
                                            src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} 
                                            alt={pelicula.title} 
                                        />
                                    </Link>
                                    <h2 className='peliculas__div-h2'>{pelicula.title}</h2>

                                    
                                    {pelicula.verDescripcion && (
                                        <p className='peliculas__div-p'>{pelicula.overview}</p>
                                    )}


                                    <div className="button-container">
                                        <button 
                                            className='peliculas__div-button' 
                                            onClick={() => this.cambiarVerDescripcion(index)}
                                        >
                                            {pelicula.verDescripcion ? 'Ocultar' : 'Ver descripción'}
                                        </button>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <br></br>
                            <hr></hr>
                            <h1 className="res-bus">No hay resultados de búsqueda</h1>
                        </div>
                    )
                )}
            </div>


        );
    }
}
