import React from "react";
import Cartelera from "../components/Cartelera/Cartelera"
import Populares from "../components/Populares/Populares"
import Busqueda from "../components/Busqueda/Busqueda";
import Banner from "../components/Banner/Banner";

function Home(props) {
    return (
        <React.Fragment>
            <Banner />
            <Busqueda history={props.history}/>
            <Cartelera />
            <Populares />
        </React.Fragment>
    );
}

export default Home;
