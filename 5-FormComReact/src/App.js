import logo from './logo.svg';
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      

      {/* Importção */}
      <MyForm  user={
        {name: "Jailson silva", 
        email: "jailsonsilva@gmail.com", 
        bio: "sou um Advogado", 
        role: "admi"}}/>
    </div>
  );
}

export default App;
