import {useState, useEffect } from 'react';
import './Productos.css';
import Card from '../../Components/Card/Card';


export const Productos = () => {
    const [productos, setProductos] = useState([])
   
    const getProductos = () => {
        try {
            fetch('https://dummyjson.com/products') // Hace llamadas remotas hacia un lugar, una promesa es una resolucion de algo
            .then(response => response.json())
            .then((data) => setProductos(data.products));
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProductos();
    }, []); // listener algo que se observa y se ejecuta cada que cambie algo
    
    
    return(
        <div 
            style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            flexWrap: 'wrap',
            border: '1px solid blue'
            }}>
            {productos.map((prod) => {
                return (
                <Card
                    title={prod.title}
                    description={prod.description}
                    category={prod.category}
                    discountPercentage={prod.discountPercentage}
                    images={prod.images}
                    price={prod.price}
                    rating={prod.rating}
                    stock={prod.stock}
                    thumbnail={prod.thumbnail}
                />
                );
            })}
        </div>
    )
}


export default Productos; 