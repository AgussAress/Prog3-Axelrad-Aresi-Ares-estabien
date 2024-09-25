import React, {Component} from "react";

const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Favoritos extends Component{
    constructor(props) {
        super(props);
        this.state = {
            peliculasFav:[],
            poster_path: props.poster_path
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


    componentDidMount(){
        console.log('props detalle', this.props)
        const movie_id = this.props.match.params.id
        this.apiCall(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}`)
        let storage = localStorage.getItem("Favs") //recupero el storage donde estan los ids
        if (storage!==null){
            let storageParseado = JSON.parse(storage) //si no es null, y hay algo, lo parseo y busco con fetch el detalle

            Promise.all( //el fetch resulve info, el then la desenvuelve y el promise all junta todo, por ende puedo hacer thens de todo junto y recibir la data
                storageParseado.map(elm =>
                    fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=${APIKEY}`)
                    .then(resp => resp.json())
                )
            )
           // .then(data=> console.log('Then del promiseAll', data)) // con este camino obtengo un array completo con todo agrupado
            .then(data => this.setState({peliculasFav:data}))
        }
    }

    render(){
        return ( // probar hacer un if o llamar a un componente como cartelera de donde yo pueda sacar la imagen de la pelicula en favoritos y el boton de descripcion Y LINKEAR AL DETALLE <h1>{elm.title}</h1>
            <div>
                    <h1 className = "home__section-h1">Estos son los Favoritos</h1> 
                    {this.state.peliculasFav.length >0 ? 
                    this.state.peliculasFav.map(elm => 
                        <img key={elm.id} src={`https://image.tmdb.org/t/p/w342/$%7B${this.state.poster_path}`} alt="probando" /> )
                    :
                    <h1>No hay peliculas Favoritas</h1>
                    } 
            </div>
    )}
    }

export default Favoritos;