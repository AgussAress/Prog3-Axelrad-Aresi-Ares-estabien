import React from "react";
import Cartelera from "../components/Cartelera/Cartelera"
import Populares from "../components/Populares/Populares"
import Busqueda from "../components/Busqueda/Busqueda";

function Home() {
    return (
        <React.Fragment>
            <Busqueda />
            <Cartelera />
            <Populares />
        </React.Fragment>
    );
}

export default Home;
