import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const Paginacion = ({previous, next, onprevious, onnext, pagina}) => {
    
    
return (
    <div className="container-paginacion">
    <button onClick={() => previous !== null && onprevious()}>Anteriores</button>
    <h3>Caja {pagina}</h3>
    <button onClick={() => next !== null && onnext()}>Siguientes</button>
    </div>
)

}

export default Paginacion;