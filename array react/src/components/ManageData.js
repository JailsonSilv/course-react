// useState na prática
import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    /* Dessa maneira que vamos declarar esse hook vamos declarar 2 variável, desestruturar como se fosse um array,  chamar a primeira do nome que quiser e a segunda set(nome_que_escolheu) */
    
    const [number, setNumber] = useState(50)

  return (
    <div>
        <div>
            <h1>useState na prática</h1>
            <p>Valor: {someData}</p>
            <button onClick={() => {someData = 15}}> Mudar variável </button>
        </div>
        <div>
            <p>Valor: {number} </p>
            <button onClick={() => setNumber(100)}>Mudar com state</button>
        </div>
        <p>Trabalhamos com state pq as alterações são em tempo real, e variável não.</p>
    </div>
   
  )
}

export default ManageData