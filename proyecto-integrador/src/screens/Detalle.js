import React, {Component} from "react"
import DetalleFavs from "../components/Detalle Favoritos/DetalleFavs";
const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula:[]
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
    }

    render(){
        return(
            <div>
                <h1>Detalle: {this.state.pelicula.title}</h1>
                <img src = {`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt = ""/>
                <p>Descripcion: {this.state.pelicula.overview}</p>
                <p>Rating: {this.state.pelicula.vote_average}</p>
                <p>Fecha de estreno: {this.state.pelicula.release_date}</p>
                <p>Genero: {this.state.pelicula.genre_ids}</p>
                <DetalleFavs data= {this.state.pelicula} match = {this.props.match}/>
            </div>
        );
    }
}

export default Detalle;