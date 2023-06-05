import './App.css';
import Cadastro from './pages/Cadastro';
import Docente from './pages/Docente';
import Turma from './pages/Turma';
import Login from './pages/Login'
import Questoes from './pages/Questoes';
import QuestoesAbertas from './pages/QuestoesAbertas';
import QuestoesFechadas from './pages/QuestoesFechadas';
import QuestoesVF from './pages/QuestoesVF';
import GerarProva from './components/GerarProva';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Cadastro/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path='/Docente' element={<Docente/>} />
        <Route exact path='/Docente/Turma' element={<Turma/>} />
        <Route exact path="/Docente/Questoes" element={<Questoes/>} />
        <Route exact path="/Docente/Questoes/Abertas" element={<QuestoesAbertas/>} />
        <Route exact path="/Docente/Questoes/Fechadas" element={<QuestoesFechadas/>} />
        <Route exact path="/Docente/Questoes/VF" element={<QuestoesVF/>} />
        <Route exact path="/Docente/Questoes/Prova" element={<GerarProva/>} />
      </Routes>
    </Router>
  );
}

export default App;
