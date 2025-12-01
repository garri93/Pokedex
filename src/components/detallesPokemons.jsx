
import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useLocation  } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { obtenerId } from '../utils';

const DetallesPokemons = () => {

  const location = useLocation();
  const detallespokemon = location.state;
  const idPokemon = detallespokemon.id;
  const [evoluciones,setEvolucione] = useState([])


  async function obtenerEvolucionesPokemon(detallespokemon) {
    const responseSpecies = await fetch(detallespokemon.species.url);
    const dataSpecies = await responseSpecies.json();

    console.log(dataSpecies)

    const evolutionChainUrl = dataSpecies.evolution_chain.url;
    const responseEvolution = await fetch(evolutionChainUrl);
    const dataEvolution = await responseEvolution.json();
     console.log(dataEvolution)
     console.log(dataEvolution.chain)
     console.log(dataEvolution.chain.evolves_to)
     console.log(dataEvolution.chain.species.name)
     console.log(dataEvolution.chain.evolves_to.specie.name)
    return dataEvolution.chain;
  }

const { isPending: cargadoListaEvoluciones , isError: errorfalloListaEvoluciones, data: datosevoluciones} = useQuery({ queryKey: ['idevoluciones',idPokemon], queryFn: () => obtenerEvolucionesPokemon(detallespokemon)})

    return (
        <div>
      <h2>{detallespokemon.name}</h2>
      {detallespokemon ? (<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+detallespokemon.id+'.gif'}/>) : ("?")}
      <p>ID:{detallespokemon.id}</p>

      <p>Nivel: {}</p>
      <h2>Evoluciones</h2>
     
              
              {datosevoluciones?.length > 0 ? datosevoluciones.map((pokemon, index) => {
                  return (
                  <ul key={index}>
                      <li><img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+obtenerId(pokemon.url)+'.png'}/></li>
                  </ul>
                  )
              }) : <ul><li>No hay evoluciones</li></ul>
              }



    </div>
    );
}

export default DetallesPokemons;