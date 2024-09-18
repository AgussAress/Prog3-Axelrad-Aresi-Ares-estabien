import React, {Component} from "react"

const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error));
    }

    componentDidMount(){
        this.apiCall(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}`, this.mostrarDetalle)
    }

    mostrarDetalle = (data) => {
        this.setState({
            
        });
    }

    render(){
        return(
            <h1></h1>
        );
    }
}

export default Detalle;