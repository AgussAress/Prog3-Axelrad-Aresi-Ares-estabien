import React, { Component } from 'react';

class DetalleFavs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            esFavorito: false
        };
    }

    componentDidMount() {
        this.verificarFavorito(this.props.data.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data.id !== this.props.data.id) {
            this.verificarFavorito(this.props.data.id);
        }
    }

    verificarFavorito(id) {
        let storage = localStorage.getItem("Favs");
        if (storage !== null) {
            let arrayParseado = JSON.parse(storage);
            let estaMiId = arrayParseado.includes(id);
            this.setState({
                esFavorito: estaMiId
            });
        }
    }

    agregarAStrorage(id) {
        let storage = localStorage.getItem('Favs');
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            if (!storageParseado.includes(id)) {
                storageParseado.push(id);
                localStorage.setItem('Favs', JSON.stringify(storageParseado));
            }
        } else {
            let arrayFavs = [id];
            localStorage.setItem("Favs", JSON.stringify(arrayFavs));
        }

        this.setState({
            esFavorito: true
        });
    }

    quitarDeStorage(id) {
        let storage = localStorage.getItem('Favs');
        if (storage !== null) {
            let storageParseado = JSON.parse(storage);
            let nuevoArray = storageParseado.filter(favId => favId !== id);
            localStorage.setItem('Favs', JSON.stringify(nuevoArray));
        }

        this.setState({
            esFavorito: false
        });
    }

    render() {
        return (
            <div className = "button-container">
                <article>
                    {
                        this.state.esFavorito ?
                            <button className = "home__div-button" onClick={() => this.quitarDeStorage(this.props.data.id)}>
                                Sacar de Favoritos ❤
                            </button>
                            :
                            <button className = "home__div-button" onClick={() => this.agregarAStrorage(this.props.data.id)}>
                                Agregar a Favoritos ❤
                            </button>
                    }
                </article>
            </div>
        );
    }
}

export default DetalleFavs;