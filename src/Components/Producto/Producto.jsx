import React from 'react'

export const Producto = ({precio, marca, categoria, id}) => {

  return (
    <div>
        <p>Marca: {marca}</p>
        <p>Categoria: {categoria}</p>
        <p>Precio: {precio}</p> 
        <button>info</button>
    </div>
  )
}

export default Producto