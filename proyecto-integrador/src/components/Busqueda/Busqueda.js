import React, { useState } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Busqueda/styles.css"

import { Component } from "react";

class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        }
    }

    cambioEnInput(event) {
        this.setState({
            query: event.target.value
        });
    }


    evitarSubmit(event) {
        event.preventDefault();
        this.props.history.push(
            '/resultados',
            { busqueda: this.state.query }
        );
    }

    render() {
        return (
            <form className="busqueda__form" onSubmit={(e) => this.evitarSubmit(e)}>
                <div className="busqueda__div">
                    <input
                        className="busqueda__div-input"
                        type="text"
                        value={this.state.query}
                        onChange={(e) => this.cambioEnInput(e)}
                        placeholder="Buscar"
                    />
                    <FontAwesomeIcon className="busqueda__icon" icon={faSearch} />
                </div>
            </form>
        );
    }
}

export default Busqueda;
