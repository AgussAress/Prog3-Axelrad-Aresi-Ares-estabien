import React, { Component } from 'react';
const API_KEY = "e085a8d4a0502afc1d3c8e65c53af130";

export default class Resultados extends Component {
    constructor(props) {
        super(props)
        this.state = {
            resultados: []
        }
    }

    componentDidMount() {
        const loQueBuscaElUsuario = this.props.history.location.state.busqueda

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${loQueBuscaElUsuario}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ resultados: data.results })
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                {this.state.resultados.length > 0 ? (
                    this.state.resultados.map((pelicula, index) => (
                        <div key={index}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w342/${pelicula.poster_path}`} 
                                alt={pelicula.title} 
                            />
                            <p>{pelicula.title}</p>
                        </div>
                    ))
                ) : (
                    <h1>No hay resultados de búsqueda</h1>
                )}
            </div>
        );
    }
}
