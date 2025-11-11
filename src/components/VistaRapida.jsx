import React, { useState, useEffect } from "react";
import { primeraLetraMayusculas } from '../utils';
import { obtenerId } from '../utils';
import {BrowserRouter , NavLink, Route, Routes,Link} from 'react-router';

const VistaRapida = ({dataPokemon}) => {

  return (
    <div className="container-vistaprevia">
        <div>
          {/* ... */}
          <div className="vistaprevia-foto">
          <h2>Info Pokemon</h2>
          {dataPokemon ? (<img src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/'+dataPokemon.id+'.gif'}/>) : ("?")}
          </div>
          <div>
          <h3>{dataPokemon ? (primeraLetraMayusculas(dataPokemon.name)) : ("?")}</h3>
          <p>Tipo: </p>
          <div> 
            {dataPokemon.types ? (dataPokemon.types && dataPokemon.types.map(({ type: { name } }) => (
              <div key={name}>{primeraLetraMayusculas(name)}</div>
            ))) : ("?")}
          </div>
          <p>Altura: {dataPokemon.height ? (dataPokemon.height) : ("?") }  </p>
          <p>Peso: {dataPokemon.weight ?  (dataPokemon.weight) : ("?")} </p>
          {/* ... */}
          </div>
          <div>
            <Link to={`/detallesPokemon/${dataPokemon.id}`}>Mas Detalles</Link>
            <h3>Detalles</h3>
          </div>
        </div>
    </div>
  );
};

export default VistaRapida;


