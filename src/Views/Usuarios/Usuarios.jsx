import './Usuarios.css';
import { useEffect, useState } from 'react';

export const Usuarios = () => {

    const [products, setProducts] = useState({
        id: null,
        

    });

    return (
        <div className="Usuarios">
            <h1 className='h3Usuarios'>Mi perfil</h1>
            <li className='pUsuarios'>Aquí deberían ir los datos del usuario (componente)</li>
        </div>
    )
}