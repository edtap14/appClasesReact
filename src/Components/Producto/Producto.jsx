import React from "react";
import "./Producto.css";
// import { Carousel } from "../Carousel/Carousel";

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
}) => {
  return (
    <div >
      <div className="producto">
        <div className="carousel">
        {images?.map((images) => {
          return (
              <img  src={images} alt={title}/>
          )
        })}
        </div>
        {/* <img className="thumbnail" src={thumbnail} alt={`${title}`} /> */}
        <p>id: {id}</p>
        <p>Titulo: {title}</p>
        <p>Marca: {brand}</p>
        <p>Descripción: {description}</p>
        <p>Rating: {rating}</p>
        <p>Precio: ${price}</p>
        <p>Categoria: {category}</p>
        <p>Stock: {stock}</p>
        <button className="boton">Botón que va a la view del producto</button>
      </div>
    </div>
  );
};
