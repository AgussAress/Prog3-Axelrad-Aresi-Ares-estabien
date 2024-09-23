import React, {Component} from "react";
const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Favoritos extends Component{
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
        return ( 
            <React.Fragment>
                    <h1 className = "home__section-h1">Estos son los Favoritos</h1>
                    <p className = "home__div-p">Tus peliculas favoritas son: {this.state.pelicula.id}</p>
            </React.Fragment>
    )}
    }

export default Favoritos;