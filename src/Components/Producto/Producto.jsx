import React, { useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'


export const Producto = ({ precio, marca, categoria, id, setId }) => {

  const handleClick = (id) => {
    setId(id)
  }

  return (
    <div >
      <p>Marca: {marca}</p>
      <p>Categoria: {categoria}</p>
      <p>precio: {precio}</p>
      <Link onClick={() => { handleClick(id) }} to={`/productos/${id}`}>
        Info
      </Link>
    </div>
  )
}
