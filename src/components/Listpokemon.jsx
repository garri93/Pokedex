import React from "react";
import { useEffect, useState } from "react";
import { primeraLetraMayusculas } from '../utils';

const Listpokemon = ({listPokemons}) => {
    
    const obtenerId = (link) => {
        const partes = link.split("/");
        const idPokemon = partes[partes.length - 2]
        return idPokemon;
      }
    
return (
    <div>
   
        {listPokemons.map((pokemon, index) => {
            return (
            <ul key={index}>
                <li><img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+obtenerId(pokemon.url)+'.gif'}/></li>
                <li>{primeraLetraMayusculas(pokemon.name)}</li>
                <li>{pokemon.id}</li>
            </ul>
            )
            
        })
        }
    </div>
)

}

export default Listpokemon;
