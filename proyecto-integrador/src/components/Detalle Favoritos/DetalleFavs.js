import React, {Component} from 'react';
const APIKEY = 'e085a8d4a0502afc1d3c8e65c53af130';

class DetalleFavs extends Component {
    constructor (props) {
        super(props)
        this.state = {
           esFavorito: false
        }
       }
       componentDidMount(){
           let storage = localStorage.getItem("Favs")
           console.log('props', this.props)
           const movie_id = this.props.match.params.id
           this.apiCall(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIKEY}`)
           if(storage !== null){
              let arrayParseado = JSON.parse(storage)
              let estaMiId = arrayParseado.includes(this.props.data.id) //
              if (estaMiId){
                 this.setState({
                    esFavorito: true
                 })
              }
           }
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
     
       agregarAStrorage(id){
           let storage = localStorage.getItem('Favs')
           if(storage!==null){
              let storageParseado = JSON.parse(storage)
              storageParseado.push(id)
              let storageStringificado = JSON.stringify(storageParseado)
              localStorage.setItem('Favs', storageStringificado)
           }else{
              let arrayFavs = [id]
              let favsStringificado = JSON.stringify(arrayFavs)
              localStorage.setItem("Favs", favsStringificado)
           }
     
           this.setState({
              esFavorito:true
           })
       }
       
        render (){
           
        return(
           <div>
              <article className="">
              {
                 this.state.esFavorito ?
                 <button>
                    Sacar de favs
                 </button>
                 :
                 <button onClick = {()=> this.agregarAStrorage(this.props.data.id)}>
                    Favoritos ❤
                 </button>
               }
              </article>
           
           </div>
        ) 
        }
}

export default DetalleFavs;