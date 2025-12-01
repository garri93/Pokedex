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
const [fondo, setFondo] = useState ('');

const fondos = [
  "/images/fondos/centropk.jpg",
  "/images/fondos/cespe.jpg",
  "/images/fondos/cielo.jpg",
  "/images/fondos/ciudad.jpg",
  "/images/fondos/cueva.jpg",
  "/images/fondos/desierto.jpg",
  "/images/fondos/lunares.jpg",
  "/images/fondos/maquinaria.jpg",
  "/images/fondos/mar.jpg",
  "/images/fondos/montaña.jpg",
  "/images/fondos/nieve.jpg",
  "/images/fondos/playa.jpg",
  "/images/fondos/rio.jpg",
  "/images/fondos/sabana.jpg",
  "/images/fondos/volcan.jpg",
];

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

const {isPending: cargadoPokemon , isError: errorfalloPokemon, data: datosPokemon} = useQuery({ queryKey: ['idDatosPokemon',currentprevia], queryFn: () => obtenerDatosPokemon(currentprevia)})

useEffect ( () => {
  if (!current) return;

  const calculoiIdFondo = Math.floor(Math.random() * fondos.length);
  setFondo(fondos[calculoiIdFondo])

  console.log(fondo)
  console.log(calculoiIdFondo)
}, [current]);



  return (
    <div className="container">
      
      <VistaRapida dataPokemon={datosPokemon}/>
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
          fondo = {fondo}
        />


    </div>  


    </div>
  );
}

export default PokePc;