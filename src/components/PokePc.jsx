import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Listpokemon from './Listpokemon';
import VistaRapida from './VistaRapida';
import Paginacion from './Paginacion';


const PokePc = () => {


const [current, setCurrent] = useState('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0');
const [pagina,setPagina] = useState(1)
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


    async function obtenerPokemons(current) {
        const response = await fetch(current);
        return response.json();
    }


        async function obtenerDatosPokemon(currentprevia) {
        const response = await fetch(currentprevia);
        return response.json();
    }

const { isPending: cargadoLista , isError: errorfalloLista, data: datosLista} = useQuery({ queryKey: ['datosApi',current], queryFn: () => obtenerPokemons(current)})

const {isPending: cargadoPokemon , isError: errorfalloPokemon, data: datosPokemon} = useQuery({ queryKey: ['datosPokemon',currentprevia], queryFn: () => obtenerPokemons(current)})



useEffect(() => {
  async function obtenerDatosPokemon() {
    const obtenerDatosPokemonResponse = await fetch(currentprevia);
    const obtenerDatosPokemonData = await obtenerDatosPokemonResponse.json();
    setDataPokemon(obtenerDatosPokemonData);
    //setIsLoading(false);
  }

  obtenerDatosPokemon();
}, [currentprevia]);


 // const previous = data.previous;
  //const next = data.next;


  return (
    <div className="container">
      
      <VistaRapida dataPokemon={dataPokemon}/>
     <div className="cajaLista">
        <Paginacion  
        previous = {datosLista?.previous}
        next = {datosLista?.next}
        pagina= {pagina}
        onprevious={() => { if (datosLista.previous) {
            setCurrent(datosLista.previous);
            setPagina(pagina - 1);
          }} }
        onnext={() => {if (datosLista.next) {
            setCurrent(datosLista.next);
            setPagina(pagina + 1);
          }
        } }
        />
        <Listpokemon 
          listPokemons ={datosLista?.results || []} 
          cargarvistaprevia ={cargarVistaprevia}
        />

    </div>  


    </div>
  );
}

export default PokePc;