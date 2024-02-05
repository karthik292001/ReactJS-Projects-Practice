import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Academic from './pages/Academic';
import About from './pages/About';

export default function App() {
  return (
    <div >
      <NavBar/>
      <Routes>
      <Route path='/' element={<About/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/academic' element={<Academic/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
    </div>
  );
}


