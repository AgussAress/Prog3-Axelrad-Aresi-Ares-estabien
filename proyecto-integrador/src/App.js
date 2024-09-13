import Home from './screens/Home'
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Cartelera from "./screens/Cartelera"
import Populares from "./screens/Populares"
import Favoritos from "./screens/Favoritos"
import NotFound from "./screens/NotFound"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path='/' exact={true} component={Home} />
      <Route path='/cartelera' component={Cartelera} />
      <Route path='/populares' component={Populares} />
      <Route path='/favoritos' component={Favoritos} />
      <Route path="" component={NotFound}/>
      </Routes>
    </div>
  );
}

export default App;
