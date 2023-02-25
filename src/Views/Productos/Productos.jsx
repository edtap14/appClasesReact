import "./Productos.css";
// import { url } from "../../Variables/variables";
import { useEffect, useState } from "react";

export const Productos = () => {
  const [products, setProducts] = useState({
    limit: 0,
    products: [],
    skip: 0,
    total: 0,
  });

  console.log('Inicial',products)

  const getProductos = () => {
    try {
      fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  console.log('Resultado final',products)

  return (
    <div className="Productos">
      <h1 className="h3Productos">Lista de productos</h1>
      <li className="pProductos">Aquí debería ir un producto (componente)</li>
    </div>
  );
};
