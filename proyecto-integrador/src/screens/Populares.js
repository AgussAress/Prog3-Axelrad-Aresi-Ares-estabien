import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../components/Busqueda/styles.css";
const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            page: 1,
            valorInput: '',
            peliculasFiltradas: []
        };
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => consecuencia(data))
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.cargarPeliculas();
    }

    cargarPeliculas = () => {
        const { page } = this.state;
        this.apiCall(
            `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=es-ES&page=${page}`,
            this.mostrarPeliculas
        );
    };

    mostrarPeliculas = (data) => {
        const nuevasPeliculas = data.results.map((pelicula) => {
            pelicula.verDescripcion = false;
            return pelicula;
        });

        const peliculasActualizadas = this.state.peliculas.concat(nuevasPeliculas)

        this.setState({
            peliculas: peliculasActualizadas,
            peliculasFiltradas: peliculasActualizadas,
        });
    };

    cambiarVerDescripcion = (index) => {
        const peliculasActualizadas = [...this.state.peliculasFiltradas];
        peliculasActualizadas[index].verDescripcion = !peliculasActualizadas[index].verDescripcion;
        this.setState({
            peliculasFiltradas: peliculasActualizadas,
        });
    };

    cargarMas = () => {
        this.setState(
            (prevState) => ({ page: prevState.page + 1 }),
            this.cargarPeliculas
        )
    }

    controlarInput = (event) => {
        const valorInput = event.target.value.toLowerCase()
        const peliculasFiltradas = this.state.peliculas.filter((pelicula) =>
            pelicula.title.toLowerCase().includes(valorInput)
        )
        this.setState({ valorInput, peliculasFiltradas })
    }

    evitarSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <section className='home__section'>
                <form className="busqueda__form" onSubmit={this.evitarSubmit}>
                    <div className="busqueda__div">
                        <input
                            className="busqueda__div-input"
                            type="text"
                            value={this.state.valorInput}
                            onChange={this.controlarInput}
                            placeholder="Buscar películas Populares"
                        />
                        <FontAwesomeIcon className="busqueda__icon" icon={faSearch} />
                    </div>
                </form>
                <h1 className='home__section-h1'> Populares</h1>

                {this.state.peliculasFiltradas.length === 0 ? (
                    <div className="cargando__gif-container">
                        <img src="/imgs/carga.webp" alt="Cargando..." className="cargando__gif" />
                    </div>
                ) : (
                    <div className='home__section-div'>
                        {this.state.peliculasFiltradas.map((pelicula, index) => (
                            <article className='home__div-article' key={index}>
                                <Link to={`/detalle/${pelicula.id}`}>
                                    <img
                                        className='home__div-img'
                                        src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`}
                                        alt={pelicula.title}
                                    />
                                </Link>
                                <h2 className='home__div-h2'>{pelicula.title}</h2>

                                {pelicula.verDescripcion && (
                                    <p className='home__div-p'>{pelicula.overview}</p>
                                )}
                                <div className="button-container">
                                    <button className='home__div-button' onClick={() => this.cambiarVerDescripcion(index)}>
                                        {pelicula.verDescripcion ? 'Ocultar' : 'Ver descripción'}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
                
                <div className="link-button">
                    <button className='home__div-button2 cargar-mas' onClick={this.cargarMas}>
                        Cargar más
                    </button>
                </div>
            </section>
        );
    }
}

export default Popular;
