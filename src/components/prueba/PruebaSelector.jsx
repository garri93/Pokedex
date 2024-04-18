// Componente hijo (Selector.js)
import React from 'react';

function PruebaSelector(props) {
  const usuarios = ['Juan', 'María', 'Pedro'];

  const handleOptionClick = (usuario) => {
    props.onSeleccionUsuario(usuario);
  };

  return (
    <div>
      {usuarios.map((usuario) => (
        <button key={usuario} onClick={() => handleOptionClick(usuario)}>
          {usuario}
        </button>
      ))}
    </div>
  );
}
export default PruebaSelector;