import './App.css';
import Cadastro from './pages/Cadastro';
import Docente from './pages/Docente';
import Turma from './pages/Turma';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Cadastro/>} />
        <Route exact path='/Docente' element={<Docente/>} />
        <Route exact path='/Turma' element={<Turma/>} />
      </Routes>
    </Router>
  );
}

export default App;
