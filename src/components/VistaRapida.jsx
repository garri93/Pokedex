import React from "react";
import {useState, useEffect } from "react";
import { primeraLetraMayusculas } from '../utils';


const VistaRapida = () => {

    const [dataPokemons, setDataPokemons] = useState([]);
    const [previous, setPrevious] = useState();
    const [next, setNext] = useState();
    const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon/ditto');

    useEffect(() => {
        async function obtenerDatos() {
            const response = await fetch(current);
            const data = await response.json();
            setDataPokemons(data);
            console.log(data);
            console.log(dataPokemons);
            console.log(dataPokemons.types);
        }

        obtenerDatos();
}, [current])

    return (
        <div>
            <div>
                <p>id #{dataPokemons.id}</p>
            </div>
            <div>
                <img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+dataPokemons.id+'.png'} />
            </div>

            <div>
                <h3>{dataPokemons.name}</h3>
                <p>Tipo:  {dataPokemons?.types.map(({type: {name}})=> {
                    <div
                        key={name}>
                    </div>
                })}</p>
                <p>Altura: {dataPokemons.height}  </p>
                <p>Peso: {dataPokemons.weight} </p>
            </div>
            <div>

            </div>
            <div>
                
            </div>
            </div>
    
        
       
    )



}

export default VistaRapida;