import React from "react";
import "./Producto.css";
// import { Carousel } from "../Carousel/Carousel";
import { Navigate, Link } from "react-router-dom";

export const Producto = ({
  images,
  thumbnail,
  id,
  title,
  brand,
  description,
  rating,
  price,
  category,
  stock,
  setId,
}) => {
  // setId(id);
  // const clickMe = () => console.log("id");

  // const handleSubmit = (evento) => {
  //   evento.preventDefault();
  //   return(
  //     <Navigate to='/productos/id' replace={true}/>
  //   )
  // };

  return (
    <div>
      <div className="producto">
        {/* <div className="carousel">
        {images?.map((images) => {
          return (
              <img  src={images} alt={title}/>
          )
        })}
        </div> */}
        <img className="thumbnail" src={thumbnail} alt={`${title}`} />
        <p>id: {id}</p>
        <p>Titulo: {title}</p>
        <p>Marca: {brand}</p>
        <p>Descripción: {description}</p>
        <p>Rating: {rating}</p>
        <p>Precio: ${price}</p>
        <p>Categoria: {category}</p>
        <p>Stock: {stock}</p>
        {/* <button className="boton" onClick={handleSubmit}>
          Botón que va a la view del producto
        </button> */}
        {/* <Link to={`/producto/${id}`}>Info</Link> */}
      </div>
    </div>
  );
};
