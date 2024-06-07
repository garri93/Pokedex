export function primeraLetraMayusculas (texto) {
    if (texto != null) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }
  }
  
export function obtenerId (link) {
    const partes = link.split("/");
    const idPokemon = partes[partes.length - 2]
    return idPokemon;
  }


  