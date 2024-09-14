import React, { Component } from "react";
const API_KEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Home extends Component {
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
        console.log("Componente Home montado");
        this.apiCall(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`, this.mostrarPeliculas);
    }

    mostrarPeliculas = (data) => {
        this.setState({
            peliculas: data.results
        });
    }

    render() {
        console.log("render");

        let contenido;

        if (this.state.peliculas.length === 0) {
            contenido = <p> Cargando... </p>; // acá despues tengo que poner un emoji o gif de cargando (el mismo del punto 9)
        } else {
            contenido = this.state.peliculas.map((pelicula, index) => (
                <div key={index}>
                    <img src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} alt={pelicula.title} />
                    <p>{pelicula.title}</p>
                </div>
            ));
        }

        return (
            <React.Fragment>
                <section>
                    <h1>Banner</h1>
                </section>
                <section>
                    <h1>tods las peliculas</h1>
                    <div>{contenido}</div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;
