import React, { Component } from "react";
import { Link } from 'react-router-dom';
const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculasFav: [],

        };
    }

    apiCall(url) {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    pelicula: data
                });
            })
            .catch(error => console.log(error));
    }


    componentDidMount() {

        let storage = localStorage.getItem("Favs") //recupero el storage donde estan los ids
        if (storage !== null) {
            const storageParseado = JSON.parse(storage);

            Promise.all(
                storageParseado.map(elm =>
                    fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=${APIKEY}`)
                        .then(resp => resp.json())
                )
            )
                // .then(data=> console.log('Then del promiseAll', data)) // con este camino obtengo un array completo con todo agrupado
                .then(data => this.setState({ peliculasFav: data }))
        }
    }

    render() {
        return ( // probar hacer un if o llamar a un componente como cartelera de donde yo pueda sacar la imagen de la pelicula en favoritos y el boton de descripcion Y LINKEAR AL DETALLE <h1>{elm.title}</h1>
            <section className='home__section'>
                <h1 className="home__section-h1">Estos son los Favoritos</h1>
                <div className='favDiv'>
                    {this.state.peliculasFav.length > 0 ?
                        this.state.peliculasFav.map(elm =>
                        (
                            <article className='home__div-article' key={elm.id}>
                                <h2 className='home__div-h2' >{elm.title}</h2>
                                <Link to={`/detalle/${elm.id}`}>
                                    <img className='home__div-img'
                                        src={`https://image.tmdb.org/t/p/w342/${elm.poster_path}`}
                                        alt={elm.title}
                                    />
                                </Link>
                            </article>
                        ))
                        :
                        <h1>No hay peliculas Favoritas</h1>
                    }
                </div>
            </section>
        )
    }
}

export default Favoritos;