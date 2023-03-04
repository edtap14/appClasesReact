import React from "react";

export const Usuario = ({nombre, apellido, edad, id}) => {
    
    return(
        <div>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Edad: {edad}</p>
            <button>info</button>
        </div>
    )
}

export default Usuario