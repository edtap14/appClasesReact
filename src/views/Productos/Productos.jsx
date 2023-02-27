import React, { useEffect, useState } from "react";
import { Producto } from "../Producto/Producto";
import "./Productos.css";

const Productos = ({ setDetailId }) => {
  const [productos, setProductos] = useState({
    limit: 0,
    products: [],
    skip: 0,
  });

  const getProductos = () => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProductos(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {productos?.products.length > 0 ? (
        productos.products.map((p) => {
          return (
            <Producto
              setDetailId={setDetailId}
              key={p.id}
              id={p.id}
              title={p.title}
              brand={p.brand}
              category={p.category}
              description={p.description}
              discountPercentage={p.discountPercentage}
              images={p.images}
              price={p.price}
              rating={p.rating}
              stock={p.stock}
              thumbnail={p.thumbnail}
            />
          );
        })
      ) : (
        <p>No se encontraron productos</p>
      )}
    </div>
  );
};

export default Productos;
