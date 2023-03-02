import "./Usuarios.css";
import { useEffect, useState } from "react";

export const Usuarios = () => {
  const [users, setUsers] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    maidenName: "",
    age: 0,
    gender: "",
    image: "",
  });

  console.log("Inicial", users);

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

  console.log("Resultado final", users);

  const usuario = ({
    id,
    firstName,
    lastName,
    maidenName,
    age,
    gender,
    image,
  }) => {
    return <div>
      {users.map((e, index) =>  {
        const {id, firstName, lastName, maidenName, age, gender, image } = e;
      }
      )}
      <div>
        
      </div>
        <div>

        </div>
    </div>;
  };

  return (
    <div className="Usuarios">
      <h1 className="h3Usuarios">Mi perfil</h1>
      <li className="pUsuarios">
        Aquí deberían ir los datos del usuario {usuario.id}
      </li>
    </div>
  );
};
