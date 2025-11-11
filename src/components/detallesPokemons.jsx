
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const DetallesPokemons = (dataPokemon) => {
 
  const {id} = useParams();
  
  
    return (
        <div>
      <h2>{dataPokemon.name}</h2>
      <p>ID:{dataPokemon.id}</p>

      <p>Nivel: {dataPokemon.height}</p>
    </div>
    );
}

export default DetallesPokemons;