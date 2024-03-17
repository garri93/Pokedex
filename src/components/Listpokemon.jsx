import React from "react";
import { useEffect, useState } from "react";
import { primeraLetraMayusculas } from '../utils';

const Pokemones = () => {
const [listPokemons, setListPokemons] = useState([]);
const [previous, setPrevious] = useState();
const [next, setNext] = useState();
const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon?limit=3&offset=0');


const obtenerId = (link) => {
    const partes = link.split("/");
    const idPokemon = partes[partes.length - 2]
    return idPokemon;
  }

useEffect(() => {
    async function obtenerPokemons() {
        const response = await fetch(current);
        const data = await response.json();
        setListPokemons(data.results);
        setPrevious(data.previous);
        setNext(data.next);
        ///console.log(data);
    }

    obtenerPokemons();
}, [current])

return (
    <div>
   
        {listPokemons.map((pokemon, index) => {
            return (
            <ul key={index}>
                <li><img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+obtenerId(pokemon.url)+'.png'}/></li>
                <li>{primeraLetraMayusculas(pokemon.name)}</li>
                <li>{pokemon.id}</li>
            </ul>
            )
            
        })
        }
    
    

    <button onClick={() => previous !== null && setCurrent(previous)}>Anteriores</button>
    <button onClick={() => next !== null && setCurrent(next)}>Siguientes</button>
    </div>
)

}

export default Pokemones;
