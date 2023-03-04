import React from "react";
import "./Usuario.css";
// import { Carousel } from "../Carousel/Carousel";

export const Usuario = ({ age, birthDate, firstName }) => {
  return (
    <div>
      <div className="producto">
        <p>Edad: {age}</p>
        <p>Cumpleaños {birthDate}</p>
        <p>Nombre: {firstName}</p>
        <button className="boton">Botón que va a la view del producto</button>
      </div>
    </div>
  );
};
