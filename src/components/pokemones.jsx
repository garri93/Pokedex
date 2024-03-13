import React from "react";
import { useEffect, useState } from "react";

const Pokemones = () => {
const [listPokemons, setListPokemons] = useState([]);
const [previous, setPrevious] = useState();
const [next, setNext] = useState();
const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');

useEffect(() => {
    async function obtenerPokemons() {
        const response = await fetch(current);
        const data = await response.json();
        setListPokemons(data.results);
        setPrevious(data.previous);
        setNext(data.next);
        console.log(data);
    }

    obtenerPokemons();
}, [current])

return (
    <div>
    <ul>
        {listPokemons.map((pokemon, index) => {
            return (
                <>
            <li ><img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+index+'.png'}/></li>
            <li >{pokemon.name}</li>
            </>
            )
            
        })
        }
    
    </ul>

    <button onClick={() => previous !== null && setCurrent(previous)}>Anteriores</button>
    <button onClick={() => next !== null && setCurrent(next)}>Siguientes</button>
    </div>
)

}

export default Pokemones;
