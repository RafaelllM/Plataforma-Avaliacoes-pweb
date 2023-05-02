import './App.css';
import Cadastro from './pages/Cadastro';
import Docente from './pages/Docente';
import Turma from './pages/Turma';
import Login from './pages/Login'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Cadastro/>} />
        <Route exact path='/docente' element={<Docente/>} />
        <Route exact path='/Turma' element={<Turma/>} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
