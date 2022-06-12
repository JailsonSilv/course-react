import './App.css';
import MyComponent from './components/MyComponent';

import { useState } from "react";
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Jailson");
  const redTitle = false

  return (
    <div className="App">
      {/* CSS GLOBAL*/}
      <h1>REACT COM CSS</h1>
      

      {/*CSS DE C0MPONENTE*/}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/*INLINE CSS*/}
      <p style={{ 
        color: "#fff", 
        padding: "25px", 
        borderTop: "2px solid white"}}>
        Este elemento foi estilizado de forma inline
      </p>

      {/*CSS inline dinâmico*/}
      <h2 style={n < 3 ? ({color: "gold" }) : ({color: "purple"})}>CSS dinâmico </h2>
      <h2 style={n > 0 ? ({color: "gold" }) : ({color: "purple"})}>CSS dinâmico </h2>
      <h2 style={name === "Jailson" ? ({color: "green", backgroundColor: "#fff" }) : null } > TESTE NOME </h2>

      {/* Clase dinânica */}
      <h2 className= {redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica </h2>

      {/*CSS MODULES*/}
      <Title />
      <h2 className='my_title'>Testando</h2>

      {/*CHALLENGECSS*/}
      
    </div>
  );
}

export default App;
