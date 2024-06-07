import React from "react";
import { useEffect, useState } from "react";

const Paginacion = ({previous, next, onprevious, onnext}) => {
    
    
return (
    <div className="container-paginacion">
    <button onClick={() => previous !== null && onprevious()}>Anteriores</button>
    <h3>Caja 1</h3>
    <button onClick={() => next !== null && onnext()}>Siguientes</button>
    </div>
)

}

export default Paginacion;