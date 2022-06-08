import './App.css';
import Natu from "./assets/natu.jfif"
import CondtionalRender from './components/CondtionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import CarDetails from './components/CarDetails';


function App() {
  const name = "João"
  const [userName] = useState("Lucas")

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Preto", newCar: true, km: 0},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 50000},
  ]
  
  return (
    <div className="App">
      <h1>Avançando em   React </h1>

      {/*Img em public*/}

      <div className="Public">
        <p>Img que estava dentro da pasta public </p>
        <img src="/rony.jpg"/>
      </div>

      {/*Img fora da pasta public- em assets ou image*/}

      <div className='Assets'>
        <p>Img que estava fora da pasta public, dentro de uma assets</p>
        <img src={Natu}/>

        
        <ManageData />
        <ListRender />
        <CondtionalRender />
        {/* PROPS */}
        <ShowUserName name={userName} />
        {/* DESTRUCTURING */}
        <CarDetails brand="VW" km={10000} color="Azul" newCar={false} />
        {/* REAPROVEITANDO */}
        <CarDetails brand="Ford" km="15000" color="Preto" newCar={false} />
        <CarDetails brand="Fiat" km="0" color="Branco" newCar={true} />
        <CarDetails brand="Ford" color="Verde" km="0" newCar={true}/>
        {/*LOOP EM ARRAY DE OBJETOS*/}
        {cars.map((car) => (
          <CarDetails
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            newCar={car.newCar}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
