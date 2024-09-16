import Home from './screens/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Route } from 'react-router-dom'
import Cartelera from "./screens/Cartelera"
import Populares from "./screens/Populares"
import Favoritos from "./screens/Favoritos"




function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path='/' exact={true} component = {Home} />
      <Route path='/cartelera' component = {Cartelera} />
      <Route path='/favoritos' component = {Favoritos} />
      <Route path='/populares' component = {Populares} />
      <Footer/>
    </div>
  );
}

export default App;
