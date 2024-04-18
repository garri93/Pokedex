import React from "react";
import { useEffect, useState } from "react";

const Paginacion = ({previous, next, onprevious, onnext}) => {
    
    
return (
    <div>
    <button onClick={() => previous !== null && onprevious()}>Anteriores</button>
    <button onClick={() => next !== null && onnext()}>Siguientes</button>
    </div>
)

}

export default Paginacion;