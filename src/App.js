import logo from './logo.svg';
import './App.css';
import {BrowserRouter , NavLink, Route, Routes,Link} from 'react-router';
import PokePC from './components/PokePc';
import DetallesPokemons from './components/detallesPokemons';

//import Prueba1 from './components/prueba/Prueba1';

function App() {
  return (
  <div className="App">

        <BrowserRouter>
    <div>
      <>
      <h1> POKEDEX </h1>
      <Routes>
        <Route path='/' element={<PokePC /> }/>
        <Route path='/detallespokemon/:id' element={<DetallesPokemons /> }/>
      </Routes>
      </>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
