import React from "react";
import Cartelera from "../components/Cartelera/Cartelera"
import Populares from "../components/Populares/Populares"
import Busqueda from "../components/Busqueda/Busqueda";

function Home(props) {
    return (
        <React.Fragment>
            <Busqueda history={props.history}/>
            <Cartelera />
            <Populares />
        </React.Fragment>
    );
}

export default Home;
