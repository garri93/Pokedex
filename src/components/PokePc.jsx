import React from "react";
import Pokemones from './Listpokemon';
import VistaRapida from './VistaRapida';


const PokePc = () => {
  return (
    <div className="ss">
      <VistaRapida />
      <Pokemones />
    </div>
  );
}

export default PokePc;