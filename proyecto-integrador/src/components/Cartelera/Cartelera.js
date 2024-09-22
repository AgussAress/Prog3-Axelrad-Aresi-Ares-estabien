import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../Cartelera/styles.css";

const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Cartelera extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
        };
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => consecuencia(data))
            .catch((error) => console.log(error));
    }

    componentDidMount() {
        this.apiCall(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=es-ES&page=1`,
            this.mostrarPeliculas
        );
    }

    mostrarPeliculas = (data) => {
        const peliculas = data.results.slice(0, 5);
        for (let i = 0; i < peliculas.length; i++) {
            peliculas[i].verDescripcion = false;
        }
        this.setState({
            peliculas: peliculas
        });
    };

    cambiarVerDescripcion = (index) => {
        const peliculasActualizadas = this.state.peliculas.slice();
        peliculasActualizadas[index].verDescripcion = !peliculasActualizadas[index].verDescripcion;
        this.setState({
            peliculas: peliculasActualizadas
        });
    };

    render() {
        return (
            <section className='home__section'>
                <h1 className='home__section-h1'> Cartelera</h1>
                {this.state.peliculas.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <div className='home__section-div'>
                        {this.state.peliculas.map((pelicula, index) => (
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
                                    <Link to={"/cartelera"} >
                                    <button className='home__div-button'>Ver todas</button>
                                    </Link>

                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Cartelera;

