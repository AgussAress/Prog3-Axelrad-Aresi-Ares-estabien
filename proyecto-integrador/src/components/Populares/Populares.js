import React, { Component } from 'react';

const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Popular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        };
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error));
    }

    componentDidMount() {
        this.apiCall(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=es-ES&page=1`, this.mostrarPeliculas);
    }

    mostrarPeliculas = (data) => {
        this.setState({
            peliculas: data.results
        });
    }

    render() {
        return (
            <section>
                <h1>Más populares</h1>
                {this.state.peliculas.length === 0 ? (
                    <p>Cargando...</p>
                ) : (
                    <div className = "container">
                        {this.state.peliculas.filter((pelicula, index) => index < 5).map((pelicula, index) => (
                            <div className = "image-box" key={index}>
                                <img src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} alt={pelicula.title} />
                                <p>{pelicula.title}</p>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Popular;