import {useState, useEffect } from 'react';
import './Productos.css';
import Card from '../../Components/Card/Card';
import Producto from '../../Components/Producto/Producto';


export const Productos = () => {
    const [productos, setProductos] = useState([])
   
    const getProductos = () => {
        try {
            fetch('https://dummyjson.com/products') // Hace llamadas remotas hacia un lugar, una promesa es una resolucion de algo
            .then(response => response.json())
            .then((data) => setProductos(data?.products));
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProductos();
    }, []); // listener algo que se observa y se ejecuta cada que cambie algo

    console.log(productos)
    
    return(
        <div className='Productos'>
            <div>
                {
                    productos?.map( (products, index) => {
                        console.log(products)
                        return(
                            <div key={products.id}>
                                <p>Marca: {products?.brand}</p>
                                <p>Categoria: {products?.category}</p>
                                <p>Precio: {products?.price}</p>
                            </div>
                        )
                    })
                }
                {/* {
                    productos?.map(chuchita => {
                        return(
                            <Producto
                            precio={chuchita.price}
                            marca={chuchita.brand}
                            categoria={chuchita.category}
                            />
                        )
                    })
                } */}
            </div>

        </div> 
    )
}


export default Productos; 