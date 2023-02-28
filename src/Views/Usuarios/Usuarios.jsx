import './Usuarios.css';
import { useEffect, useState } from 'react';

export const Usuarios = () => {

    const [users, setUsers] = useState({
        id: 0,
        firstName:'',
        lastName:'',
        maidenName:'',
        age:0,
        gender:'',
        image:'',      
    });

    console.log('Inicial', users)

    const getUsers = () => {
        try {
            fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
        }catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getUsers();
      }, []);

      console.log('Resultado final',users)

    return (
        <div className="Usuarios">
            <h1 className='h3Usuarios'>Mi perfil</h1>
            <li className='pUsuarios'>Aquí deberían ir los datos del usuario (componente)</li>
        </div>
    )
}