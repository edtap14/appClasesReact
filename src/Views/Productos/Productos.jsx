import { useEffect } from 'react';
import './Productos.css';


export const Productos = () => {
    const getProductos = () => {
        try {
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => console.log(data));
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        getProductos();
    }, []);
    
    return(
        <div className='Productos'>
            <h1 className='h3Productos'>Lista de Productos</h1>
            <li className='Productos'>
                Aqui deberia ir un producto (componente)
            </li>
        </div>
    )
}


export default Productos; 