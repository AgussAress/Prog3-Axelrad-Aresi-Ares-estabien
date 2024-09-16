import Home from './screens/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import { Switch, Route } from 'react-router-dom'
import Cartelera from "./screens/Cartelera"
import Populares from "./screens/Populares"
import Favoritos from "./screens/Favoritos"
import NotFound from "./screens/NotFound"



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
      <Route path='/' exact={true} component={Home} />
      <Route path='/cartelera' component={Cartelera} />
      <Route path='/populares' component={Populares} />
      <Route path='/favoritos' component={Favoritos} />
      <Route path="" component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
