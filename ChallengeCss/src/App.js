import './App.css';
import Bike from './Components/Bike';
import Car from './Components/Car';


function App() {
  const myCar = [
    { name: "Fusca", km: 90000, color: "Amarelo", valor: "R$ 15.000.00" },
    { name: "Polo", km: 27000, color: "Branco", valor: "R$ 32.000.00"},
    { name: "Jeta", km: 10000, color: "Branco", valor: "R$ 95.000.00"}
  ]

  let newbike = "Sim"
  let oldbike = "Não"
  const myBike = [
    { name: "BMX", color: "Branca", new: oldbike, rent: "R$ 40.00"},
    { name: "Dobrável", color: "Vermelha", new: newbike, rent: "R$30.00"},
    { name: "Urbana", color: "Preta", new: newbike, rent: "R$30.00"},
    
  ]

  return (
    <div className="App">
        <h1 className='car_h1'>Showroom de carros</h1>
        <div className="car-container">
          {myCar.map((car) => (
            <Car car={car} />
          ))}      
        </div>
        
          <h1> Show bike </h1>
          <div className="bike-container">
            {myBike.map((bike) => (
              <Bike bike={bike} />
            ))}
          </div>
    </div>
  );
}

export default App;
