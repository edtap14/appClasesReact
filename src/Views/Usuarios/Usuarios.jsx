import React, {useState, useEffect } from 'react';
import './Usuarios.css';

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    const getUsuarios = () => {
      try {
        fetch('https://dummyjson.com/users')
        .then(response => response.json())
        .then((data) => setUsuarios(data?.users));
      } catch (error) {
        console.log(error)
      }
    };

    useEffect(() => {
      getUsuarios();
    }, []);

    console.log(usuarios)

  return (
    <div className='Usuarios'>
        <div>
            {
              usuarios?.map( (users, index) => {
                console.log(users)
                return(
                  <div key={users.id}>
                      <p>Nombre: {users.firstName}</p>
                      <p>Apellido: {users.lastName}</p>
                      <p>Edad: {users.age}</p>
                  </div>
                )
              })
            }
        </div> 
    </div>
  )
}

export default Usuarios;