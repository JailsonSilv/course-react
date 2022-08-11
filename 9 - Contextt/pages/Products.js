// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();

  return (
    <div>
        <h1>Products</h1>
        <p>Esse é o valor do produto {counter}</p>
    </div>
  )
}

export default Products