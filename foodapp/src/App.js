import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PizzaHut from './pages/Pizza';
import BurgerHut from './pages/Burger';
import PastaHut from './pages/Pasta';
import Navbar from "./components/navbar";
import './App.css';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pizza" element={<PizzaHut/>}></Route>
          <Route path="/burger" element={<BurgerHut/>}></Route>
          <Route path="/pasta" element={<PastaHut/>}></Route>
        </Routes>
    </div>
  );
}







