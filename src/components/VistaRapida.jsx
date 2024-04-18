import React, { useState, useEffect } from "react";
import { primeraLetraMayusculas } from '../utils';

const VistaRapida = () => {
  const [dataPokemons, setDataPokemons] = useState([]);
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();
  const [current, setCurrent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function obtenerDatos(nombre,id) {
      //setCurrent = "https://pokeapi.co/api/v2/pokemon/"+nombre;
      setCurrent = "https://pokeapi.co/api/v2/pokemon//ditto";
      const response = await fetch(current);
      const data = await response.json();
      setDataPokemons(data);
      setIsLoading(false);
    }

    obtenerDatos();
  }, [current]);

  return (
    <div>
        <div>
          {/* ... */}
          <h3>{isLoading ? ("?") : (dataPokemons.name)}</h3>
          {isLoading ? ("?") :(<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+obtenerId(pokemon.url)+'.png'}/>)}
          <p>Tipo: </p>
          <div> 
            {isLoading ? ("?") : (dataPokemons.types && dataPokemons.types.map(({ type: { name } }) => (
              <div key={name}>{primeraLetraMayusculas(name)}</div>
            )))}
          </div>
          <p>Altura: {isLoading ? ("?") : (dataPokemons.height)}  </p>
          <p>Peso: {isLoading ? ("?") : (dataPokemons.weight)} </p>
          {/* ... */}
        </div>
    </div>
  );
};

export default VistaRapida;


