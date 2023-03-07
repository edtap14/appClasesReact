import "./Usuarios.css";
import { useEffect, useState } from "react";
import { Usuario } from "../../Components/Usuario/Usuario"

export const Usuarios = () => {
  const [users, setUsers] = useState({
    limit: 0,
    skip: 0,
    total: 0,
    users: [],
  });

  // console.log("Inicial", users);

  const getUsers = () => {
    try {
      fetch("https://dummyjson.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // console.log("Resultado final", users);
  console.log(users.users);

  return (
    <div className="Usuarios">
      {users?.users?.map((elUsuario) => {
        console.log(elUsuario);
        return (
          <Usuario
          key={elUsuario.id}
            age={elUsuario.age}
            birthDate={elUsuario.birthDate}
            firstName={elUsuario.firstName}
          />
        );
      })}
    </div>
  );
};
