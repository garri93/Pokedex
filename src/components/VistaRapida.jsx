import React, { useState, useEffect } from "react";
import { primeraLetraMayusculas } from '../utils';
import { obtenerId } from '../utils';

const VistaRapida = ({dataPokemon}) => {

  return (
    <div className="container-vistaprevia">
        <div>
          {/* ... */}
          <h2>Info Pokemon</h2>
          {dataPokemon ? (<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+dataPokemon.id+'.gif'}/>) : ("?")}
          <h3>{dataPokemon ? (primeraLetraMayusculas(dataPokemon.name)) : ("?")}</h3>
          <p>Tipo: </p>
          <div> 
            {dataPokemon ? ("?") : (dataPokemon.types && dataPokemon.types.map(({ type: { name } }) => (
              <div key={name}>{primeraLetraMayusculas(name)}</div>
            )))}
          </div>
          <p>Altura: {dataPokemon ? ("?") : (dataPokemon.height)}  </p>
          <p>Peso: {dataPokemon ? ("?") : (dataPokemon.weight)} </p>
          {/* ... */}
        </div>
    </div>
  );
};

export default VistaRapida;


