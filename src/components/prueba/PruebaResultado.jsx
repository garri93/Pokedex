// Componente hijo (Resultado.js)
import React from 'react';

function PruebaResultado(props) {
  const { usuario } = props;

  return (
    <div>
      <h2>Información del usuario:</h2>
      <p>Nombre: {usuario}</p>
    </div>
  );
}

export default PruebaResultado;