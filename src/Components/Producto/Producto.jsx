import React, { useEffect } from 'react'
import { Navigate, Link } from 'react-router-dom'


export const Producto = ({ precio, marca, categoria, id, setId }) => {

  useEffect(() => {
    setId(id)
  }, [id])


  return (
    <div >
      <p>Marca: {marca}</p>
      <p>Categoria: {categoria}</p>
      <p>precio: {precio}</p>
      <Link to={`/productos/${id}`}>
        Info
      </Link>
    </div>
  )
}
