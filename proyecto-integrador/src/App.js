import Home from './screens/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import { Route, Switch } from 'react-router-dom'
import Detalle from './screens/Detalle'
import Cartelera from "./screens/Cartelera"
import Populares from "./screens/Populares"
import Favoritos from "./screens/Favoritos"
import NotFound from "./screens/NotFound"
import Resultados from "./screens/Resultados"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' exact={true} component = {Home} />
        <Route path='/cartelera' component = {Cartelera} />
        <Route path='/favoritos' component = {Favoritos} />
        <Route path='/populares' component = {Populares} />
        <Route path='/detalle/:id' component = {Detalle} />
        <Route path='/resultados' exact={true} component = {Resultados} />
        <Route path='' component = {NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
