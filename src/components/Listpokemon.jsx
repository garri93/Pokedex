import React from "react";
import { useEffect, useState } from "react";
import { primeraLetraMayusculas } from '../utils';
import { obtenerId } from '../utils';

const Listpokemon = ({listPokemons,cargarvistaprevia}) => {
    

    
return (
    <div className="container-lista">
   
        {listPokemons.map((pokemon, index) => {
            return (
            <ul key={index}>
                <li onClick={()=>cargarvistaprevia(pokemon.name)}><img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+obtenerId(pokemon.url)+'.png'}/></li>
            </ul>
            )
        })
        }
    </div>

    
)

}

export default Listpokemon;
