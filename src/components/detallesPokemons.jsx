
import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useLocation  } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { obtenerId} from '../utils';

const DetallesPokemons = () => {

  const location = useLocation();
  const detallespokemon = location.state;
  const idPokemon = detallespokemon.id;
  const [evoluciones,setEvolucione] = useState([]);
  const [arrayEvoluciones, setArrayEvoluciones] = useState([]);

  function obtenerEvoluciones(evolucion) {
    setArrayEvoluciones(prev => [
        ...prev,
        {
          name: evolucion.species.name,
          url: evolucion.species.url
        }
      ]);
}



  async function obtenerEvolucionesPokemon(detallespokemon) {
    const responseSpecies = await fetch(detallespokemon.species.url);
    const dataSpecies = await responseSpecies.json();



    //console.log(dataSpecies)

    const evolutionChainUrl = dataSpecies.evolution_chain.url;
    const responseEvolution = await fetch(evolutionChainUrl);
    const dataEvolution = await responseEvolution.json();
    // console.log(dataEvolution)
    console.log('Total',dataEvolution.chain)
     /*console.log('primera evolucion',dataEvolution.chain.species.name)
     console.log('segunda evolucion',dataEvolution.chain.evolves_to[0].species.name)
     console.log('tercera evolucion',dataEvolution.chain.evolves_to[0].evolves_to[0].species.name)
      console.log('cuantas eviluciones',dataEvolution.chain.evolves_to.length)*/
    // console.log(dataEvolution.chain.species.name)
    // console.log(dataEvolution.chain.evolves_to.specie.name)

    arrayEvoluciones.push({
      name: dataEvolution.chain.species.name,
      url: dataEvolution.chain.species.url,
      //evolution_details: dataEvolution.chainevolution_details
      })

    if (dataEvolution.chain.evolves_to.length === 1 && dataEvolution.chain.evolves_to[0].species ) {

      obtenerEvoluciones(dataEvolution.chain.evolves_to[0])
   
     if (dataEvolution.chain.evolves_to[0].evolves_to[0].species) {
          setArrayEvoluciones(prev => [
        ...prev,
        {
          name: dataEvolution.chain.evolves_to[0].evolves_to[0].species.name,
          url: dataEvolution.chain.evolves_to[0].evolves_to[0].species.url,
        }
      ]);
     }

    } else if  (dataEvolution.chain.evolves_to.length > 1) {

        dataEvolution.chain.evolves_to.forEach(evolucion => {
          obtenerEvoluciones(evolucion);
        });


    }

     

    return arrayEvoluciones;
  }

  console.log('evoluciones',arrayEvoluciones)

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