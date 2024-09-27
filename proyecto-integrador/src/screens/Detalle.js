import React, {Component} from "react"
import DetalleFavs from "../components/DetalleFavoritos/DetalleFavs";
const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pelicula:[],
            generos: []
        };
    }
    apiCall(url) {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    pelicula: data,
                    generos: data.genres
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
            <div className="movie-detail-container">
                <h1 className="movie-detail-title">Detalle: {this.state.pelicula.title}</h1>
                <img className="movie-detail-poster" src = {`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`} alt = ""/>
                <p className="movie-detail-description">Descripcion: {this.state.pelicula.overview}</p>
                <p className="movie-detail-rating">Rating: {this.state.pelicula.vote_average}</p>
                <p className="movie-detail-release-date">Fecha de estreno: {this.state.pelicula.release_date}</p>
                <p className="movie-detail-genre"> Género: {this.state.generos.map(genre => genre.name).join(', ')}</p>
                <p className="movie-detail-genre">Duracion: {this.state.pelicula.runtime}</p>
                <DetalleFavs data= {this.state.pelicula} match = {this.props.match}/>
            </div>
        );
    }
}

export default Detalle;