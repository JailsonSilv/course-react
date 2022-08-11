// 3 alterando context
import { useContext } from "react";

import { CounterContext } from "../context/CounterContext";


const ChangeCounter = () => {
    const { counter, setCouter } = useContext(CounterContext);

  return (
    <div>
        <button onClick={() => setCouter(counter + 1)}>
          Add value to counter
        </button>
    </div>
  )
}

export default ChangeCounter