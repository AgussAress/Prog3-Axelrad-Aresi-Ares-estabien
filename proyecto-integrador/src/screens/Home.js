import React from "react";
import Cartelera from "../components/Cartelera/Cartelera"
import Populares from "../components/Populares/Populares"
function Home() {
        return (
            <React.Fragment>
                    <Cartelera />
                    <Populares />
            </React.Fragment>
        );
    }

export default Home;
