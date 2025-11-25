import logo from './logo.svg';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './App.css';
import {BrowserRouter , NavLink, Route, Routes,Link} from 'react-router';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import PokePC from './components/PokePc';
import DetallesPokemons from './components/detallesPokemons';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
       {
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
    }
          <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;


