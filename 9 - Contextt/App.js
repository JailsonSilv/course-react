import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Navbar from './components/Navbar';

// Pages
import About from './pages/About';
import Products from './pages/Products';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <h1>Context</h1>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products'element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
