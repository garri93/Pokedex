// Componente padre (App.js)
import React, { useState } from 'react';
import PruebaSelector from './PruebaSelector';
import PruebaResultado from './PruebaResultado';

function Prueba1() {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const handleSeleccionUsuario = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  return (
    <div>
      <h1>Elige un usuario:</h1>
      <PruebaSelector onSeleccionUsuario={handleSeleccionUsuario} />
      {usuarioSeleccionado && <PruebaResultado usuario={usuarioSeleccionado} />}
    </div>
  );
}

export default Prueba1;





