import "./Productos.css";
// import { url } from "../../Variables/variables";
import { useEffect, useState } from "react";
import { Producto } from "../../Components/Producto/Producto";

export const Productos = () => {
  const [products, setProducts] = useState({
    limit: 0,
    skip: 0,
    total: 0,
    products: [],
  });

  // console.log('Inicial',products)

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

  // console.log('Resultado final',products)
  // console.log(products.products[0].brand);

  return (
    <div>
        <div className="Productos">
          {products?.products?.map((elProducto) => {
            // console.log(elProducto);
            return (
              <Producto
                key={elProducto.id}
                thumbnail={elProducto.thumbnail}
                images={elProducto.images}
                id={elProducto.id}
                title={elProducto.title}
                brand={elProducto.brand}
                description={elProducto.description}
                rating={elProducto.rating}
                price={elProducto.price}
                category={elProducto.category}
                stock={elProducto.stock}
              />
            );
          })}
        </div>
    </div>
  );
};
