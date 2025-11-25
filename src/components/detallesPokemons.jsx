
import { useState, useEffect } from 'react';
import { useParams, useLocation  } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const DetallesPokemons = () => {
 
   const location = useLocation();
   const detallespokemon = location.state;
  console.log(detallespokemon)
    return (
        <div>
      <h2>{detallespokemon.name}</h2>
      {detallespokemon ? (<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+detallespokemon.id+'.gif'}/>) : ("?")}
      <p>ID:{}</p>

      <p>Nivel: {}</p>
    </div>
    );
}

export default DetallesPokemons;