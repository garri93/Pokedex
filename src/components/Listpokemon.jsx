import React from "react";
import { useEffect, useState } from "react";
import { primeraLetraMayusculas } from '../utils';
import { obtenerId } from '../utils';
import { useQuery } from "@tanstack/react-query";

const Listpokemon = ({listPokemons,cargarvistaprevia,fondo}) => {
    

    
return (
    <div className="container-lista" style={{
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
   
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
