// Renderização condicional
import { useState } from "react";

const CondtionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Silva")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x  for true, Sim!</p>}
        {!x && <p>Agora x é falso</p>}

        <h3>if ternário</h3>
        {name === "Jailson" ? (
            <div>
                <p>O nome é {name}.</p>
            </div>
        ) : (
            <div>
                <p>O nome não foi encontrado!</p>
            </div>
        )}
        <button onClick={() => setName("Jailson")}>Click aqui</button>
    </div>
  )
}

export default CondtionalRender