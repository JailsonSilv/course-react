// Renderização
import { useState } from "react";

const ListRender = () => {
    const[List] = useState(["A", "B", "C", 1, 2, 3]);

    const [users, setUsers] = useState([
        {id: 1, nome: "João", age: 20},
        {id: 2, nome: "Marco", age: 60},
        {id: 3, name: "Luca", age: 70},
    ]);

    const deleteRandom = () => {
        //Pegando num random 
        const randomNumber = Math.floor(Math.random() * 5);
        // deletar
        setUsers((prevUsers) => {
            // manipulação para alterar o state do usuário
            return prevUsers.filter((user) => randomNumber !== user.id);
        });

    }

  return (
    <div>
        {/*Como repetir esses nomes aqui dentro da ul de forma simples */}
        <ul>
            {List.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <h3>Previous state</h3>
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender