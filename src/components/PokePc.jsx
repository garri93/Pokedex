import React from "react";
import { useEffect, useState } from "react";
import Listpokemon from './Listpokemon';
import VistaRapida from './VistaRapida';
import Paginacion from './Paginacion';


const PokePc = () => {

const [listPokemons, setListPokemons] = useState([]);
const [previous, setPrevious] = useState();
const [next, setNext] = useState();
const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');

const [dataPokemon, setDataPokemon] = useState([]);
const [currentprevia, setCurrentprevia] = useState('');


const obtenerId = (link) => {
    const partes = link.split("/");
    const idPokemon = partes[partes.length - 2]
    return idPokemon;
  }

const cargarVistaprevia = (nombre) => {
  setCurrentprevia("https://pokeapi.co/api/v2/pokemon/"+nombre);
  }  

useEffect(() => {
    async function obtenerPokemons() {
        const response = await fetch(current);
        const data = await response.json();
        setListPokemons(data.results);
        setPrevious(data.previous);
        setNext(data.next);
        console.log(data);
    }
    obtenerPokemons()
}, [current])


useEffect(() => {
  async function obtenerDatosPokemon() {
    const obtenerDatosPokemonResponse = await fetch(currentprevia);
    const obtenerDatosPokemonData = await obtenerDatosPokemonResponse.json();
    setDataPokemon(obtenerDatosPokemonData);
    //setIsLoading(false);
  }

  obtenerDatosPokemon();
}, [currentprevia]);



  return (
    <div className="container">
      <VistaRapida dataPokemon={dataPokemon}/>
      <Paginacion  
      previous = {previous}
      next = {next}
      onprevious={() => setCurrent(previous)}  
      onnext={() => setCurrent(next)}  
      />
      
      <Listpokemon 
        listPokemons ={listPokemons} 
        cargarvistaprevia ={cargarVistaprevia}/>



    </div>
  );
}

export default PokePc;